import React from "react";
import HeroSection from "../component/app";
import CarDisplaySection from "../component/CarDisplaySection";

const Home: React.FC = () => {
    return (
        <>
            <HeroSection HeroSectionLogoSrc="/assets/react.svg" />
            <CarDisplaySection />
        </>
    );
};

export default Home;
