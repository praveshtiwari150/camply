import HeroSection from "@/components/HeroSection";
import { ToggleTheme } from "@/components/ToggleTheme";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="bg-radial from-background to-blue-50 dark:from-ebony dark:to-background flex flex-col min-h-[32rem] items-center justify-center w-full">
      <HeroSection />
    </div>
  );
}
