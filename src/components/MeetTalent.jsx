import person1 from "../assets/img/image1.jpg";
import shopify from "../assets/img/shopify.svg";
import toptal from "../assets/img/Toptal.svg";
import toptalLogo from "../assets/img/toptal-logo.svg";
function MeetTalent() {
  return (
    <>
      <div className="bg-gray-100 p-11 flex flex-col justify-center items-center">
        <div className="max-w-[1200px]">
          <h2 className="text-4xl text-center font-semibold my-20">
            Meet Talent in Our Network
          </h2>
          <div className="">
            <ul className="text-gray-700 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 py-5 border-y-[1px] border-gray-500 text-sm">
              <li className="hover:cursor-pointer border-r-[1px] border-gray-500 group py-1 focus-within:bg-blue-800 focus-within:rounded focus-within:text-white ">
                <a
                  href="#developers"
                  id="developers"
                  className="flex items-center justify-center gap-4 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="blue"
                    className="group-focus-within:fill-white">
                    <path
                      fillRule="evenodd"
                      d="M10.1 1.125 6.875 15.1l-.975-.225L9.125.9l.975.225ZM1.63 8l3.074-4.1-.8-.6L.38 8l3.525 4.702.8-.6L1.63 8Zm9.674 4.103.8.6L15.63 8l-3.525-4.7-.8.6L14.38 8l-3.075 4.103Z"
                      clipRule="evenodd"></path>
                  </svg>
                  <h3 className="font-semibold whitespace-nowrap">
                    Developers
                  </h3>
                </a>
              </li>
              <li className="hover:cursor-pointer border-r-[1px] border-gray-500 group py-1 focus-within:bg-blue-800 focus-within:rounded focus-within:text-white">
                <a
                  href="#Designers"
                  id="Designers"
                  className="flex items-center justify-center gap-5 px-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="16"
                    fill="none"
                    className="group-focus-within:fill-white">
                    <g stroke="#204ECF" clipPath="url(#designer_icon_id)">
                      <path d="M5.695 8.546a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.721 6.928V.546L.381 8.14s2.925 2.54 2.925 5.215v1.807M5.748.523l5.341 7.594s-2.952 2.54-2.952 5.215v1.807m-.257-1.862H3.338"></path>
                    </g>
                    <defs>
                      <clipPath id="designer_icon_id">
                        <path fill="#fff" d="M.3.5h13v15H.3z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <h3 className="font-semibold whitespace-nowrap">Designers</h3>
                </a>
              </li>

              <li className="hover:cursor-pointer border-r-[1px] border-gray-500 group py-1 focus-within:bg-blue-800 focus-within:rounded focus-within:text-white">
                <a
                  href="#FinanceExperts"
                  id="FinanceExperts"
                  className="flex items-center justify-center gap-5 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="blue"
                    viewBox="0 0 18 18"
                    className="group-focus-within:fill-white">
                    <g clipPath="url(#finance_icon_id)">
                      <path
                        stroke="#204ECF"
                        d="M1 16.29h16.643M12.115 3.562v10.373M6.449 6.624v7.311M1.218 8.921v5.014M17.346.5v13.435"
                        className="group-focus-within:fill-white"></path>
                    </g>
                    <defs>
                      <clipPath>
                        <rect
                          width="18"
                          height="18"
                          fill=""
                          className="group-focus-within:fill-white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <h3 className="font-semibold whitespace-nowrap">
                    Finance Experts
                  </h3>
                </a>
              </li>

              <li className="hover:cursor-pointer border-r-[1px] border-gray-500 group py-1 focus-within:bg-blue-800 focus-within:rounded focus-within:text-white">
                <a
                  href="#ProjectMangers"
                  id="ProjectMangers"
                  className="flex items-center justify-center gap-5 px-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="18"
                    fill="none"
                    viewBox="0 0 19 18"
                    className="group-focus-within:fill-white">
                    <g stroke="#204ECF" clipPath="url(#project_icon_id)">
                      <path d="m14.2 6.35-5.6 5.974-2.8-2.987"></path>
                      <path d="M5 .5v3.84M14.8 .5v3.84M1.9 15.962V2.712c0-.162.133-.292.3-.292h15.4c.167 0 .3.13.3.292v13.25a.295.295 0 0 1-.3.292H2.2c-.167 0-.3-.13-.3-.292Z"></path>
                    </g>
                    <defs>
                      <clipPath id="project_icon_id">
                        <rect width="19" height="18" fill="#fff"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <h3 className="font-semibold whitespace-nowrap">
                    Project Managers
                  </h3>
                </a>
              </li>

              <li className="hover:cursor-pointer border-r-[1px] border-gray-500 group py-1 focus-within:bg-blue-800 focus-within:rounded focus-within:text-white">
                <a
                  href="#ProductManagers"
                  id="ProductManagers"
                  className="flex items-center justify-center gap-5 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="20"
                    height="20"
                    fill="blue"
                    className="group-focus-within:fill-white">
                    <path
                      d="m20.57 20.21-3.35-3.36.71-.7 2.64 2.64 6.65-6.64.71.7z"
                      fill="blue"
                      className="group-focus-within:fill-white"></path>
                    <path
                      d="m14.57 29.06-12.5-6.25v-15.62l12.5-6.25 12.3 6.16v.8l-12.3 6.16-11.5-5.75v13.88l11.5 5.75 11.78-5.89.45.89-12.22 6.11zm-10.88-21.56 10.88 5.44 10.86-5.44-10.86-5.44z"
                      fill="#204ecd"
                      className="group-focus-within:fill-white"></path>
                    <path d="m0 0h30v30h-30z" fill="none"></path>
                  </svg>
                  <h3 className="font-semibold whitespace-nowrap">
                    Product Managers
                  </h3>
                </a>
              </li>

              <li className="hover:cursor-pointer group py-1 focus-within:bg-blue-800 focus-within:rounded focus-within:text-white">
                <a
                  href="#MarketingExperts"
                  id="MarketingExperts"
                  className="flex items-center justify-center gap-5 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="20"
                    height="20"
                    fill="white"
                    className="group-focus-within:fill-white">
                    <path
                      d="M1 4v3.7l10 9 2 11.2h3.8l2-11.2 10-9V4H1zm26.8 3.2L18.1 16H14v1h3.7L16 26.9h-2.1L12 16.2l-10-9V5h25.8v2.2z"
                      fill="blue"
                      className="group-focus-within:fill-white"></path>
                  </svg>
                  <h3 className="font-semibold whitespace-nowrap">
                    Marketing Experts
                  </h3>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <div className="mt-10 grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center">
              <div className=" shadow-2xl bottom-1 w-[270px] flex justify-center items-center bg-white p-4">
                <div className="">
                  <img
                    src={person1}
                    alt="developer image"
                    width="200px"
                    className=""
                  />
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
                  <div className="flex gap-1 mb-4 mt-1">
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
                    <h3 className="text-sm">Expertise</h3>
                    <div className="grid grid-cols-2 text-center text-sm">
                      <span className=" border border-gray-500 rounded-xl py-1 px-2 m-3 hover:bg-slate-200 ">
                        DevOps
                      </span>
                      <span className=" border border-gray-500 rounded-xl py-1 px-2 m-3 hover:bg-slate-200">
                        Git
                      </span>
                      <span className=" border border-gray-500 rounded-xl py-1 px-2 m-3 hover:bg-slate-200">
                        NodeJs
                      </span>
                      <span className=" border border-gray-500 rounded-xl py-1 px-2 m-3 hover:bg-slate-200">
                        JavaScript
                      </span>
                    </div>
                    <h3 className="uppercase my-2 text-sm">Previously at</h3>
                    <img src={shopify} alt="shopify logo" />
                  </div>
                </div>
              </div>

              <div className=" shadow-2xl bottom-1 w-[270px] flex justify-center items-center bg-white p-4">
                <div className="">
                  <img
                    src={person1}
                    alt="developer image"
                    width="200px"
                    className=""
                  />
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
                  <div className="flex gap-1 mb-4 mt-1">
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
                    <h3 className="text-sm">Expertise</h3>
                    <div className="grid grid-cols-2 text-center text-sm">
                      <span className=" border border-gray-500 rounded-xl py-1 px-2 m-3 hover:bg-slate-200 ">
                        DevOps
                      </span>
                      <span className=" border border-gray-500 rounded-xl py-1 px-2 m-3 hover:bg-slate-200">
                        Git
                      </span>
                      <span className=" border border-gray-500 rounded-xl py-1 px-2 m-3 hover:bg-slate-200">
                        NodeJs
                      </span>
                      <span className=" border border-gray-500 rounded-xl py-1 px-2 m-3 hover:bg-slate-200">
                        JavaScript
                      </span>
                    </div>
                    <h3 className="uppercase my-2 text-sm">Previously at</h3>
                    <img src={shopify} alt="shopify logo" />
                  </div>
                </div>
              </div>

              <div className=" shadow-2xl bottom-1 w-[270px] flex justify-center items-center bg-white p-4">
                <div className="">
                  <img
                    src={person1}
                    alt="developer image"
                    width="200px"
                    className=""
                  />
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
                  <div className="flex gap-1 mb-4 mt-1">
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
                    <h3 className="text-sm">Expertise</h3>
                    <div className="grid grid-cols-2 text-center text-sm">
                      <span className=" border border-gray-500 rounded-xl py-1 px-2 m-3 hover:bg-slate-200 ">
                        DevOps
                      </span>
                      <span className=" border border-gray-500 rounded-xl py-1 px-2 m-3 hover:bg-slate-200">
                        Git
                      </span>
                      <span className=" border border-gray-500 rounded-xl py-1 px-2 m-3 hover:bg-slate-200">
                        NodeJs
                      </span>
                      <span className=" border border-gray-500 rounded-xl py-1 px-2 m-3 hover:bg-slate-200">
                        JavaScript
                      </span>
                    </div>
                    <h3 className="uppercase my-2 text-sm">Previously at</h3>
                    <img src={shopify} alt="shopify logo" />
                  </div>
                </div>
              </div>

              <div className=" relative shadow-2xl 2xl:w-[270px]  bg-transparent rounded ">
                <div className="h-[477px] bg-blue-900 px-6">
                  <img
                    alt="logo image"
                    className="absolute z-10 h-fit"
                    src={toptal}
                  />
                  <div className="text-white text-center w-full h-full z-20 flex items-center justify-center flex-col ">
                    <img
                      alt="Toptal emblem"
                      className="mb-4"
                      src={toptalLogo}
                      width="36"
                      height="48"
                    />
                    <div className="mb-6">
                      <h3 className=" text-2xl font-semibold">
                        Discover 20,000+ More Talent
                      </h3>
                      <p className="py-3">in the Toptal Network</p>
                    </div>
                    <a href="#" className="bg-green-500 px-4 py-2 rounded">
                      Discover Toptal Talent
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetTalent;
