function GetStarted() {
  return (
    <section className=" py-20 ">
      <div className="container relative">
        <div className="absolute -top-36 max-md:-top-48  left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] transform translate-y-0 max-w-4xl bg-navy-850 p-8 md:p-12 rounded-lg shadow-2xl text-center z-10">
          <h2 className="text-white-custom text-2xl pt-6">
            {" "}
            Get early access today
          </h2>
          <p className="text-white-custom opacity-80 max-w-md mx-auto py-6 ">
            Ready to take your productivity to the next level? Sign up today and
            start achieving more.
          </p>
          <form className=" flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full md:flex-1 bg-white text-navy-950 px-6 py-4 rounded-full focus:outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="block  px-8 py-4 rounded-full mx-auto bg-cyan-600 text-white-custom hover:bg-teal-200 transition-colors duration-300 cursor-pointer font-bold"
            >
              Get Started For Free
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
