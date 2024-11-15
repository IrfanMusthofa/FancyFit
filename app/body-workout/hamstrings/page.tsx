import React from "react";

const page = () => {
  return (
    <section className="bg-bannerImg5 bg-cover bg-fixed bg-bottom">
      <div className="flex size-full min-h-screen w-full flex-col items-center justify-center bg-blackOverlay">
        <h1 className="mb-16 mt-32 text-center text-5xl font-bold text-white drop-shadow-md">
          Hamstrings
        </h1>

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
          Deadlift
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Advanced
        </h3>
        <img
          src="/Images/male-barbell-deadlift-front.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <img
          src="/Images/male-barbell-deadlift-side.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Stand with your mid-foot under the bar and grip the bar with your
            hands, about shoulder width apart.
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

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Sumo Deadlift
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Intermediate
        </h3>
        <img
          src="/Images/male-barbell-sumo-deadlift-front_aeM2BqT.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <img
          src="/Images/male-barbell-sumo-deadlift-side_av3A2PM.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Stance width can vary with a sumo DL. Some prefer toes near the
            plates. Others prefer a more narrow stance to get more drive off the
            floor.
          </li>
          <li className="my-3">
            Make sure your arms are inside your legs. The bar should be just
            over your mid-foot. Flatten your back and push your heels into the
            floor.
          </li>
          <li className="my-3">
            Try to extend your knees and hips simultaneously.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default page;
