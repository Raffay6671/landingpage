import Image from "next/image";
import React from "react";
import Navbar from "./components/NavBar/NavBar";
import HeroMerger from "./components/HeroDisplay/HeroMerger";
import Feature from "./components/Feature/Feature";
import Testimonial from "./Testimonials/Testimonials";
import Person from "./public/Person.png";
import Questions from "./components/Questions/QuestionsMerge";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroMerger />
      <div id="features">
        <Feature />
      </div>

      <div id="testimonials">
        <Testimonial
          name="John S."
          position="Position"
          companyName="Company Name"
          testimonyText='"Absolutely love my ThunderBolt! Smooth ride, sleek design, and unbeatable performance"'
          imageSrc={Person}
        />
      </div>

      <div id="faqs">
        <Questions />
      </div>
    </>
  );
}
