"use server";
import { db } from "./db";

//@ts-ignore
export async function updateUserData(currentUser, workoutData: string) {
  console.log("currentUser", currentUser);
  // Fetch the current user data from the database
  const user = await db.user.findUnique({
    where: { clerkUserId: currentUser },
  });

  if (user) {
    const existingWorkouts = user.workout || [];

    if (existingWorkouts.includes(workoutData)) {
      // Remove the workout if it already exists
      await db.user.update({
        where: { clerkUserId: currentUser },
        data: { workout: existingWorkouts.filter((w) => w !== workoutData) },
      });
    } else {
      // Add the workout if it does not exist
      await db.user.update({
        where: { clerkUserId: currentUser },
        data: { workout: [...existingWorkouts, workoutData] },
      });
    }
  }
}

//@ts-ignore
export async function getAllWorkoutData(currentUser) {
  return await db.user.findUnique({
    where: { clerkUserId: currentUser },
    select: { workout: true },
  });
}
