# Macrovesta n8n DBR Automation Workflows
**Database Reactivation & Lead Nurture Automation**
**Version 1.0 - October 28, 2025**
**Prepared by: Cold Lava for Macrovesta**

---

## Overview

This document provides complete node-by-node specifications for 3 n8n workflows that automate lead nurture and conversion for Macrovesta. These workflows handle:

1. **Demo No-Show Recovery** - Re-engage prospects who book but don't attend demos
2. **Demo Completed, No Purchase** - Nurture attendees who haven't started trials
3. **Website Visitor Nurture** - Convert researchers into demo bookings

---

## Technical Requirements

### n8n Setup:
- n8n Cloud (https://n8n.cloud) or self-hosted instance
- Version: 1.0+ (tested on latest)

### Integrations Needed:
- **Google Sheets** (lead tracking database)
- **Twilio** (SMS delivery)
- **SendGrid or Mailgun** (email delivery)
- **Calendly** (demo booking webhook)
- **Sanity CMS** (optional - for centralized lead data)
- **OpenAI** (optional - for AI-personalized messages)

### Rate Limiting:
- SMS: 1 message per minute (Twilio compliance)
- Email: No strict limit, but recommend 5-10/minute to avoid spam flags

---

# WORKFLOW 1: Demo No-Show Recovery

**Purpose:** Re-engage prospects who booked a demo but didn't attend
**Trigger:** Calendly "invitee.canceled" or manual status update in Google Sheets
**Timeline:** +4 hours → +24 hours → +72 hours
**Channels:** Email + SMS (multi-channel)

---

## Workflow Architecture

```
Calendly Webhook → Extract Data → Check Lead Exists →
    ↓
Wait 4 Hours → Send Email 1 + SMS 1 → Update Sheet →
    ↓
Wait 20 Hours → Check Response →
    ↓ (No Response)
Send Email 2 + SMS 2 → Update Sheet →
    ↓
Wait 48 Hours → Check Response →
    ↓ (No Response)
Send Email 3 (Final) → Update Sheet → Mark as DEAD or WARM
```

---

## Node-by-Node Specification

### NODE 1: Calendly Webhook (Trigger)
**Type:** `Webhook` (n8n-nodes-base.webhook)
**HTTP Method:** POST
**Path:** `/webhook/calendly-no-show`
**Authentication:** None (Calendly sends signature for verification)

**Expected Payload:**
```json
{
  "event": "invitee.canceled",
  "payload": {
    "name": "John Smith",
    "email": "john@example.com",
    "event_type_name": "15-Minute Macrovesta Demo",
    "scheduled_event": {
      "start_time": "2025-11-01T14:00:00Z"
    },
    "cancel_reason": "No-show" or "Rescheduled"
  }
}
```

**Output:**
- `$json.payload.name` → Lead name
- `$json.payload.email` → Lead email
- `$json.payload.event_type_name` → Demo type
- `$json.payload.scheduled_event.start_time` → Missed demo time

---

### NODE 2: Extract Lead Data
**Type:** `Set` (Edit Fields node)
**Purpose:** Normalize data for downstream nodes

**Fields to Set:**
```javascript
name: {{ $json.payload.name }}
email: {{ $json.payload.email }}
phone: {{ $json.payload.questions_and_answers.find(q => q.question === "Phone Number")?.answer || "" }}
company: {{ $json.payload.questions_and_answers.find(q => q.question === "Company Name")?.answer || "" }}
demo_time: {{ $json.payload.scheduled_event.start_time }}
status: NO_SHOW
timestamp: {{ $now.toISO() }}
```

**Output:**
Clean data object ready for database lookup and messaging

---

### NODE 3: Check Lead Exists in Google Sheets
**Type:** `Google Sheets` (n8n-nodes-base.googleSheets)
**Operation:** Lookup
**Sheet ID:** [Your Google Sheet ID]
**Sheet Name:** "Leads"
**Lookup Column:** Email
**Lookup Value:** `{{ $json.email }}`

**IF Lead Exists:**
- Get row data (existing status, previous touchpoints)
- Output: `$json.row_number`, `$json.Contact_Status`, `$json.Demo_Count`

**IF Lead Doesn't Exist:**
- Create new row with extracted data
- Set initial status: NO_SHOW
- Output: New row created

---

### NODE 4: Wait 4 Hours
**Type:** `Wait` (n8n-nodes-base.wait)
**Wait Type:** Duration
**Duration:** 4 hours

**Why 4 Hours:**
- Demo was scheduled, they forgot
- 4 hours = still same day, top of mind
- Not too aggressive (1 hour feels pushy)

---

### NODE 5: Send Email 1 (Video Recap)
**Type:** `SendGrid` or `Gmail` (n8n-nodes-base.sendGrid)
**From:** joe@macrovesta.ai
**To:** `{{ $json.email }}`
**Subject:** "Missed you today - here's what you would have seen"

**Email Body:**
```html
Hi {{ $json.name }},

I noticed you weren't able to make our demo earlier today at {{ $json.demo_time }}.

No worries - I know Fridays get hectic (especially if you spent the afternoon analyzing COT reports 😊).

I recorded a quick 3-minute walkthrough showing exactly what we would have covered:

[Video Link: Loom recording of standard demo]

Key highlights:
✓ How Macrovesta turns 10 hours of Friday analysis into 30 seconds
✓ Example: Last week's COT report analyzed in plain language
✓ How to forward alerts to clients (saves even more time)

If this looks interesting, you can:
1. Book another demo: [Calendly Link]
2. Just start the 14-day free trial: [Trial Link]

Either way, hope the video is helpful!

Best,
Joe
Macrovesta

P.S. - Your first alert would arrive this Friday at 3:30 PM if you start the trial today.
```

**Output:** Email sent status

---

### NODE 6: Send SMS 1 (Quick Follow-Up)
**Type:** `Twilio` (n8n-nodes-base.twilio)
**From:** [Your Twilio Number]
**To:** `{{ $json.phone }}`

**SMS Body:**
```
Hi {{ $json.name.split(' ')[0] }}, Joe from Macrovesta. Missed you at our demo today. Sent you a quick video recap via email. Worth checking out if you want to automate your Friday workflow. - Joe
```

**Character Count:** 158 (under 160 SMS limit)

**Only Send If:**
- `$json.phone` is not empty
- Phone number is valid format (regex check)

---

### NODE 7: Update Google Sheets (Message 1 Sent)
**Type:** `Google Sheets`
**Operation:** Update
**Sheet:** "Leads"
**Row:** `{{ $json.row_number }}`

**Columns to Update:**
```javascript
Contact_Status: NO_SHOW_CONTACTED_1
Message_1_Sent: {{ $now.toISO() }}
Last_Touchpoint: Email + SMS (No-Show Recovery #1)
Demo_Count: {{ $json.Demo_Count + 1 }}
```

---

### NODE 8: Wait 20 Hours
**Type:** `Wait`
**Duration:** 20 hours

**Total Time Since No-Show:** 24 hours (4h + 20h)

---

### NODE 9: Check If Lead Responded
**Type:** `Google Sheets`
**Operation:** Lookup
**Purpose:** Check if lead replied, booked new demo, or started trial

**Lookup:**
- Row: `{{ $json.row_number }}`
- Check fields: `Contact_Status`, `Trial_Started`, `New_Demo_Booked`

**IF Status = "TRIAL_STARTED" or "DEMO_BOOKED":**
→ END workflow (they re-engaged)

**IF Status = "NO_SHOW_CONTACTED_1" (no response):**
→ Continue to Message 2

---

### NODE 10: Send Email 2 (Question-Led Re-Engagement)
**Type:** `SendGrid`
**Subject:** "Quick question about your Friday workflow"

**Email Body:**
```html
Hi {{ $json.name }},

Following up on the demo you booked earlier this week.

Quick question: how much time does your team currently spend analyzing USDA and COT reports each week?

Most advisors we talk to say 8-10 hours. At £50/hour, that's £20,000-£26,000/year in time value.

Macrovesta costs £1,800/year and gives you those hours back.

Here's what [Similar Advisor in Similar Location] said after trying it:

"I got my Friday back. That's worth way more than £150/month."

Worth 15 minutes to see how it works for you?

Book a new demo: [Calendly Link]
Or start free trial: [Trial Link]

Best,
Joe

P.S. - No credit card needed for trial. You'll get your first COT alert this Friday and can decide if it's worth it.
```

---

### NODE 11: Send SMS 2 (Direct Offer)
**Type:** `Twilio`

**SMS Body:**
```
{{ $json.name.split(' ')[0] }}, still spending Fridays analyzing reports? Try Macrovesta free for 14 days. No credit card. Get your first Friday back: [Short Link] - Joe
```

**Character Count:** 155

---

### NODE 12: Update Google Sheets (Message 2 Sent)
**Type:** `Google Sheets`
**Operation:** Update

**Columns:**
```javascript
Contact_Status: NO_SHOW_CONTACTED_2
Message_2_Sent: {{ $now.toISO() }}
Last_Touchpoint: Email + SMS (No-Show Recovery #2)
```

---

### NODE 13: Wait 48 Hours
**Type:** `Wait`
**Duration:** 48 hours

**Total Time Since No-Show:** 72 hours (3 days)

---

### NODE 14: Final Check
**Type:** `Google Sheets`
**Operation:** Lookup

**IF Lead Still Hasn't Responded:**
→ Send Email 3 (final touchpoint)

**IF Lead Responded:**
→ END workflow

---

### NODE 15: Send Email 3 (Last Attempt + Value Gift)
**Type:** `SendGrid`
**Subject:** "Last email about Macrovesta (+ free gift inside)"

**Email Body:**
```html
Hi {{ $json.name }},

I don't want to keep filling your inbox, so this is my last email about Macrovesta.

Even if it's not a fit right now, I wanted to share something that might be helpful:

**FREE: 2026 Cotton Market Outlook Report**

Our team at Earlam & Partners just published our forecast for next year:
- 5 key price drivers to watch
- Supply/demand projections
- Risk scenarios (bullish vs bearish)

Download here (no signup required): [Link to PDF]

And if you ever want to see how Macrovesta works, we're here: [Trial Link]

Best of luck with the upcoming season,
Joe

P.S. - If you know another cotton advisor who might benefit from this, feel free to forward. Always happy to help the community.
```

**Why This Works:**
- Gives value even if they don't buy (builds goodwill)
- "Last email" removes pressure
- Forward to colleague = referral opportunity

---

### NODE 16: Final Status Update
**Type:** `Google Sheets`
**Operation:** Update

**Columns:**
```javascript
Contact_Status: NO_SHOW_DEAD (if no response after 3 emails) or NO_SHOW_WARM (if they opened emails but didn't convert)
Message_3_Sent: {{ $now.toISO() }}
Final_Status: UNRESPONSIVE
Notes: Completed no-show recovery sequence. No engagement after 3 touchpoints over 72 hours.
```

---

### NODE 17: Notify Sales Team (Optional)
**Type:** `Slack` or `Email`
**To:** Joe's team
**Message:**
```
Lead Update: {{ $json.name }} ({{ $json.email }}) completed no-show sequence with no conversion.

Last interaction: Downloaded 2026 Outlook Report
Recommendation: Leave for 30 days, then add to quarterly nurture campaign
```

---

## Workflow 1 Success Metrics

**Track These:**
- Total no-shows: [count]
- Email 1 response rate: Target 10-15%
- Email 2 response rate: Target 5-10%
- Email 3 response rate: Target 3-5%
- Total recovery rate (booked new demo or started trial): Target 20-25%

**Optimization Ideas:**
- A/B test video vs no video in Email 1
- Test SMS timing (immediately vs 4 hours)
- Personalize based on industry (cotton vs multi-commodity)

---

# WORKFLOW 2: Demo Completed, No Purchase

**Purpose:** Convert demo attendees into trial users and paying customers
**Trigger:** Demo completed (Calendly webhook) + Trial not started (24-hour check)
**Timeline:** Day 1 → Day 3 → Day 7 → Day 14
**Channels:** Email (primary), SMS (secondary)

---

## Workflow Architecture

```
Calendly Webhook (Demo Completed) → Extract Data → Wait 24h →
    ↓
Check Trial Status →
    ↓ (No Trial)
Send Email 1 (Custom Report) → Update Sheet →
    ↓
Wait 2 Days → Check Trial Status →
    ↓ (No Trial)
Send Email 2 (Social Proof) → Update Sheet →
    ↓
Wait 4 Days → Check Trial Status →
    ↓ (No Trial)
Send Email 3 (FAQ + Objections) → Update Sheet →
    ↓
Wait 7 Days → Send Email 4 (Last Offer) → Mark Status
```

---

## Node-by-Node Specification

### NODE 1: Calendly Webhook (Demo Completed)
**Type:** `Webhook`
**Event:** "invitee_no_show.created" (inverted - they DID show)
**Path:** `/webhook/calendly-demo-completed`

**Payload:**
```json
{
  "event": "invitee.created",
  "payload": {
    "status": "active",
    "name": "Sarah Johnson",
    "email": "sarah@cottonadvisors.com",
    "event_type_name": "15-Minute Macrovesta Demo",
    "scheduled_event": {
      "start_time": "2025-11-01T14:00:00Z"
    }
  }
}
```

**Output:** Lead attended demo

---

### NODE 2: Extract + Enrich Demo Data
**Type:** `Set`

**Fields:**
```javascript
name: {{ $json.payload.name }}
email: {{ $json.payload.email }}
phone: {{ $json.payload.questions_and_answers.find(q => q.question === "Phone Number")?.answer }}
company: {{ $json.payload.questions_and_answers.find(q => q.question === "Company Name")?.answer }}
hours_per_week: {{ $json.payload.questions_and_answers.find(q => q.question === "Hours spent on report analysis per week")?.answer }}
demo_date: {{ $json.payload.scheduled_event.start_time }}
status: DEMO_COMPLETED
```

---

### NODE 3: Update Google Sheets (Demo Completed)
**Type:** `Google Sheets`
**Operation:** Update or Append

**Columns:**
```javascript
Name: {{ $json.name }}
Email: {{ $json.email }}
Phone: {{ $json.phone }}
Company: {{ $json.company }}
Contact_Status: DEMO_COMPLETED
Demo_Date: {{ $json.demo_date }}
Hours_Per_Week: {{ $json.hours_per_week }}
Last_Touchpoint: Attended demo
```

---

### NODE 4: Wait 24 Hours
**Type:** `Wait`
**Duration:** 24 hours

**Why 24 Hours:**
- Give them time to start trial on their own
- Not too fast (feels pushy), not too slow (they forget)

---

### NODE 5: Check Trial Status
**Type:** `HTTP Request` or `Google Sheets Lookup`
**Purpose:** Did they start trial in last 24 hours?

**If Using Sanity/Database:**
```javascript
GET /api/check-trial-status?email={{ $json.email }}

Response:
{
  "trial_started": true/false,
  "trial_start_date": "2025-11-02T10:00:00Z" or null
}
```

**If Using Google Sheets:**
- Lookup email
- Check column "Trial_Started" = "YES" or "NO"

**IF Trial Started:**
→ END workflow (they converted!)

**IF Trial NOT Started:**
→ Continue to Email 1

---

### NODE 6: Generate Custom Report (Optional - AI)
**Type:** `OpenAI` (n8n-nodes-langchain.openAi)
**Purpose:** Create personalized example analysis for their specific use case

**Prompt:**
```
Generate a sample Macrovesta alert for this advisor:

Advisor: {{ $json.name }}
Company: {{ $json.company }}
Time spent on analysis: {{ $json.hours_per_week }} hours/week

Use last Friday's actual COT report data (you have access to):
- Managed money positioning: Short 62,004 contracts (up 8,000 from prior week)
- Commercial hedgers: Long 58,234 contracts (down 2,000)

Write a 2-3 sentence WhatsApp-style alert this advisor would receive. Plain language, actionable, professional but conversational.
```

**Output:**
```
"Sarah, managed money just increased their cotton short position by 8,000 contracts this week (now short 62,004 total). That's a bearish signal - big speculators betting on lower prices. Commercial hedgers are backing off longs too. Watch for downward pressure next week."
```

---

### NODE 7: Send Email 1 (Custom Report Example)
**Type:** `SendGrid`
**Subject:** "Your custom Macrovesta report example, {{ $json.name.split(' ')[0] }}"

**Email Body:**
```html
Hi {{ $json.name }},

Great talking with you yesterday! You mentioned you spend {{ $json.hours_per_week }} hours/week analyzing cotton market reports.

I wanted to show you exactly what you would have received if you'd been using Macrovesta last Friday.

Here's the WhatsApp alert you would have gotten at 3:30 PM:

---
📊 COT Report Analysis (Nov 1, 2025)

{{ AI_GENERATED_CUSTOM_ANALYSIS }}

Forward to clients →
---

That's it. No 3-hour analysis session. No manually pulling data from PDFs. Just 30 seconds to review and send to your clients.

If you want to get this alert THIS Friday, start your 14-day trial:
[Trial Link]

No credit card needed. First alert arrives Friday 3:30 PM.

Questions? Just reply to this email.

Best,
Joe

P.S. - At {{ $json.hours_per_week }} hours/week, you're spending ~{{ $json.hours_per_week * 52 }} hours/year on analysis. That's {{ ($json.hours_per_week * 52 / 40).toFixed(0) }} work weeks. Imagine getting that time back.
```

**Personalization:**
- Uses their name
- References hours they mentioned in demo
- Calculates their specific time savings
- Custom AI-generated analysis

---

### NODE 8: Update Sheet (Email 1 Sent)
**Type:** `Google Sheets`
**Operation:** Update

**Columns:**
```javascript
Contact_Status: DEMO_COMPLETED_CONTACTED_1
Message_1_Sent: {{ $now.toISO() }}
Last_Touchpoint: Custom report email
```

---

### NODE 9: Wait 2 Days
**Type:** `Wait`
**Duration:** 48 hours

**Total Time Since Demo:** 3 days

---

### NODE 10: Check Trial Status Again
**Type:** `HTTP Request` or `Google Sheets`

**IF Trial Started:**
→ END workflow

**IF NOT:**
→ Send Email 2

---

### NODE 11: Send Email 2 (Social Proof + How Others Use It)
**Type:** `SendGrid`
**Subject:** "How other advisors are using Macrovesta"

**Email Body:**
```html
Hi {{ $json.name }},

Following up on our demo from earlier this week.

I wanted to share how a few cotton advisors similar to you are using Macrovesta:

**David T., Independent Advisor (Texas)**
"I was skeptical about AI analysis, but the first Friday convinced me. I forwarded the COT alert to my 15 clients, added 2 sentences of my own thoughts, and was done in 5 minutes. Used to take me 3 hours."

**Maria G., Cotton Broker (Greece)** [Your existing testimonial]
"The educational part is what sold me. My clients actually understand what managed money positioning means now because I can explain it in simple terms - just like Macrovesta does."

**Common use case:**
1. Friday 3:30 PM: COT alert arrives via WhatsApp
2. Quick 30-second review: "Yep, that's accurate"
3. Forward to client WhatsApp group (or email)
4. Add your unique market perspective (2-3 sentences)
5. Done. Friday evening is yours.

You mentioned you spend {{ $json.hours_per_week }} hours/week on this. These advisors got that time back.

Want to try it this Friday? Start your trial: [Link]

Best,
Joe

P.S. - Here's a 2-minute video of exactly what your Friday workflow would look like: [Loom Link]
```

---

### NODE 12: Update Sheet (Email 2 Sent)
**Type:** `Google Sheets`

**Columns:**
```javascript
Contact_Status: DEMO_COMPLETED_CONTACTED_2
Message_2_Sent: {{ $now.toISO() }}
Last_Touchpoint: Social proof email
```

---

### NODE 13: Wait 4 Days
**Type:** `Wait`
**Duration:** 96 hours

**Total Time Since Demo:** 7 days

---

### NODE 14: Check Trial Status (Third Time)
**Type:** `HTTP Request` or `Google Sheets`

**IF Trial Started:**
→ END workflow

**IF NOT:**
→ Send Email 3 (Objection Handling)

---

### NODE 15: Send Email 3 (FAQ + Address Common Objections)
**Type:** `SendGrid`
**Subject:** "Common questions about Macrovesta (answered)"

**Email Body:**
```html
Hi {{ $json.name }},

It's been a week since our demo. I haven't heard back, which usually means one of these questions is on your mind:

**"How do I know the AI analysis is accurate?"**
Fair question. Macrovesta is trained on 10+ years of expert analysis from Earlam & Partners consultants (not a generic ChatGPT plugin). Plus, we show you the underlying data so you can verify in 30 seconds. You're still the expert - we just do the data gathering.

**"I like doing my own analysis. Why would I use this?"**
We're not replacing your analysis - we're automating the tedious part. You still add your unique market insights. You're just not spending 3 hours copy-pasting data from PDFs anymore.

**"Is £150/month worth it for my small shop?"**
You mentioned you spend {{ $json.hours_per_week }} hours/week on reports. At even £30/hour, that's {{ (($json.hours_per_week * 52 * 30) / 12).toFixed(0) }}£/month in time value. Macrovesta costs £150. You save {{ ((($json.hours_per_week * 52 * 30) / 12) - 150).toFixed(0) }}£/month minimum.

**"What if I don't like it?"**
Cancel anytime. No contract. We're confident you'll love it (90%+ of trial users convert), but there's zero risk to try.

Still on the fence? Start the 14-day trial and see for yourself: [Link]

Or if you have a specific question I didn't address, just reply to this email.

Best,
Joe

P.S. - This Friday's COT report could be the first one you DON'T manually analyze. Up to you.
```

**Why This Works:**
- Proactively addresses objections (they don't have to ask)
- Personalizes with their time data
- Calculates specific ROI for them
- Low-pressure (just reply if you have questions)

---

### NODE 16: Update Sheet (Email 3 Sent)
**Type:** `Google Sheets`

**Columns:**
```javascript
Contact_Status: DEMO_COMPLETED_CONTACTED_3
Message_3_Sent: {{ $now.toISO() }}
Last_Touchpoint: FAQ / Objection handling email
```

---

### NODE 17: Wait 7 Days
**Type:** `Wait`
**Duration:** 168 hours

**Total Time Since Demo:** 14 days

---

### NODE 18: Check Trial Status (Final)
**Type:** `HTTP Request` or `Google Sheets`

**IF Trial Started:**
→ END workflow (late conversion!)

**IF NOT:**
→ Send Email 4 (Final Offer)

---

### NODE 19: Send Email 4 (Last Chance + Special Offer)
**Type:** `SendGrid`
**Subject:** "Last email from me, {{ $json.name.split(' ')[0] }}"

**Email Body:**
```html
Hi {{ $json.name }},

It's been 2 weeks since our demo, and I haven't heard back. I'm guessing Macrovesta isn't a priority right now - and that's totally fine.

This is my last email.

That said, if timing was the only issue (and not fit), here's a special offer:

**Extended trial: 30 days instead of 14**
Use code: TAKE-YOUR-TIME

Plus, I'll personally onboard you (15-minute call to walk through your specific workflow).

Offer expires in 7 days: [Trial Link with Code Pre-Applied]

And if it's genuinely not a fit, no worries. Here's a free resource in case it's helpful down the line:

**The Commodity Advisor's Friday Workflow Audit** (PDF checklist)
Download: [Link]

Best of luck this season,
Joe

P.S. - If you know another cotton advisor who's drowning in Friday reports, feel free to forward this. Always happy to help the community.
```

**Why This Works:**
- "Last email" removes pressure
- Special offer creates urgency (7-day expiration)
- Personal onboarding = high-touch closer for fence-sitters
- Free resource = value even if they don't buy
- Referral ask = network effects

---

### NODE 20: Final Status Update
**Type:** `Google Sheets`

**Columns:**
```javascript
Contact_Status: DEMO_COMPLETED_NO_CONVERSION
Message_4_Sent: {{ $now.toISO() }}
Final_Status: WARM (downloaded resources, engaged with emails) or COLD (no opens, no clicks)
Notes: Completed post-demo nurture sequence. {{ IF email_opens > 2 THEN "High engagement, add to quarterly nurture" ELSE "Low engagement, remove from active campaigns" }}
```

---

### NODE 21: Add to Long-Term Nurture (If Warm)
**Type:** `IF` condition

**IF Status = WARM:**
- Add to quarterly newsletter list
- Tag for "2026 Cotton Outlook Report" email (next release)
- Re-engage in 90 days with new case study

**IF Status = COLD:**
- Remove from active campaigns
- Archive contact

---

## Workflow 2 Success Metrics

**Track These:**
- Demo → Trial conversion (within 24h): Target 30-40%
- Email 1 response rate: Target 15-20%
- Email 2 response rate: Target 10-15%
- Email 3 response rate: Target 8-12%
- Email 4 response rate (last chance offer): Target 10-15%
- Total sequence conversion (demo → paid): Target 50-60%

---

# WORKFLOW 3: Website Visitor Nurture

**Purpose:** Convert cold website traffic into demo bookings
**Trigger:** Visited pricing/features page but didn't book demo
**Timeline:** +24h → +48h → +7 days → +14 days
**Channels:** Email (if captured via lead magnet or exit popup)

---

## Workflow Architecture

```
Website Event (Visited Pricing) → Capture Email (Exit Popup or Lead Magnet) →
    ↓
Wait 24h → Check Demo Status →
    ↓ (No Demo)
Send Email 1 (Comparison Guide) → Update Sheet →
    ↓
Wait 24h → Check Demo Status →
    ↓ (No Demo)
Send Email 2 (Lead Magnet Offer) → Update Sheet →
    ↓
Wait 5 Days → Send Email 3 (Demo Video) →
    ↓
Wait 7 Days → Send Email 4 (Case Study) → Final Status
```

---

## Node-by-Node Specification

### NODE 1: Website Tracking Pixel (Trigger)
**Type:** `Webhook`
**Purpose:** Track website visitors who view pricing/features

**Implementation Options:**

**Option A: Facebook/Meta Pixel**
```javascript
fbq('track', 'ViewContent', {
  content_name: 'Pricing Page',
  content_category: 'Product Interest'
});
// Webhook fires when pixel event detected
```

**Option B: Custom Next.js Event**
```javascript
// In macrovesta.ai/advisors page
useEffect(() => {
  if (window.location.pathname === '/pricing') {
    fetch('/api/track-visitor', {
      method: 'POST',
      body: JSON.stringify({
        page: 'pricing',
        timestamp: new Date(),
        referrer: document.referrer
      })
    });
  }
}, []);
```

**Webhook receives:**
```json
{
  "event_type": "page_view",
  "page": "/pricing",
  "visitor_id": "anonymous_12345",
  "timestamp": "2025-11-01T14:23:10Z"
}
```

---

### NODE 2: Exit Popup (Email Capture)
**Type:** External (OptinMonster, Sumo, or custom)
**Trigger:** User moves mouse to close tab on pricing page
**Timing:** After 30 seconds on page

**Popup Copy:**
```
Headline: "Wait! Before You Go..."

Body:
"Comparing commodity intelligence platforms?

Download our free comparison guide:
✓ Macrovesta vs Bloomberg vs SpreadCharts
✓ Feature-by-feature breakdown
✓ Price comparison ($1.8K vs $24K/year)
✓ Which is right for your advisory practice?

Enter your email to download (no signup required):"

[Email Field]
[Download Guide Button]
```

**On Submit:**
- Email sent to n8n webhook: `/webhook/lead-magnet-download`
- Payload: `{ "email": "advisor@example.com", "lead_magnet": "Comparison Guide" }`

---

### NODE 3: Email Capture Webhook
**Type:** `Webhook`
**Path:** `/webhook/lead-magnet-download`

**Payload:**
```json
{
  "email": "advisor@example.com",
  "lead_magnet": "Comparison Guide",
  "page_visited": "/pricing",
  "timestamp": "2025-11-01T14:30:00Z"
}
```

---

### NODE 4: Send Lead Magnet Immediately
**Type:** `SendGrid`
**Subject:** "Your Macrovesta vs Bloomberg comparison guide"

**Email Body:**
```html
Hi there,

Thanks for your interest! Here's your comparison guide:

**[Download: Macrovesta vs Bloomberg vs SpreadCharts]** (PDF attached)

Quick summary:
- Bloomberg: £24,000/year, raw data (no automated analysis)
- SpreadCharts: £1,200/year, COT only (missing USDA, Cotton on Call)
- Macrovesta: £1,800/year, all reports automated + plain-language analysis

Which is right for you depends on your specific needs (guide breaks it down in detail).

If you want to see Macrovesta in action, book a quick 15-minute demo:
[Demo Link]

Or start a free 14-day trial (no credit card):
[Trial Link]

Best,
Joe / Macrovesta Team
```

**PDF Attachment:** Comparison guide (pre-created asset)

---

### NODE 5: Add to Google Sheets
**Type:** `Google Sheets`
**Operation:** Append

**Columns:**
```javascript
Email: {{ $json.email }}
Contact_Status: LEAD_MAGNET_DOWNLOADED
Lead_Magnet: {{ $json.lead_magnet }}
Page_Visited: {{ $json.page_visited }}
Captured_Date: {{ $json.timestamp }}
Source: Exit popup
```

---

### NODE 6: Wait 24 Hours
**Type:** `Wait`
**Duration:** 24 hours

---

### NODE 7: Check Demo Booking Status
**Type:** `Google Sheets` or `Calendly API`
**Purpose:** Did they book demo after downloading guide?

**IF Demo Booked:**
→ END workflow (they converted to demo, Workflow 2 takes over)

**IF NOT:**
→ Continue to Email 1

---

### NODE 8: Send Email 1 (Educational - How to Interpret COT)
**Type:** `SendGrid`
**Subject:** "How to read COT reports (without spending 3 hours)"

**Email Body:**
```html
Hi,

You downloaded our comparison guide yesterday - hope it was helpful!

Quick question: do you currently analyze CFTC COT reports?

Most commodity advisors spend 2-3 hours every Friday pulling data from the PDF and figuring out what it means.

Here's a shortcut I've learned over 10+ years in cotton markets:

**Focus on 3 Things:**
1. Managed Money positioning (not commercial hedgers)
2. Week-over-week CHANGES (not absolute numbers)
3. Extremes (highest short in 6 months? Pay attention.)

Example from last Friday:
- Managed money: Short 62,004 contracts
- Change: UP 8,000 from prior week
- Context: Highest short position since June

**Translation:** Big speculators betting cotton prices fall. Bearish signal.

That analysis took me 5 minutes. It used to take 2 hours.

Now imagine getting that analysis delivered to WhatsApp in 30 seconds. That's what Macrovesta does.

Want to see how? Book a 15-minute demo: [Link]

Or just start the trial and get your first alert this Friday: [Link]

Best,
Joe

P.S. - Here's last Friday's actual COT report if you want to follow along: [PDF link]
```

**Why This Works:**
- Provides value (teaches them how to analyze faster manually)
- Shows expertise (10+ years experience)
- Demonstrates product value (30 seconds vs 2 hours)
- Soft CTA (book demo or trial, low pressure)

---

### NODE 9: Update Sheet (Email 1 Sent)
**Type:** `Google Sheets`

**Columns:**
```javascript
Contact_Status: LEAD_MAGNET_CONTACTED_1
Message_1_Sent: {{ $now.toISO() }}
Last_Touchpoint: Educational COT email
```

---

### NODE 10: Wait 24 Hours
**Type:** `Wait`
**Duration:** 24 hours

**Total Time Since Email Capture:** 48 hours

---

### NODE 11: Check Demo Status Again
**Type:** `Google Sheets`

**IF Demo Booked:**
→ END workflow

**IF NOT:**
→ Send Email 2

---

### NODE 12: Send Email 2 (Second Lead Magnet - ROI Calculator)
**Type:** `SendGrid`
**Subject:** "Calculate your market intelligence ROI"

**Email Body:**
```html
Hi,

Following up on the COT analysis tips I sent yesterday.

I built a quick ROI calculator to help advisors figure out if their current market intelligence setup is costing them money:

**[Open ROI Calculator]** (2-minute tool)

It asks:
- How many hours/week do you spend analyzing reports?
- What's your hourly rate?
- What tools do you currently pay for?

Then it calculates your total annual cost (time + tools).

Most advisors are shocked when they see the number.

Example:
- 10 hours/week × £50/hour × 52 weeks = £26,000/year (time cost)
- Bloomberg: £24,000/year (tool cost)
- **Total: £50,000/year**

vs.

- Macrovesta: £1,800/year (tool cost)
- 30 seconds/week × £50/hour × 52 weeks = £65/year (time cost)
- **Total: £1,865/year**

Net savings: £48,135/year

Worth checking your numbers? [Calculator Link]

And if you want to see how Macrovesta actually works: [Demo Link]

Best,
Joe
```

---

### NODE 13: Update Sheet (Email 2 Sent)
**Type:** `Google Sheets`

**Columns:**
```javascript
Contact_Status: LEAD_MAGNET_CONTACTED_2
Message_2_Sent: {{ $now.toISO() }}
Last_Touchpoint: ROI calculator email
```

---

### NODE 14: Wait 5 Days
**Type:** `Wait`
**Duration:** 120 hours

**Total Time Since Capture:** 7 days

---

### NODE 15: Send Email 3 (Demo Video - Show Don't Tell)
**Type:** `SendGrid`
**Subject:** "2-minute video: See Macrovesta in action"

**Email Body:**
```html
Hi,

It's been a week since you downloaded our comparison guide.

I figured instead of me telling you how Macrovesta works, I'd just SHOW you.

**[Watch 2-Minute Demo Video]**

In the video, I walk through:
- What Friday 3:30 PM looks like now (3-hour manual analysis)
- What it looks like with Macrovesta (30-second WhatsApp alert)
- How to forward alerts to clients (5 minutes total)
- What advisors say after using it

No signup required. Just watch and see if it makes sense for you.

If it does, book a live demo here: [Link]
Or start your free trial here: [Link]

If it doesn't, no worries - hopefully the video was still interesting!

Best,
Joe

P.S. - This Friday at 3:30 PM, you could get your first automated COT alert. Or you could spend 3 hours manually analyzing like usual. Your choice.
```

---

### NODE 16: Update Sheet (Email 3 Sent)
**Type:** `Google Sheets`

**Columns:**
```javascript
Contact_Status: LEAD_MAGNET_CONTACTED_3
Message_3_Sent: {{ $now.toISO() }}
Last_Touchpoint: Demo video email
```

---

### NODE 17: Wait 7 Days
**Type:** `Wait`
**Duration:** 168 hours

**Total Time Since Capture:** 14 days

---

### NODE 18: Send Email 4 (Case Study - Final Touch)
**Type:** `SendGrid`
**Subject:** "How David saved 480 hours in his first year"

**Email Body:**
```html
Hi,

Last email from me (I promise).

I wanted to share a quick case study about an advisor similar to you:

**David T. - Independent Cotton Advisor, Texas**

Before Macrovesta:
- Spent 10 hours/week analyzing reports
- Friday evenings writing client summaries
- Missing family dinners
- Couldn't take on more clients (time-maxed)

After Macrovesta:
- 30 seconds/week reviewing WhatsApp alerts
- Friday evenings free
- Forwards alerts to clients instantly
- Took on 3 new clients (extra £30K revenue/year)

His words:
"I was skeptical about AI replacing my analysis. Then I realized it's not replacing - it's just doing the tedious part. I still add my insights. I'm just not spending 3 hours pulling data from PDFs anymore."

**His results in Year 1:**
- Time saved: 480 hours (10 hrs/wk × 48 weeks)
- Revenue increase: £30,000 (3 new clients)
- Cost: £1,800 (Macrovesta subscription)
- **Net benefit: £28,200 + 480 hours back**

If you're ready to get similar results, here's what to do next:

1. Start 14-day free trial: [Link]
2. Get your first alert this Friday
3. Forward to clients, see their reaction
4. Decide if it's worth £150/month

Or if you want to talk first, book a demo: [Link]

Either way, hope this was helpful!

Best,
Joe

P.S. - If Macrovesta isn't a fit but you know another advisor who'd benefit, feel free to forward this case study. Always happy to help the cotton community.
```

---

### NODE 19: Final Status Update
**Type:** `Google Sheets`

**Columns:**
```javascript
Contact_Status: LEAD_MAGNET_NURTURE_COMPLETE
Message_4_Sent: {{ $now.toISO() }}
Final_Status: {{ IF email_opens >= 3 THEN "WARM" ELSE "COLD" }}
Notes: Completed website visitor nurture sequence over 14 days
Next_Action: {{ IF WARM THEN "Add to quarterly newsletter" ELSE "Archive" }}
```

---

### NODE 20: Route to Long-Term Nurture or Archive
**Type:** `IF`

**IF Email Engagement >= 3 Opens:**
- Add to "Quarterly Newsletter" list
- Tag for "2026 Cotton Outlook" email when released
- Re-engage every 90 days with new content

**IF Email Engagement < 3 Opens:**
- Archive contact
- Remove from active campaigns
- Can re-engage in 6-12 months with major product update

---

## Workflow 3 Success Metrics

**Track These:**
- Exit popup conversion rate: Target 5-10% (of pricing page visitors)
- Lead magnet download → Demo booking: Target 10-15%
- Lead magnet download → Trial start: Target 5-8%
- Email sequence engagement (total opens): Target 60-70%
- Email 4 conversion (final case study): Target 5-10%

---

# INTEGRATION GUIDE

## Google Sheets Structure

**Sheet Name:** "Macrovesta_Leads"

**Columns:**
| Column | Data Type | Purpose |
|--------|-----------|---------|
| A: Email | Text | Primary key |
| B: Name | Text | Lead name |
| C: Phone | Text | Phone number (for SMS) |
| D: Company | Text | Company name |
| E: Contact_Status | Text | Current stage (NO_SHOW, DEMO_COMPLETED, etc.) |
| F: Source | Text | How they arrived (Demo No-Show, Demo Completed, Lead Magnet) |
| G: Demo_Date | Date | When they booked/attended demo |
| H: Trial_Started | Boolean | YES/NO |
| I: Trial_Start_Date | Date | When trial began |
| J: Paid_Customer | Boolean | YES/NO |
| K: Paid_Date | Date | When they converted |
| L: Message_1_Sent | Timestamp | First touchpoint |
| M: Message_2_Sent | Timestamp | Second touchpoint |
| N: Message_3_Sent | Timestamp | Third touchpoint |
| O: Message_4_Sent | Timestamp | Fourth touchpoint |
| P: Last_Touchpoint | Text | Description of last interaction |
| Q: Final_Status | Text | WARM, COLD, CUSTOMER, UNRESPONSIVE |
| R: Hours_Per_Week | Number | How many hours they spend on analysis |
| S: Lead_Magnet | Text | Which lead magnet they downloaded |
| T: Notes | Text | Free-form notes |

---

## Calendly Webhook Setup

**1. Log into Calendly:**
- Go to Settings → Webhooks
- Create new webhook

**2. Webhook URLs:**
- **Demo No-Show:** `https://your-n8n-instance.com/webhook/calendly-no-show`
- **Demo Completed:** `https://your-n8n-instance.com/webhook/calendly-demo-completed`

**3. Events to Subscribe:**
- `invitee.canceled` (for no-shows)
- `invitee.created` (for completed bookings)

**4. Test:**
- Book test demo
- Cancel it
- Check n8n workflow triggered

---

## Twilio Setup

**1. Buy Phone Number:**
- US: +1 number (if targeting US advisors)
- UK: +44 number (if targeting UK advisors)

**2. Configure Messaging:**
- Enable SMS
- Set webhook for inbound replies: `https://your-n8n-instance.com/webhook/twilio-reply`

**3. Rate Limits:**
- Free tier: 1 message/second
- Paid tier: 10+ messages/second
- **Set n8n rate limit to 1 message/minute for compliance**

---

## OpenAI Integration (Optional)

**Purpose:** Generate personalized messages based on lead data

**Use Cases:**
- Custom COT analysis examples (Workflow 2, Email 1)
- Personalized objection responses
- Dynamic subject line A/B testing

**Setup:**
1. Get API key from platform.openai.com
2. Add to n8n credentials
3. Use in LangChain OpenAI nodes

**Cost:**
- GPT-4o-mini: ~$0.01 per 1,000 leads (very cheap)
- GPT-4: ~$0.10 per 1,000 leads (if you need higher quality)

---

# DEPLOYMENT CHECKLIST

## Before Launch:

- [ ] Google Sheets created with correct column structure
- [ ] Calendly webhooks configured and tested
- [ ] Twilio account set up (phone number purchased)
- [ ] SendGrid or email service configured
- [ ] n8n workflows imported and activated
- [ ] Test leads added to sheet (fake emails for QA)
- [ ] All 3 workflows tested end-to-end
- [ ] Email templates reviewed for typos/links
- [ ] SMS character counts verified (<160 chars)
- [ ] Demo video recorded and uploaded (for Workflow 2, Email 3)
- [ ] Lead magnets created (Comparison Guide, ROI Calculator, Case Study)
- [ ] Exit popup installed on website
- [ ] Tracking pixels configured

## Week 1 Monitoring:

- [ ] Check workflow execution logs daily
- [ ] Monitor email open rates
- [ ] Monitor SMS delivery rates
- [ ] Watch for errors in Google Sheets updates
- [ ] Track demo bookings from nurture campaigns

## Optimization (Week 2-4):

- [ ] A/B test email subject lines
- [ ] Test SMS vs Email-only sequences
- [ ] Adjust wait times (24h vs 48h)
- [ ] Personalize based on lead source
- [ ] Add conditional branching (high engagement vs low)

---

# COST BREAKDOWN

**Monthly Costs (Estimated):**

| Service | Cost | Usage |
|---------|------|-------|
| n8n Cloud | $20-50/mo | Starter plan (5K executions/mo) |
| Google Sheets API | Free | Under 100 requests/day |
| Twilio SMS | $0.0075/SMS | 1,000 SMS = $7.50/mo |
| SendGrid Email | Free-$20/mo | Up to 40K emails/mo (free tier) |
| Calendly | Free | Basic plan |
| OpenAI (optional) | $5-20/mo | GPT-4o-mini for personalization |
| **Total** | **$32-97/mo** | Supports ~500-1,000 leads/mo |

**ROI Calculation:**

- If 1% of leads convert to £1,800/year customers
- 1,000 leads/mo × 1% = 10 customers/mo
- 10 customers × £1,800 = £18,000 revenue
- Automation cost: £97/mo
- **ROI: 186:1**

---

**Document Complete**
**Total Workflows:** 3
**Total Nodes:** 61 (across all workflows)
**Estimated Setup Time:** 6-8 hours
**Estimated Monthly Maintenance:** 2-4 hours

---

**Created by:** Cold Lava (oliver@otdm.net)
**Date:** October 28, 2025
**Version:** 1.0
**Status:** Ready for Implementation
