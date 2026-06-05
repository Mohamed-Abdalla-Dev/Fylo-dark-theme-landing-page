

function StayProductive() {
  return (
    <section className="py-16 ">
      <div className="container flex justify-center items-center gap-12 max-lg:flex-col max-lg:text-center">
        <img
          src="/Fylo-dark-theme-landing-page/images/illustration-stay-productive.png"
          alt="Stay Productive"
          className="mb-10 mx-auto flex-1"
        />
        <div className="flex-1 md:max-lg:w-full  ">
          <h2 className="text-3xl font-bold mb-4 text-white-custom max-lg:text-2xl">
            Stay productive, wherever you are
          </h2>
          <p className="text-white-custom opacity-80 mb-6 max-w-lg max-lg:mx-auto">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="text-white-custom opacity-80 mb-6 max-w-lg max-lg:mx-auto">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>
          <a
            href="#"
            className="text-cyan-300 transition-colors duration-300 hover:border-b-2 border-cyan-300 pb-1"
          >
            See how Fylo works
            <img
              src="/Fylo-dark-theme-landing-page/images/icon-arrow.svg"
              alt="arrow"
              className="inline-block ml-2  animate-bounce hover:text-cyan-300 "
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default StayProductive;
