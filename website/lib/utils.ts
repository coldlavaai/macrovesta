import { ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const features = [
  {
    title: "Interactive Reporting",
    bullets: [
      "Interactive **reporting tools**",
      "**Secure** sharing of custom market insights",
    ],
  },
  {
    title: "AI-Assisted Analysis",
    bullets: [
      "Bullish vs bearish 5-factor **traffic light system**",
      "**Machine learning** weighted",
    ],
  },
  {
    title: "Real Time Industry Data",
    bullets: [
      "Real trade **price**",
      "**Supply & Demand** insights and forecasts",
    ],
  },
  {
    title: "Operation Management",
    bullets: [
      "**Commodity** marketplace",
      "**Crop** and freight tracking",
      "Position management",
    ],
  },
  {
    title: "Educational Analysis",
    bullets: [
      "Educational analysis with simplified visualization",
      "**Explainable AI**",
      "News and data summary",
    ],
  },
  {
    title: "AI Digital Consultant",
    bullets: [
      "**Personalised** market analysis and hedging strategies",
      "**AI-powered guidance**, trained by decades worth of data and industry reports",
    ],
  },
];

export const rotatingTexts = [
  "Government Reports",
  "Market Data & Trends",
  "Supply Chain Analytics",
  "Weather Patterns",
  "Trade Flows",
  "Price Forecasts",
  "Risk Management",
];
