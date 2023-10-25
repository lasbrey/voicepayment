import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import About from "@/components/About";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Solid Voice payment",
  description: "This is Home for Solid ",
  // other metadata
};


export default function Home() {
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
