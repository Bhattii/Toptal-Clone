import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import toptal from "../assets/img/toptal-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <>
      <div className="bg-blue-900 p-11 flex flex-col justify-center items-center overflow-hidden">
        <div className="max-w-[1200px] text-white ">
          <div className=" text-center sm:text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h3 className="font-semibold text-lg border-b border-gray-500 py-4 ">
                Technology Services
              </h3>
              <ul>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Artificial Intelligence
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Application Services
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Business Process Automation
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Cloud Services
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Data Analytics Consulting
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Information Security Services
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Quality Assurance Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg border-b border-gray-500 py-4 ">
                On-Demand Talent
              </h3>
              <ul>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Hire Freelance Developers
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Hire Freelance Designers
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Hire Freelance Finance Experts
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Hire Freelance Project Managers
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Hire Freelance Product Managers
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Hire Freelance Marketers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg border-b border-gray-500 py-4 hover:underline hover:text-gray-400">
                <a href="">Management Consulting</a>
              </h3>
              <ul>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Finance and M&A
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Innovation & Experience Consulting
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Sales Consulting
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Strategy Consulting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold  text-lg border-b border-gray-500 py-4 ">
                Marketing Services
              </h3>
              <ul>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Digital Marketing
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Grow Marketing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold  text-lg border-b border-gray-500 py-4 ">
                About
              </h3>
              <ul>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Top 3%
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Clients
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Freelance Jobs
                  </a>
                </li>
                <li className="pt-3">
                  <a
                    href=""
                    className="hover:underline hover:text-gray-400 my-3">
                    Community
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Specialized Services
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Utilities & Tools
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Research & Analysis Center
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg border-b border-gray-500 py-4 ">
                Contact
              </h3>
              <ul>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Contact Us
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Press Center
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Careers
                  </a>
                </li>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold  text-lg border-b border-gray-500 py-4 ">
                End-to-End Solutions
              </h3>
              <ul>
                <li className="pt-3">
                  <a href="" className=" hover:text-gray-400 my-3">
                    Managed Delivery
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-6 my-11 border-y border-gray-500">
            <div className="flex flex-col gap-5 justify-between items-center  md:flex-row">
              <div className=" flex items-center gap-6 flex-col md:flex-row">
                <a href="" className="pr-4 flex md:border-r border-gray-500">
                  <img src={toptal} alt="" className="w-7 mr-2" />
                  <div className="font-semi-bold text-4xl">
                    Toptal
                    <sub className="text-xs">®</sub>
                  </div>
                </a>
                <div>
                  The World’s Top Talent, On Demand&nbsp;<span>®</span>
                </div>
              </div>
              <ul className="flex items-center gap-6">
                <li className=" ">
                  <a
                    href=""
                    className="border rounded-full border-gray-400 hover:cursor-pointer hover:text-gray-400 flex justify-center items-center">
                    <FontAwesomeIcon icon={faLinkedinIn} className="p-3" />
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex justify-center items-center border rounded-full border-gray-400 hover:cursor-pointer hover:text-gray-400 ">
                    <FontAwesomeIcon icon={faTwitter} className="p-3" />
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex justify-center items-center border rounded-full border-gray-400 hover:cursor-pointer hover:text-gray-400 ">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="py-3 px-[15px]"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex justify-center items-center border rounded-full border-gray-400 hover:cursor-pointer hover:text-gray-400">
                    <FontAwesomeIcon icon={faInstagram} className="p-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-4 justify-center flex-col md:flex-row">
            <p className=" md:border-r border-gray-400 pr-3 text-center">
              Copyright 2010 - 2024 Toptal, LLC
            </p>
            <ul className="grid gap-3 text-center grid-cols-1  md:grid-cols-3 hover:cursor-pointer">
              <li className="hover:text-gray-400 hover:cursor-pointer">
                <a>Privacy Policy</a>
              </li>
              <li className="hover:text-gray-400 hover:cursor-pointer">
                <a href="">Website Terms</a>
              </li>
              <li className="hover:text-gray-400 hover:cursor-pointer">
                <a href="">Accessibility</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
