
import {
  // FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  // FaLinkedin,
  // FaSnapchat,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 pt-12 pb-8 px-4 md:px-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <img
            className="w-72 h-56"
            src="https://i.ibb.co/PWkVHyy/2411-removebg-preview.png"
            alt=""
          />
         
        </div>
        <div className="col-span-1">
          <h2 className="text-white text-lg font-medium mb-4">Latest</h2>
          <ul className="text-gray-400 text-sm leading-loose">
            <li>
              <Link to="">Public API</Link>
            </li>
            <li>
              <Link to="">Documentation</Link>
            </li>
            <li>
              <Link to="">Guides</Link>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100 transition-colors">
                Products
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="text-white text-lg font-medium mb-4">Contact Us</h2>
          <p className="text-gray-400 text-sm leading-loose">
            123 Main St.
            <br />
            Anytown, USA 12345
            <br />
            (123) 456-7890
            <br />
            info@example.com
          </p>
        </div>
       

        <div className="flex items-center space-x-4">
          <a href="#" className="relative group">
            <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
              <svg className="h-6 w-6 text-2xl text-white">
                <FaTwitter></FaTwitter>
              </svg>
            </div>
            <span className="absolute -left-10 bottom-0 bg-blue-500 text-white text-xs px-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Twitter
            </span>
          </a>

          <a href="#" className="relative group">
            <div className="h-10 w-10 bg-red-500  rounded-full flex items-center justify-center transform transition-transform duration-300 hover:rotate-12">
              <svg className="h-6 w-6 text-2xl text-white">
                <FaYoutube></FaYoutube>
              </svg>
            </div>
            <span className="absolute bottom-10 left-2 bg-red-500 text-white text-xs px-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              YouTube
            </span>
          </a>

          <a href="#" className="relative group">
            <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
              <svg className="h-6 w-6 text-2xl text-red-700">
                <FaInstagram></FaInstagram>
              </svg>
            </div>
            <span className="absolute left-10 bottom-0 bg-green-500 text-white text-xs px-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Instagram
            </span>
          </a>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-400 text-sm text-center">
          &copy; 2023 Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
