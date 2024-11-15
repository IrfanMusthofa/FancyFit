import React from "react";

import BmiCalculator from "@/components/tools/BMI";
const Tools = () => {
  return (
    <section className="bg-bannerImg5 bg-cover bg-bottom">
      <div className="flex size-full h-screen w-full flex-col items-center justify-center bg-blackOverlay">
        <h1 className="my-8 text-5xl font-bold text-white drop-shadow-md">
          Tools.
        </h1>
        <BmiCalculator />
      </div>
    </section>
  );
};

export default Tools;
