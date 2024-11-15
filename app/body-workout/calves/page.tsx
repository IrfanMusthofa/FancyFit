import React from "react";

const Calves = () => {
  return (
    <section className="bg-bannerImg5 bg-cover bg-fixed bg-bottom">
      <div className="flex size-full min-h-screen w-full flex-col items-center justify-center bg-blackOverlay">
        <h1 className="mb-16 mt-32 text-center text-5xl font-bold text-white drop-shadow-md">
          Calves
        </h1>

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Calf Raises
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Beginner
        </h3>
        <img
          src="/Images/male-bodyweight-calve-raise-front.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <img
          src="/Images/male-bodyweight-calve-raise-side.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Balance on the balls of your feet on the platform or plates, leaning
            forward to use the wall to assist with balance.
          </li>
          <li className="my-3">
            Lower the heels of your feet towards the ground and pause, then push
            through the balls of your feet like you are standing tip toe,
            pausing at the apex of the motion.
          </li>
          <li className="my-3">Repeat as necessary.</li>
        </ol>

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Dumbbells Calf Raises
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Beginner
        </h3>
        <img
          src="/Images/male-dumbbell-calf-raise-front.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <img
          src="/Images/male-dumbbell-calf-raise-side.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Stand tall with your feet on the ground. You can put the balls of
            your feet on top of a plate to extend the range of motion.
          </li>
          <li className="my-3">
            Imagine you have a string attached to your heels and pull your heels
            up toward the ceiling.
          </li>
        </ol>

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Barbell Calf Raises
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Intermediate
        </h3>
        <img
          src="/Images/male-barbell-calve-raise-front.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <img
          src="/Images/male-barbell-calve-raise-side.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">Place the bar on your back.</li>
          <li className="my-3">Start with feet flat on the ground.</li>
          <li className="my-3">
            Extend your heels upwards while keeping your knees stationary, and
            pause at the contracted position.
          </li>
          <li className="my-3">
            Slowly return to the starting position. Repeat.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Calves;
