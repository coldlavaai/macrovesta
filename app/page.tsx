import HeroSection from "@/components/sections/HeroSection";
import RotatingTextSection from "@/components/sections/RotatingTextSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import VideoSection from "@/components/sections/VideoSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RotatingTextSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <VideoSection />
      <TestimonialsSection />
    </>
  );
}
