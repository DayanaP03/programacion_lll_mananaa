import React from "react";
import BsHero from "../components/bs/BsHero";
import BsFeatures from "../components/bs/BsFeatures";
import BsNewsletter from "../components/bs/BsNewsletter";
import BsCaroulsel from "../components/bs/BsCarousel";

export default function HomeBootstrap() {
  return (
    <>
      <BsHero />
      <BsFeatures />
      <BsNewsletter />
      <BsCaroulsel/>
      
    </>
  );
}