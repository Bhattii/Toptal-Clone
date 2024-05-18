import image1 from "../assets/img/image1.jpg";
import map from "../assets/img/map.png";
import shopify from "../assets/img/shopify.svg";

import image2 from "../assets/img/image2.jpg";
import image3 from "../assets/img/image3.jpg";
import image4 from "../assets/img/image4.jpg";
import image5 from "../assets/img/image5.jpg";
import { useState, useEffect } from "react";

function HireTheTop() {
  const divStyle = {
    clipPath: "polygon(100% 1%, 100% 100%, 12% 100%, 0 90%, 0 0)",
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: image1,
      name: "John Doe",
      company: "ABC Company",
      introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: image2,
      name: "Jane Smith",
      company: "XYZ Corporation",
      introduction:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: image3,
      name: "Alice Johnson",
      company: "123 Enterprises",
      introduction:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      image: image4,
      name: "Adnan Parveez",
      company: "123 Enterprises",
      introduction:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      image: image5,
      name: "Alice Johnson",
      company: "123 Enterprises",
      introduction:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-bgGray flex justify-center items-center py-28 px-11 overflow-hidden">
      <div className="max-w-[1200px] grid grid-cols-1 md:grid-cols-2 relative">
        <div className="mb-5 flex flex-col justify-center items-center z-10">
          <h1 className="text-5xl leading-normal text-center font-medium text-gray-800 lg:text-left">
            Hire the&nbsp;
            <a href="#" className="border-b-2 border-black">
              Top 3%
            </a>
            &nbsp;of Freelance Talent
            <sup>®</sup>
          </h1>
          <p className="mt-5 text-center mb-11 text-gray-500 lg:text-left">
            Toptal is an exclusive network of the top freelance software
            developers, designers, finance experts, product managers, and
            project managers in the world. Top companies hire Toptal freelancers
            for their most important projects.
          </p>
          <a
            href="#"
            className="bg-green-400 px-11 py-4 my-5 w-fit text-white text-center text-xl font-bold">
            Hire Top Talent
          </a>
        </div>

        <div className="relative hidden md:block">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex justify-center items-center absolute bottom-0 left-0">
              <div
                className={`absolute -bottom-28 md:-right-40 xl:-right-44 w-[600px] lg:w-[650px] xl:w-[700px] transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}>
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full z-0 p-1"
                />
                <div className="absolute bottom-0 z-3 w-full h-40 bg-gradient-to-t from-gray-300 to-transparent"></div>
              </div>

              <div
                className={`relative md:left-44 lg:left-60 xl:left-80 bottom-11 grid grid-cols-1 text-sm w-[220px] lg:w-[280px] max-h-[330px] p-6 bg-white justify-center items-center h-screen order-1 sm:order-2 transition-opacity duration-1000
                `}
                style={divStyle}>
                <img src={map} alt="Map" />
                <div className="relative bottom-16 left-28 w-3 h-3">
                  <div className="absolute w-full h-full rounded-full bg-blue-800 opacity-100 animate-ping"></div>
                  <div className="absolute top-[35%] left-[35%] w-1 h-1 rounded-full bg-blue-800 opacity-100"></div>
                </div>
                <div className="mt-3">
                  <h3 className="text-blue-700 font-semibold hover:cursor-pointer hover:underline p-1">
                    Gabriel Courtemanche
                  </h3>
                  <div className="flex gap-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="green"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill="green"
                        d="m2.3438,5.6562l-2.3438,2.3438,2.3438,2.3438v3.3137h3.3137l2.3425,2.3425,2.3425-2.3425h3.315v-3.315l2.3425-2.3425-2.3425-2.3425v-3.3137h-3.3138l-2.3437-2.3438-2.3438,2.3438h-3.3125v3.3125Zm5.0488,2.7528l2.754-2.7654.9705.9739-3.7245,3.7399-.9705-.9739-1.3672-1.3733.9705-.9752,1.3672,1.3739Z"></path>
                      <path
                        className="text-white dark:text-transparent"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.1465 5.64374L7.39254 8.4091L6.02535 7.03518L5.05485 8.01039L6.42204 9.38364L7.39254 10.3575L11.117 6.61761L10.1465 5.64374Z"
                        fill="white"></path>
                    </svg>
                    <h3 className="text-green-800 whitespace-nowrap text-sm">
                      <span className="font-semibold">Verified Expert</span> in
                      Engineering
                    </h3>
                  </div>
                  <div className="flex gap-1 mb-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      data-testid="developers_icon"
                      className="text-brand-blue">
                      <path
                        fill="#204ECF"
                        fillRule="evenodd"
                        d="M10.1 1.125 6.875 15.1l-.975-.225L9.125.9l.975.225ZM1.63 8l3.074-4.1-.8-.6L.38 8l3.525 4.702.8-.6L1.63 8Zm9.674 4.103.8.6L15.63 8l-3.525-4.7-.8.6L14.38 8l-3.075 4.103Z"
                        clipRule="evenodd"></path>
                    </svg>
                    <h3 className="text-sm">JavaScript Developer</h3>
                  </div>
                  <h3 className="uppercase my-2 text-sm">Previously at</h3>
                  <img src={shopify} alt="Shopify logo" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HireTheTop;
