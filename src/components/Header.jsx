import { useEffect, useState } from "react";

function Header() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }, []);
  const [links] = useState(["Features", "Team", "Sign In"]);
  return (
    <header className="bg-navy-800 py-7 z-50 fixed w-full top-0 left-0 transition-all duration-300">
      <div className="container flex justify-between items-center max-md:flex-col max-md:gap-6">
        <a href="/">
          <img
            src="images/logo.svg"
            alt="Fylo Logo"
            className="max-md:w-28"
          />
        </a>
        <nav>
          <ul className="flex items-center gap-13 max-md:gap-9">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="images/logo.svg"
                  className="text-white-custom opacity-80 hover:opacity-100 hover:underline  transition-all duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
