function Landing() {
  return (
    <section className=" relative z-10 py-32 max-md:py-36 bg-navy-800 ">
      <div className="container">
        <img
          src="images/illustration-intro.png"
          alt="illustration intro"
          className="mx-auto "
        />
        <h1 className=" max-w-2xl mx-auto text-white-custom text-center text-3xl md:text-4xl font-bold mt-8">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="opacity-80 text-white-custom text-center max-w-md mx-auto mt-5 mb-8">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className=" block max-w-xs px-20 py-4 rounded-full mx-auto bg-cyan-600 text-white-custom hover:bg-teal-200 transition-colors duration-300 cursor-pointer font-bold">
          Get Started
        </button>
      </div>
      <img
        src="images/bg-curvy-desktop.svg"
        alt=""
        className="absolute bottom-0 left-0 right-0 z-[-2] mx-auto"
      />
    </section>
  );
}

export default Landing;
