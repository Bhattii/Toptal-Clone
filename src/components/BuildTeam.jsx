import arrow from "../assets/img/arrow.svg";
import leading from "../assets/img/leading.svg";
import level from "../assets/img/level.svg";
import theTop from "../assets/img/top.svg";
import person1 from "../assets/img/image1.jpg";
import person2 from "../assets/img/image2.jpg";
import person3 from "../assets/img/image3.jpg";
import shopify from "../assets/img/shopify.svg";

function BuildTeam() {
  return (
    <div className="bg-gray-100 p-16 flex justify-center">
      <div className="max-w-[1200px]   gap-5 flex flex-col justify-center md:flex-row">
        <div className=" lg:w-1/2">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl  font-semibold pb-5">
              Build Amazing Teams, On Demand
            </h2>
            <p className="text-gray-500">
              Quickly assemble the teams you need, exactly when you need them.
            </p>
          </div>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-2 gap-5">
            <div>
              <img src={arrow} className="mb-6" alt="Hire" />
              <h2 className="mb-3 heading-xs font-semibold">Hire Quickly</h2>
              <p className=" text-gray-700 font-light">
                Hire in under 48 hours. Scale up or down, no strings attached.
                We offer flexible engagements from hourly to full-time.
              </p>
            </div>
            <div>
              <img src={theTop} className="mb-6" alt="The top 3%" />
              <h2 className="mb-3 heading-xs font-semibold">The Top 3%</h2>
              <p className=" text-gray-700 font-light">
                Every applicant to the Toptal network is rigorously tested and
                vetted. Our highly selective process leads to a 98%
                trial-to-hire success rate.
              </p>
            </div>
            <div>
              <img
                src={leading}
                className="mb-6"
                alt="Leading the Future of Work"
              />
              <h2 className="mb-3 heading-xs font-semibold">
                Leading the Future of Work
              </h2>
              <p className=" text-gray-700 font-light">
                Our network is ready for tomorrows business challenges by
                embracing advanced and specialized skills including blockchain
                and AI.
              </p>
            </div>
            <div>
              <img src={level} className="mb-6" alt="A Level Above" />
              <h2 className="mb-3 heading-xs font-semibold">A Level Above</h2>
              <p className=" text-gray-700 font-light">
                Every single freelancer in our global network embodies the
                highest levels of integrity, professionalism, and communication.
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2  hidden lg:block">
          <div className="grid grid-cols-2 justify-center items-center">
            <div className="h-1/2 relative left-10 bg-white w-60 border 7 shadow-2xl">
              <div className="group overflow-hidden relative">
                <div className="bg-blue-900 opacity-70 w-full h-full absolute z-10 hidden group-hover:block"></div>
                <div className="absolute z-20 w-full h-full hidden group-hover:flex justify-center items-center text-white text-xl font-semibold">
                  View Full Profile
                </div>
                <img src={person1} alt="" className="scale-150 " />
              </div>

              <div className="p-3">
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
                    <span className="font-semibold ">Verified Expert</span> in
                    Engineering
                  </h3>
                </div>
                <div className="flex gap-1 my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    data-testid="developers_icon"
                    className="text-brand-blue" // assuming you have defined brand-blue color in Tailwind config
                  >
                    <path
                      fill="#204ECF" // This color may be overridden by the CSS class, you can remove it if not needed
                      fillRule="evenodd"
                      d="M10.1 1.125 6.875 15.1l-.975-.225L9.125.9l.975.225ZM1.63 8l3.074-4.1-.8-.6L.38 8l3.525 4.702.8-.6L1.63 8Zm9.674 4.103.8.6L15.63 8l-3.525-4.7-.8.6L14.38 8l-3.075 4.103Z"
                      clipRule="evenodd"></path>
                  </svg>
                  <h3 className="text-sm">JavaScript Developer </h3>
                </div>
                <div>
                  <h3 className="uppercase my-2 text-sm">Previously at</h3>
                  <img src={shopify} alt="shopify logo" />
                </div>
              </div>
            </div>
            <div>
              <div className=" relative top-5 right-10 bg-white w-60 border  shadow-2xl z-20">
                <div className="overflow-hidden relative group">
                  <div className="bg-blue-900 opacity-70 w-full h-full absolute z-10 hidden group-hover:block"></div>
                  <div className="absolute z-20 w-full h-full hidden group-hover:flex justify-center items-center text-white text-xl font-semibold">
                    View Full Profile
                  </div>
                  <img src={person2} alt="" className="scale-150" />
                </div>
                <div className="p-3">
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
                      <span className="font-semibold ">Verified Expert</span> in
                      Engineering
                    </h3>
                  </div>
                  <div className="flex gap-1 my-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      data-testid="developers_icon"
                      className="text-brand-blue" // assuming you have defined brand-blue color in Tailwind config
                    >
                      <path
                        fill="#204ECF" // This color may be overridden by the CSS class, you can remove it if not needed
                        fillRule="evenodd"
                        d="M10.1 1.125 6.875 15.1l-.975-.225L9.125.9l.975.225ZM1.63 8l3.074-4.1-.8-.6L.38 8l3.525 4.702.8-.6L1.63 8Zm9.674 4.103.8.6L15.63 8l-3.525-4.7-.8.6L14.38 8l-3.075 4.103Z"
                        clipRule="evenodd"></path>
                    </svg>
                    <h3 className="text-sm">JavaScript Developer </h3>
                  </div>
                  <div>
                    <h3 className="uppercase my-2 text-sm">Previously at</h3>
                    <img src={shopify} alt="shopify logo" />
                  </div>
                </div>
              </div>

              <div className="bg-white w-60 border  shadow-2xl z-0">
                <div className="overflow-hidden relative group">
                  <div className="bg-blue-900 opacity-70 w-full h-full absolute z-10 hidden group-hover:block"></div>
                  <div className="absolute z-20 w-full h-full hidden group-hover:flex justify-center items-center text-white text-xl font-semibold">
                    View Full Profile
                  </div>
                  <img src={person3} alt="" className="scale-150" />
                </div>
                <div className="p-3">
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
                      <span className="font-semibold ">Verified Expert</span> in
                      Engineering
                    </h3>
                  </div>
                  <div className="flex gap-1 my-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      data-testid="developers_icon"
                      className="text-brand-blue" // assuming you have defined brand-blue color in Tailwind config
                    >
                      <path
                        fill="#204ECF" // This color may be overridden by the CSS class, you can remove it if not needed
                        fillRule="evenodd"
                        d="M10.1 1.125 6.875 15.1l-.975-.225L9.125.9l.975.225ZM1.63 8l3.074-4.1-.8-.6L.38 8l3.525 4.702.8-.6L1.63 8Zm9.674 4.103.8.6L15.63 8l-3.525-4.7-.8.6L14.38 8l-3.075 4.103Z"
                        clipRule="evenodd"></path>
                    </svg>
                    <h3 className="text-sm">JavaScript Developer </h3>
                  </div>
                  <div>
                    <h3 className="uppercase my-2 text-sm">Previously at</h3>
                    <img src={shopify} alt="shopify logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildTeam;
