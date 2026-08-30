export function Hero() {
  return (
    <section className="bg-white h-[88dvh] px-5 lg:flex pt-4 md:pt-6 lg:pt-10 sm:px-8 ">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-semibold uppercase text-rose-500 sm:text-sm">
          Your future starts here
        </p>
        <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[3.7rem]">
          Find a college
          <br />
          that feels right for <span className="text-rose-500">you.</span>
        </h1>
        <p className="mt-5 max-w-md text-sm text-slate-500 sm:text-base">
          Explore colleges, compare your options, and discover where your rank
          could take you.
        </p>
      </div>
      <img
        className="shrink-0 mx-auto self-end min-[800px]:w-1/2 "
        src="/campusIllustration.webp"
        alt="campus illustration"
      />

      {/* //later add suggestion */}
    </section>
  );
}

/* 
  
  const features = [
    {
      icon: "search",
      title: "Explore Colleges",
      description: "Discover top colleges across India by course or city.",
      tone: "bg-rose-50 text-rose-500",
      href: "#explore",
    },
    {
      icon: "heart",
      title: "Compare Colleges",
      description: "Compare fees, placements, ratings and more side by side.",
      tone: "bg-indigo-50 text-indigo-500",
      href: "#compare",
    },
    {
      icon: "maximizer",
      title: "Check Your Chances",
      description: "Enter your rank and see the colleges you can get into.",
      tone: "bg-emerald-50 text-emerald-600",
      href: "#predictor",
    },
  ] as const; */
