import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-bannerImg2 bg-cover bg-bottom">
      <div className="flex size-full h-screen w-full flex-col items-center justify-center gap-16 bg-blackOverlay">
        <h1 className="mt-8 text-center text-9xl font-bold text-white drop-shadow-md">
          Stay Fancy, Stay Fit!
        </h1>
        <p className="my-8 px-32 text-center text-2xl font-semibold text-white drop-shadow-md">
          Get fit with our workout programs and tools!
        </p>
        <Link
          href="/bodymap"
          className="flex-center w-1/6 rounded-full bg-primary-100 px-4 py-2 font-bold text-white hover:bg-primary-500 focus:outline-none"
        >
          <button type="button">Get Fit!</button>
        </Link>
      </div>
    </section>
  );
}
