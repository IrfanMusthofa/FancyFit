import React from "react";

const page = () => {
  return (
    <section className="bg-bannerImg5 bg-cover bg-fixed bg-bottom">
      <div className="flex size-full min-h-screen w-full flex-col items-center justify-center bg-blackOverlay">
        <h1 className="mb-16 mt-32 text-center text-5xl font-bold text-white drop-shadow-md">
          Traps
        </h1>

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
          Elevated Pike Shoulder Shrug
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Beginner
        </h3>
        <div className="mb-8 flex gap-8">
          <img
            src="/Images/Elevated Pike Shoulder Shrug.gif"
            className="border-4 border-pink-700 shadow-rose-600"
          />
          <img
            src="/Images/Elevated Pike Shoulder Shrug Side.gif"
            className="border-4 border-pink-700 shadow-rose-600"
          />
        </div>
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Use a bench or an object like a chair to elevate your feet.
          </li>
          <li className="my-3">
            Slowly lower your body (scapula) while keeping your elbows locked
            (this is key).
          </li>
          <li className="my-3">
            Slowly raise your body back to the starting position.
          </li>
        </ol>

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Dumbbells Shrugs
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Beginner
        </h3>
        <div className="mb-8 flex gap-8">
          <img
            src="/Images/male-dumbbell-shrug-front.gif"
            className="border-4 border-pink-700 shadow-rose-600"
          />
          <img
            src="/Images/male-dumbbell-shrug-side.gif"
            className="border-4 border-pink-700 shadow-rose-600"
          />
        </div>
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Stand tall with two dumbbells. Pull your shoulder blades up. Give a
            one second squeeze at the top.
          </li>
        </ol>

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Dumbbells Seated Shrugs
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Beginner
        </h3>
        <div className="mb-8 flex gap-8">
          <img
            src="/Images/male-dumbbell-seated-shrug-front.gif"
            className="border-4 border-pink-700 shadow-rose-600"
          />
          <img
            src="/Images/male-dumbbell-seated-shrug-side.gif"
            className="border-4 border-pink-700 shadow-rose-600"
          />
        </div>
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Sit on a bench with dumbbells in both hands, palms facing your body,
            back straight.
          </li>
          <li className="my-3">
            Elevate your shoulders and hold the contracted position at the apex
            of the motion.
          </li>
          <li className="my-3">
            Slowly lower your shoulders back to starting position.
          </li>
        </ol>

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Barbell Upright Row
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Advanced
        </h3>
        <div className="mb-8 flex gap-8">
          <img
            src="/Images/male-barbell-upright-row-front_3ROsKgm.gif"
            className="border-4 border-pink-700 shadow-rose-600"
          />
          <img
            src="/Images/male-barbell-upright-row-side_NBzD3il.gif"
            className="border-4 border-pink-700 shadow-rose-600"
          />
        </div>
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Take a double overhand roughly shoulder width grip.
          </li>
          <li className="my-3">
            Pull your elbows straight up the ceiling. Aim to get the bar to chin
            level or slightly higher.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default page;
