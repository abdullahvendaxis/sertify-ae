import BlogHero from "../components/Blogs/BlogHero";
import CategoriesFilter from "../components/Blogs/CategoriesFilter";
import FeaturesBlog from "../components/Blogs/FeaturesBlog";
import Header from "../components/Header";
import Newsletter from "../components/Blogs/Newsletter";
import Footer from "../components/Footer";
import css from "@/app/blog.css";

export default function Blogs() {
  return (
    <>
    
      <Header />
       <BlogHero /> 
      <CategoriesFilter />
    <FeaturesBlog />
  
       <Newsletter />
       <Footer /> 
    </>
  );
}