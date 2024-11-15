import React from "react";

const page = () => {
  return (
    <section className="bg-bannerImg5 bg-cover bg-fixed bg-bottom">
      <div className="flex size-full min-h-screen w-full flex-col items-center justify-center bg-blackOverlay">
        <h1 className="mb-16 mt-32 text-center text-5xl font-bold text-white drop-shadow-md">
          Lats
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
          Deadlift
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Advanced
        </h3>
        <div className="mb-8 flex gap-8">
          <img
            src="/Images/male-barbell-deadlift-front.gif"
            className="border-4 border-pink-700 shadow-rose-600"
          />
          <img
            src="/Images/male-barbell-deadlift-side.gif"
            className="border-4 border-pink-700 shadow-rose-600"
          />
        </div>
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Stand with your mid-foot under the bar and grip the bar with your
            hands, about a shoulder width apart.
          </li>
          <li className="my-3">
            Bend your knees, then lift the bar by straightening your back. It is
            important to keep your back straight.
          </li>
          <li className="my-3">Stand to your full height and hold.</li>
          <li className="my-3">
            Lower the bar to the floor by bending your knees and keeping your
            back straight.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default page;
