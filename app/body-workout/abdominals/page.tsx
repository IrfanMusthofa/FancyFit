import React from "react";

const page = () => {
  return (
    <section className="min-h-screen bg-bannerImg5 bg-cover bg-fixed bg-bottom">
      <div className="flex size-full min-h-screen w-full flex-col items-center justify-center bg-blackOverlay">
        <h1 className="mb-8 mt-32 text-center text-5xl font-bold text-white drop-shadow-md">
          Abdominals
        </h1>
        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Crunches
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Beginner
        </h3>
        <img
          src="/Images/male-bodyweight-crunch-front.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <img
          src="/Images/male-bodyweight-crunch-side.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Lay flat on your back with your knees bent and your feet flat on the
            ground, about a foot from your lower back.
          </li>
          <li className="my-3">
            Place your fingertips on your temples with your palms facing out.
          </li>
          <li className="my-3">
            Draw your belly into the base of your spine to engage the muscles,
            then raise your head and shoulders off the floor. Return to starting
            position and repeat.
          </li>
        </ol>

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Leg Raises
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Beginner
        </h3>
        <img
          src="/Images/male-bodyweight-leg-raises-front.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <img
          src="/Images/male-bodyweight-leg-raises-side.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Lay on your back with your arms palms down on either side.
          </li>
          <li className="my-3">
            Keep your legs together and as straight as possible.
          </li>
          <li className="my-3">
            Slowly raise your legs to a 90° angle, pause at this position, or as
            high as you can reach your legs, and then slowly lower your legs
            back down.
          </li>
          <li className="my-3">
            Duration of these movements should be slow so that you do not
            utilize momentum, enabling you to get the most out of the exercise.
          </li>
        </ol>

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Plank
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Beginner
        </h3>
        <img
          src="/Images/male-bodyweight-forearm-plank-front.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <img
          src="/Images/male-bodyweight-forarm-plank-side.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <ol className="mx-8 p-4 text-white">
          <li className="my-3">
            Place forearms on the ground with your elbows bent at a 90° angle
            aligned beneath your shoulders, with your arms parallel at
            shoulder-width.
          </li>
          <li className="my-3">
            Your feet should be together, with only your toes touching the
            floor.
          </li>
          <li className="my-3">
            Lift your belly off the floor and form a straight line from your
            heels to the crown of your head and hold.
          </li>
        </ol>

        <h2 className="mb-4 text-center text-2xl font-bold text-white drop-shadow-md">
          Russian Twist
        </h2>
        <h3 className="mb-4 text-center text-xl font-semibold text-white drop-shadow-md">
          Difficulty: Intermediate
        </h3>
        <img
          src="/Images/male-dumbbell-russian-twist-front.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
        <img
          src="/Images/male-dumbbell-russian-twist-side.gif"
          className="mb-8 border-4 border-pink-700 shadow-rose-600"
        />
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
