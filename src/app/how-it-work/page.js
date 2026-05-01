import Header from "../components/Header";
import Hero from "../components/HowItWork/Hero";
import Ai from "../components/HowItWork/Ai";
import BookingCard from "../components/HowItWork/BookingCard";
 import CompareSection from "../components/HowItWork/CompareSection";
import Faq from "../components/HowItWork/Faq";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";


 import css from "@/app/howitwork.css";

export default function Service() {
  return (
    <>
      <Header />
      <Hero />
     <Ai />
     <BookingCard />
     <CompareSection />
     <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}