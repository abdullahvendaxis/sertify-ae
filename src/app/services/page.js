
import Header from "../components/Header";
import ServicesHero from "../components/Services/ServicesHero";
import Categories from "../components/Services/Categories";
import ServicesFeature from "../components/Services/ServicesFeature";
import HowItWork from "../components/Services/HowItWork";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";
import css from "@/app/services.css";

export default function Service() {
  return (
    <>
    
      <Header />
       <ServicesHero /> 
      <Categories />
    <ServicesFeature />
    <HowItWork />
       <FinalCta />
       <Footer /> 
    </>
  );
}
