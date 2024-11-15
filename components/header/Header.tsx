import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";

import Link from "next/link";

const Header = async () => {
  const user = await checkUser();

  return (
    <header className="flex-between fixed top-0 z-20 w-full bg-white/80 p-6 py-4 shadow-rose backdrop-blur-md sm:px-12">
      <div className="flex-center text-center wrapper gap-16">
        <Link href="/">
          <h1 className="h1-bold grow-animation mr-8 italic hover:text-primary-500 whitespace-nowrap">
            Fancy Fit
          </h1>
        </Link>

        <Link href="/">
          <h3 className="h3-semibold underline-animation whitespace-nowrap">
            Home
          </h3>
        </Link>

        <Link href="/about">
          <h3 className="h3-semibold underline-animation whitespace-nowrap">
            About Us
          </h3>
        </Link>

        <Link href="/workouts">
          <h3 className="h3-semibold underline-animation whitespace-nowrap">
            My Workouts
          </h3>
        </Link>

        <Link href="/bodymap">
          <h3 className="h3-semibold underline-animation whitespace-nowrap">
            Bodymap
          </h3>
        </Link>

        <Link href="/tools">
          <h3 className="h3-semibold underline-animation whitespace-nowrap">
            Tools
          </h3>
        </Link>
        <div className="grow-animation h3-semibold mr-8 italic hover:text-primary-500 whitespace-nowrap">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
