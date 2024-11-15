import React from "react";

const About = () => {
  return (
    <section className="bg-bannerImg3 bg-cover bg-bottom">
      <div className="flex size-full h-screen w-full flex-col items-center justify-center bg-blackOverlay">
        <h1 className="mb-32 text-5xl font-bold text-white drop-shadow-md">
          About Us.
        </h1>
        <p className="my-8 px-32 text-center text-2xl font-semibold text-white drop-shadow-md">
          This website is made for experimental and educational purposes to
          fulfill my assignment in the II3140 Web and Mobile Application
          Development.
        </p>

        <p className="my-8 px-32 text-center text-2xl font-semibold text-white drop-shadow-md">
          We hope you enjoy using our website and find it helpful in your
          fitness journey.
        </p>

        <p className="my-8 px-32 text-center text-2xl font-semibold text-white drop-shadow-md">
          We would like to inform you that any assets on this website are free
          to use. Additionally, any .gif files on this website with the
          MuscleWiki watermark belong to MuscleWiki. These assets are used
          solely for experimental and educational purposes.
        </p>
      </div>
    </section>
  );
};

export default About;
