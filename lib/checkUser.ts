import { currentUser } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

export const checkUser = async () => {
  const user = await currentUser();
  console.log(user);
  // Check current logged in
  if (!user) {
    return null;
  }

  // Check if user exists in database
  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  // User is in database
  if (loggedInUser) {
    return loggedInUser;
  }

  // If not in database
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: user.firstName,
      email: user.emailAddresses[0].emailAddress,
      bmi: 0,
      workout: [],
    },
  });
  return newUser;
};
