import React from "react";

const page = () => {
  return (
    <section className="bg-bannerImg5 bg-cover bg-fixed bg-bottom">
      <div className="flex size-full min-h-screen w-full flex-col items-center justify-center bg-blackOverlay">
        <h1 className="mb-16 mt-32 text-center text-5xl font-bold text-white drop-shadow-md">
          Glutes
        </h1>

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Squats
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Beginner
        </h3>
        <img
          src="/Images/male-bodyweight-squat-front.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <img
          src="/Images/male-bodyweight-squat-side.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">Stand with your feet shoulder width apart.</li>
          <li className="my-3">
            Flex your knees and hips and sit back into the squat while lowering
            your body.
          </li>
          <li className="my-3">Continue down to full depth.</li>
          <li className="my-3">Return to starting position.</li>
        </ol>

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Forward Lunges
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Beginner
        </h3>
        <img
          src="/Images/male-bodyweight-forward-lunge-front.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <img
          src="/Images/male-bodyweight-forward-lunge-side.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">Step forward with one leg.</li>
          <li className="my-3">
            Lower your body until your rear knee nearly touches the ground.
          </li>
          <li className="my-3">
            Ensure you remain upright, and your front knee stays above the front
            foot.
          </li>
          <li className="my-3">
            Push off the floor with your front foot until you return to the
            starting position. Switch legs.
          </li>
        </ol>

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Glute Bridge
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Beginner
        </h3>
        <img
          src="/Images/male-bodyweight-glute-bridge-front.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <img
          src="/Images/male-bodyweight-glute-bridge-side.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Lie down with your knees bent and your feet flat on the floor.
          </li>
          <li className="my-3">
            Push your hips up so that your butt is elevated and your back
            straight.
          </li>
          <li className="my-3">
            Tense your glutes and raise your hips towards the ceiling.
          </li>
          <li className="my-3">
            Once you are at the highest point you can manage, hold the position
            for a few seconds, and then slowly return to the starting position.
          </li>
        </ol>

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Dumbbells Goblet Squats
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Beginner
        </h3>
        <img
          src="/Images/male-dumbbell-goblet-squat-front.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <img
          src="/Images/male-dumbbell-goblet-squat-side.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Hold the weight tucked into your upper chest area, keeping your
            elbows in. Your feet should be slightly wider than shoulder width.
          </li>
          <li className="my-3">
            Sink down into the squat, keeping your elbows inside the track of
            your knees.
          </li>
          <li className="my-3">
            Push through your heels while keeping your chest up and return to
            starting position.
          </li>
        </ol>

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Barbell Squats
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Advanced
        </h3>
        <img
          src="/Images/male-barbell-highbar-squat-front.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <img
          src="/Images/male-barbell-highbar-squat-side_bU7Qudy.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Stand with your feet shoulder-width apart. Maintain the natural arch
            in your back, squeezing your shoulder blades and raising your chest.
          </li>
          <li className="my-3">
            Grip the bar across your shoulders and support it on your upper
            back. Unrack the bar by straightening your legs, and take a step
            back.
          </li>
          <li className="my-3">
            Bend your knees as you lower the weight without altering the form of
            your back until your hips are below your knees.
          </li>
          <li className="my-3">
            Raise the bar back to starting position, lift with your legs and
            exhale at the top.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default page;
