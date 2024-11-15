"use server";
import React from "react";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client/extension";
import { Prisma } from "@prisma/client";
import { db } from "../../lib/db";
import { getAllWorkoutData } from "../../lib/dbHelper";
const workoutsData = [
  "Abdominals",
  "Biceps",
  "Calves",
  "Chest",
  "Forearms",
  "Glutes",
  "Hamstrings",
  "Lats",
  "Lower Back",
  "Obliques",
  "Quads",
  "Shoulders",
  "Traps",
  "Traps-Mid-Back",
  "Triceps",
];

const workoutPages = [
  "body-workout/abdominals",
  "body-workout/biceps",
  "body-workout/calves",
  "body-workout/chest",
  "body-workout/forearms",
  "body-workout/glutes",
  "body-workout/hamstrings",
  "body-workout/lats",
  "body-workout/lowerback",
  "body-workout/obliques",
  "body-workout/quads",
  "body-workout/shoulders",
  "body-workout/traps",
  "body-workout/traps-mid-back",
  "body-workout/triceps",
];

const workouts = async () => {
  const user = await currentUser();

  if (!user) {
    return (
      <section className="bg-bannerImg5 bg-cover bg-bottom">
        <div className="flex size-full h-screen w-full flex-col items-center justify-center bg-blackOverlay">
          <h1 className="mb-32 text-5xl font-bold text-white drop-shadow-md">
            My Workouts.
          </h1>

          <h3 className="mb-32 text-2xl font-bold text-white drop-shadow-md">
            To see your favorite starred workouts, please sign in first!
          </h3>
        </div>
      </section>
    );
  }
  const userData = await getAllWorkoutData(user.id);

  return (
    <section className="bg-bannerImg5 bg-cover bg-bottom">
      <div className="flex size-full h-screen w-full flex-col items-center justify-center bg-blackOverlay">
        <h1 className="mb-16 mt-32 text-5xl font-bold text-white drop-shadow-md">
          My Workouts.
        </h1>
        <Link
          href="/addworkout"
          className="flex-center mb-16 w-1/6 rounded-full bg-primary-100 px-4 py-2 font-bold text-white hover:bg-primary-500 focus:outline-none"
        >
          <button type="button">Add your workout!</button>
        </Link>
        <h3 className="mb-8 text-2xl font-bold text-white drop-shadow-md text-center">
          Welcome, {user.firstName}! <br />
          Here are your favorite workouts.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-4/5">
          {userData?.workout?.map((workout, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center p-4 rounded-lg bg-white/80 shadow-rose backdrop-blur-md"
            >
              <span className="font-bold text-gray-800">{workout}</span>
              <Link
                href={`/${workoutPages[workoutsData.indexOf(workout)]}`}
                className="underline mb-2"
              >
                See Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default workouts;
