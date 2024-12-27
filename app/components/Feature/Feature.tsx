import React from "react";
import bike1 from "@/app/public/bike1.png";
import bike2 from "@/app/public/bike2.png";
import bike3 from "@/app/public/bike3.png";

// import BikeDetails from "./BikeDetailsCard/BikeDetailsCard";
import Header from "./FeatureHeader/FeatureHeader";
import BikeDetails from "./FeatureCards/FeatureCardImage";

function MainFeature() {
  return (
    <div className="flex justify-center pl-20 flex-col -ml-20">
      <Header />
      <BikeDetails
        bikeName="StreetRider"
        description="Embrace the perfect blend of style and performance. Conquer every journey with ease."
        bikeImageSide="left"
        imageUrl={bike1}
      />
      <BikeDetails
        bikeName="ThunderBolt"
        description="Unleash the power within. Dominate the streets with unmatched agility and design."
        bikeImageSide="right"
        imageUrl={bike2}
      />

      <BikeDetails
        bikeName="TrailBlazer"
        description="Elevate your riding experience. Precision engineering meets unparalleled comfort and control."
        bikeImageSide="left"
        imageUrl={bike3}
      />
    </div>
  );
}

export default MainFeature;
