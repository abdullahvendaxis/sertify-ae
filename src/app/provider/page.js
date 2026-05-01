
import Header from "../components/Header";
import ProviderHero from "../components/Providers/ProviderHero";
import Benefits from "../components/Providers/Benefits";
import Commission from "../components/Providers/Commission";
import JoinSteps from "../components/Providers/JoinSteps";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";
import css from "@/app/provider.css";



export default function Provider() {
  return (
    <>
    
      <Header />
       <ProviderHero /> 
      <Benefits />
    <Commission />
    <JoinSteps />
       <FinalCta />
       <Footer /> 
    </>
  );
}
