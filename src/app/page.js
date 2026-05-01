import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Marquee from "./components/Marquee";
import Features from "./components/Features";
import HowItWorks from "@/app/components/howitworks";
import AiSection from "@/app/components/AISection";
import Providers from "@/app/components/Providers";
 import Testimonials from "@/app/components/Testimonials";
import FinalCta from "@/app/components/FinalCta";
import Footer from "@/app/components/Footer";
import css from "@/app/home.css";

export default function Home() {
  return (
    <>
      <Header />
       <Hero /> 
       <Marquee />
       <Features />
     
      <HowItWorks /> 
      <AiSection /> 
      <Providers /> 
      <Testimonials /> 
       <FinalCta />
       <Footer /> 
    </>
  );
}