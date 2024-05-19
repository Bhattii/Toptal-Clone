import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/img/logo.png";
import { useState } from "react";

export function Header() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/*-----------------------  Header Side Bar ---------------- */}
      <div
        className={`fixed z-50 top-16 left-0 h-screen bg-gray-200 ${
          isSidebarOpen ? "w-[50%]" : "w-0"
        } transition-all duration-300 overflow-hidden`}>
        <button
          onClick={handleSidebarToggle}
          className="text-2xl absolute right-5 top-5">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {/* Sidebar content */}
        <nav className={`p-10`}>
          <ul className={`flex flex-col gap-4 hover:cursor-pointer`}>
            <li className="" onClick={handleSidebarToggle}>
              <a href="">Top 3%</a>
            </li>
            <li className="group flex relative">
              <div className="">
                Hire Talent
                <FontAwesomeIcon
                  icon={faArrowDown}
                  width="7px"
                  className="ml-1 group-hover:rotate-180"
                />
              </div>
              <div className="hidden group-hover:block absolute right-0">
                <ul className="bg-white py-5 px-10 text-nowrap grid gap-4 hover:cursor-pointer">
                  <li className="hover:text-blue-800 ">
                    <a href="">Developers</a>
                  </li>
                  <li className="hover:text-blue-800">
                    <a href=""></a>Designers
                  </li>
                  <li className="hover:text-blue-800">
                    <a href=""></a>Marketing Experts
                  </li>
                  <li className="hover:text-blue-800">
                    <a href=""></a>Project Mangers
                  </li>
                  <li className="hover:text-blue-800">
                    <a href=""></a>Product Managers
                  </li>
                  <li className="hover:text-blue-800">
                    <a href=""></a>Finance Experts
                  </li>
                </ul>
              </div>
            </li>
            <li className="">
              <a href="" onClick={handleSidebarToggle}>
                Why
              </a>
            </li>
            <li className=" " onClick={handleSidebarToggle}>
              <a href="">Clients</a>
            </li>
            <li className="" onClick={handleSidebarToggle}>
              <a href="">Blogs</a>
            </li>
            <li className="" onClick={handleSidebarToggle}>
              <a href="">About Us</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* ------------------------- Header ---------------------------- */}

      <div className="bg-bgGray flex justify-center fixed z-50 w-full items-center px-[5%]">
        <div className="text-sm flex items-center justify-between w-full 2xl:max-w-[1200px]">
          <FontAwesomeIcon
            icon={faBars}
            onClick={handleSidebarToggle}
            className="px-3 py-5 size-6 mr-2 md:mr-2 sm:block md:block lg:hidden  xl:hidden 2xl:hidden"
          />
          <div className="font-small flex items-center justify-between sm:justify-between">
            <img
              src={logo}
              className="py-5 smaller:mr-0"
              alt="logo"
              width="110px"
            />
            <nav className="hidden lg:block">
              <ul className="flex gap-4 px-4 hover:cursor-pointer ">
                <li
                  key={1}
                  className={`py-5 border-opacity-0 hover:border-opacity-100 border-b-2 border-blue-800 ${
                    activeIndex !== null && activeIndex !== 1
                      ? "opacity-50"
                      : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(1)}
                  onMouseLeave={() => setActiveIndex(null)}>
                  <a href="" className={``}>
                    Top 3%
                  </a>
                </li>
                <li
                  key={2}
                  className={`group flex justify-center items-center relative  ${
                    activeIndex !== null && activeIndex !== 2
                      ? "opacity-50"
                      : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(2)}
                  onMouseLeave={() => setActiveIndex(null)}>
                  <div className="py-5 border-opacity-0 hover:border-opacity-100 border-b-2 border-blue-800">
                    Hire Talent
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      width="7px"
                      className="ml-1 group-hover:rotate-180"
                    />
                  </div>
                  <div className="hidden group-hover:block">
                    <ul className="bg-white py-5 px-10 absolute top-16 left-0 text-nowrap grid gap-4 hover:cursor-pointer">
                      <li className="hover:text-blue-800 ">
                        <a href="">Developers</a>
                      </li>
                      <li className="hover:text-blue-800">
                        <a href=""></a>Designers
                      </li>
                      <li className="hover:text-blue-800">
                        <a href=""></a>Marketing Experts
                      </li>
                      <li className="hover:text-blue-800">
                        <a href=""></a>Project Mangers
                      </li>
                      <li className="hover:text-blue-800">
                        <a href=""></a>Product Managers
                      </li>
                      <li className="hover:text-blue-800">
                        <a href=""></a>Finance Experts
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  key={3}
                  className={`py-5 border-opacity-0 hover:border-opacity-100 border-b-2 border-blue-800  ${
                    activeIndex !== null && activeIndex !== 3
                      ? "opacity-50"
                      : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(3)}
                  onMouseLeave={() => setActiveIndex(null)}>
                  <a href="">Why</a>
                </li>
                <li
                  key={4}
                  className={`py-5 border-opacity-0 hover:border-opacity-100 border-b-2 border-blue-800  ${
                    activeIndex !== null && activeIndex !== 4
                      ? "opacity-50"
                      : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(4)}
                  onMouseLeave={() => setActiveIndex(null)}>
                  <a href="">Clients</a>
                </li>
                <li
                  key={5}
                  className={`py-5 border-opacity-0 hover:border-opacity-100 border-b-2 border-blue-800  ${
                    activeIndex !== null && activeIndex !== 5
                      ? "opacity-50"
                      : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(5)}
                  onMouseLeave={() => setActiveIndex(null)}>
                  <a href="">Blogs</a>
                </li>
                <li
                  key={6}
                  className={`py-5 border-opacity-0 hover:border-opacity-100 border-b-2 border-blue-800  ${
                    activeIndex !== null && activeIndex !== 6
                      ? "opacity-50"
                      : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(6)}
                  onMouseLeave={() => setActiveIndex(null)}>
                  <a href="">About Us</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className=" hidden sm:hidden md:hidden lg:block 2xl:block">
            <a href="" className="py-5 hover:text-blue-500">
              Apply as a Freelance
            </a>

            <span className="px-3 py-3">
              <a
                href=""
                className="bg-green-400 py-2 px-4 rounded-md text-white hover:bg-green-300">
                Hire Top Talent
              </a>
            </span>

            <a href="" className="px-3 py-5 hover:text-blue-500">
              Log In
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
