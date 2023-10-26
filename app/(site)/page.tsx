"use client";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import About from "@/components/About";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export default function Home() {
  useEffect(() => {
    const welcomeMessage =
      "Welcome to Solid Voice Payment. A secure way to send joy their way. Simplify online transactions with Solid! Send, receive, and request money effortlessly through voice-activated payments. Empowering the visually impaired for inclusive finance.";
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(welcomeMessage);
    synth.speak(utterance);
  }, []); // The empty dependency array ensures that this effect runs once after the initial render

  return (
    <main>
      <Hero />
      <Brands />
      <About />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
    </main>
  );
}
