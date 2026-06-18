import DiscoverSlider from "./components/DiscoverSlider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Image from "next/image";
import OtherSlider from "./components/OtherSlider";
import Footer_one from "./components/Footer_one";
import Footer from "./components/Footer";
import Faqs from "./components/Faqs"

export default function Home() {
  return (
    <>
    <div className="max-w-7xl mx-auto px-4 ">
    <Navbar />
    <Hero />
    <DiscoverSlider /> 
    <OtherSlider /> 
    <Faqs />
    <Footer_one />
    <Footer />
    </div>
    </>
  ); 
} 
