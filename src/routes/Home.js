import React from "react";
import CarsSection from "../components/CarsSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Packages from "../components/Packages";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CarsSection />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
