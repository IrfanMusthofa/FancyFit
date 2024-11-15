"use client";

import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { updateUserData } from "../../lib/dbHelper";
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

const AddWorkout = () => {
  const [myWorkouts, setMyWorkouts] = useState<string[]>([]);
  const { user } = useUser();
  const [workouts, setWorkouts] = useState<string[]>([]);
  useEffect(() => {
    const fetchWorkouts = async () => {
      if (user) {
        const response = await getAllWorkoutData(user.id);

        if (response) {
          setMyWorkouts(response.workout);
        }
      }
    };
    fetchWorkouts();
  }, [user]);

  if (!user) {
    console.error("User not found");
    return;
  }

  const toggleWorkout = async (workout: string) => {
    await updateUserData(user.id, workout);

    if (myWorkouts.includes(workout)) {
      setMyWorkouts(myWorkouts.filter((item) => item !== workout));
    } else {
      setMyWorkouts([...myWorkouts, workout]);
    }
  };

  return (
    <section className="bg-bannerImg5 bg-cover bg-bottom">
      <div className="flex size-full h-screen w-full flex-col items-center justify-center bg-blackOverlay">
        <h1 className="mb-8 mt-32 text-5xl font-bold text-white drop-shadow-md">
          Add your workout to "My Workout".
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-4/5">
          {workoutsData.map((workout, index) => (
            <div
              key={workout}
              className="flex flex-col justify-between items-center p-4 rounded-lg bg-white/80 shadow-rose backdrop-blur-md"
            >
              <span className="font-bold text-gray-800">{workout}</span>
              <div className="flex flex-col items-center">
                <a href={`/${workoutPages[index]}`} className="underline mb-2">
                  See Details
                </a>
                <button
                  className={`px-4 py-2 ${
                    myWorkouts.includes(workout)
                      ? "bg-primary-100 text-white"
                      : "bg-primary-500 text-white"
                  } rounded-md`}
                  onClick={() => toggleWorkout(workout)}
                >
                  {myWorkouts.includes(workout)
                    ? "Remove from My Workout"
                    : "Add to My Workout"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddWorkout;
