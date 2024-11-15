import React from "react";

const page = () => {
  return (
    <section className="bg-bannerImg5 bg-cover bg-fixed bg-bottom">
      <div className="flex size-full min-h-screen w-full flex-col items-center justify-center bg-blackOverlay">
        <h1 className="mb-16 mt-32 text-center text-5xl font-bold text-white drop-shadow-md">
          Traps (Mid-Back)
        </h1>

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Pull Ups
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Intermediate
        </h3>
        <div className="mb-8 flex gap-8">
          <img
            src="/Images/male-bodyweight-pullup-front.gif"
            className="border-4 border-pink-700 shadow-rose-600"
          />
          <img
            src="/Images/male-bodyweight-pullup-side.gif"
            className="border-4 border-pink-700 shadow-rose-600"
          />
        </div>
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Grasp the bar with an overhand grip, arms and shoulders fully
            extended.
          </li>
          <li className="my-3">
            Pull your body up until your chin is above the bar.
          </li>
          <li className="my-3">Lower your body back to starting position.</li>
        </ol>

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Elevated Pike Press
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Intermediate
        </h3>
        <div className="mb-8 flex gap-8">
          <img
            src="/Images/Elevated Pike Press.gif"
            className="border-4 border-pink-700 shadow-rose-600"
          />
          <img
            src="/Images/Elevated Pike Press Side.gif"
            className="border-4 border-pink-700 shadow-rose-600"
          />
        </div>
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Use a bench or an object to elevate your feet.
          </li>
          <li className="my-3">
            Lower your head by bending your elbows towards the floor.
          </li>
          <li className="my-3">
            Push through your hands and reach the starting pike position.
          </li>
          <li className="my-3">Repeat.</li>
        </ol>

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Dumbbell Row Unilateral
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Beginner
        </h3>
        <div className="mb-8 flex gap-8">
          <img
            src="/Images/male-dumbbell-row-unilateral-front.gif"
            className="border-4 border-pink-700 shadow-rose-600"
          />
          <img
            src="/Images/male-dumbbell-unilateral-row-side.gif"
            className="border-4 border-pink-700 shadow-rose-600"
          />
        </div>
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Brace your off arm against something stable (bench, box). Stagger
            your stance so your leg on the side of your working arm is back.
          </li>
          <li className="my-3">
            Try to get your torso to parallel with the ground. That will extend
            your range of motion.
          </li>
          <li className="my-3">
            Let your arm hang freely and then pull your elbow back. Imagine
            you&apos;ve got a tennis ball in your armpit and squeeze it each
            rep.
          </li>
        </ol>

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Bent Over Barbell Row
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Intermediate
        </h3>
        <div className="mb-8 flex gap-8">
          <img
            src="/Images/male-barbell-bent-over-row-front.gif"
            className="border-4 border-pink-700 shadow-rose-600"
          />
          <img
            src="/Images/male-barbell-bent-over-row-side.gif"
            className="border-4 border-pink-700 shadow-rose-600"
          />
        </div>
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Grab a barbell with a shoulder width pronated or supinated grip.
          </li>
          <li className="my-3">
            Bend forward at your hips while maintaining a flat back.
          </li>
          <li className="my-3">Pull the weight toward your upper abdomen.</li>
          <li className="my-3">
            Lower the weight in a controlled manner and repeat.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default page;
