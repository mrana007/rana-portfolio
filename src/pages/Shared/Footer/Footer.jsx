import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer footer-center p-10 bg-black rounded mt-auto">
        <nav className="grid grid-flow-col gap-4">
          <Link to="" className="link link-hover text-white">
            About
          </Link>
          <Link to="/contact" className="link link-hover text-white">
            Contact Me
          </Link>
          <Link to="" className="link link-hover text-white">
            Projects
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link
              to="https://github.com/mrana007"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub className="text-white text-5xl"></FaGithub>
            </Link>
            <Link
              to="https://web.facebook.com/rana.iubat"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebookF className="text-blue-500 text-5xl"></FaFacebookF>
            </Link>
            <Link
              to="https://www.instagram.com/sm_rana007"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="text-red-500 text-5xl"></FaInstagram>
            </Link>
          </div>
        </nav>
        <aside>
          <p className="text-white">
            Copyright © 2023 - All right reserved by Md. Masud Rana
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
