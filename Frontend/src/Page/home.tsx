import React from "react";
import HeroSection from "../component/app";
import PlaneDisplaySection from "../component/bestsellingpackages";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection HeroSectionLogoSrc="/assets/react.svg" />
      <PlaneDisplaySection />
    </>
  );
};

export default Home;
