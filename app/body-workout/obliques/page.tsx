import React from "react";

const page = () => {
  return (
    <section className="bg-bannerImg5 bg-cover bg-fixed bg-bottom">
      <div className="flex size-full min-h-screen w-full flex-col items-center justify-center bg-blackOverlay">
        <h1 className="mb-16 mt-32 text-center text-5xl font-bold text-white drop-shadow-md">
          Obliques
        </h1>

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Russian Twist
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Intermediate
        </h3>
        <div className="mb-8 flex-col gap-16">
          <img
            src="/Images/male-dumbbell-russian-twist-front.gif"
            className="border-4 border-pink-700 shadow-rose-600"
          />
        </div>
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Sit on the floor and flex your knees and hips to a 90 degree angle.
          </li>
          <li className="my-3">
            Your feet should be hovering off the ground. (If that&apos;s too
            hard start with heels on the floor)
          </li>
          <li className="my-3">
            Rotate your upper spine to engage your obliques.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default page;
