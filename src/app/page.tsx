"use client";

import BackgroundLayers from "@/components/BackgroundLayers";
import CursorGlow from "@/components/CursorGlow";
import ParticleField from "@/components/ParticleField";
import OrbitalRings from "@/components/OrbitalRings";
import HeroText from "@/components/HeroText";
import CornerAccents from "@/components/CornerAccents";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <BackgroundLayers />
      <CursorGlow />
      <ParticleField />
      <OrbitalRings />
      <HeroText />
      <CornerAccents />
    </main>
  );
}
