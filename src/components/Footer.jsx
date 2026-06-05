import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-300 relative pt-40 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex justify-start max-lg:justify-center">
          <img
            src="/images/logo.svg"
            alt="Fylo Logo"
            className="h-8 w-auto"
          />
        </div>
        <div className="grid items-start grid-cols-4 max-lg:grid-cols-1 xl:grid-cols-4 gap-12 md:gap-8 text-sm">
          <div className="flex items-start gap-4 max-lg:flex-col">
            <img
              src="/images/icon-location.svg"
              alt="Location Icon"
              className="mt-1 max-lg:mx-auto"
            />
            <p className="leading-relaxed max-w-96 max-lg:text-center max-lg:mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="flex flex-col gap-4 mx-auto">
            <div className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer">
              <img src="/images/icon-phone.svg" alt="Phone Icon" />
              <span>+1-543-123-4567</span>
            </div>
            <div className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer">
              <img src="/images/icon-email.svg" alt="Email Icon" />
              <span>example@fylo.com</span>
            </div>
          </div>
          <div className="flex gap-8 mx-auto  max-lg:text-center max-lg:flex-col">
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="hover:text-cyan-500 transition-all duration-300"
              >
                About Us
              </a>
              <a
                href="#"
                className="hover:text-cyan-500  transition-all duration-300"
              >
                Jobs
              </a>
              <a href="#" className="hover:text-cyan-500 transition-all">
                Press
              </a>
              <a href="#" className="hover:text-cyan-500 transition-all">
                Blog
              </a>
            </div>
            <div className="flex flex-col gap-4 md:mt-0">
              <a href="#" className="hover:text-cyan-500  transition-all">
                Contact Us
              </a>
              <a href="#" className="hover:text-cyan-500  transition-all">
                Terms
              </a>
              <a href="#" className="hover:text-cyan-500  transition-all">
                Privacy
              </a>
            </div>
          </div>
          <div className="flex justify-end max-lg:justify-center gap-4 pt-4 md:pt-0 mx-auto">
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:text-cyan-500 hover:border-cyan-500 transition-colors"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:text-cyan-500 hover:border-cyan-500 transition-colors"
            >
              <FaTwitter size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:text-cyan-500 hover:border-cyan-500 transition-colors"
            >
              <FaInstagram size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
