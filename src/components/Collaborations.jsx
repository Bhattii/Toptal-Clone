import collbration from "../assets/img/Collabration.avif";
import toptal from "../assets/img/Toptal-card-icon.svg";
import salesforce from "../assets/img/salesforceicon.svg";
function Collaborations() {
  return (
    <>
      <div className="bg-gray-100 p-11 flex flex-col justify-center items-center">
        <div className="max-w-[1200px] flex flex-col justify-center items-center">
          <div className=" flex flex-col justify-center items-center mb-4 ">
            <h2 className="text-5xl text-gray-900 font-semibold text-center">
              Collaborations With Leading Brands
            </h2>
            <p className="m-6 text-center text-gray-500 ">
              We collaborate with a number of top-tier companies on imagining
              the future of work. Have a look.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
            <div className="relative group bg-white group shadow-xl max-w-[350px] overflow-hidden hover:cursor-pointer">
              <div className="absolute z-20 top-0 w-full h-full transtion-all group-hover:bg-blue-700 opacity-20"></div>
              <div className="relative">
                <img
                  className="w-full h-[180px] scale-110"
                  src={collbration}
                  alt=""
                />
                <div className="absolute  top-[30%] left-[40%] text-white opacity-100 z-30 hidden   font-bold text-2xl  group-hover:block">
                  Read More
                </div>
              </div>

              <div className="p-6">
                <div className=" border-b-2 pb-8">
                  <p className=" text-sm font-semibold text-blue-800 my-3">
                    Toptal Partnership
                  </p>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-800">
                    Industry Perspective: Salesforce On Team Alignment And Agile
                    Talent
                  </h3>
                </div>
                <div className=" flex justify-between items-center pt-4">
                  <img
                    src={toptal}
                    alt="toptal icon"
                    className="block h-6 xl:h-8 object-contain"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="12"
                    fill="none"
                    className="shrink-0">
                    <path
                      fill="#C4C6CA"
                      d="M7.321 0h-2v5h-5v2h5v5h2V7h5V5h-5V0Z"></path>
                  </svg>
                  <img
                    src={salesforce}
                    alt="salesforceicon"
                    className="object-contain h-6"
                  />
                </div>
              </div>
            </div>
            <div className="relative group bg-white group shadow-xl max-w-[350px] overflow-hidden hover:cursor-pointer">
              <div className="absolute z-20 top-0 w-full h-full transtion-all group-hover:bg-blue-700 opacity-20"></div>
              <div className="relative">
                <img
                  className="w-full h-[180px] scale-110"
                  src={collbration}
                  alt=""
                />
                <div className="absolute  top-[30%] left-[40%] text-white opacity-100 z-30 hidden   font-bold text-2xl  group-hover:block">
                  Read More
                </div>
              </div>

              <div className="p-6">
                <div className=" border-b-2 pb-8">
                  <p className=" text-sm font-semibold text-blue-800 my-3">
                    Toptal Partnership
                  </p>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-800">
                    Industry Perspective: Salesforce On Team Alignment And Agile
                    Talent
                  </h3>
                </div>
                <div className=" flex justify-between items-center pt-4">
                  <img
                    src={toptal}
                    alt="toptal icon"
                    className="block h-6 xl:h-8 object-contain"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="12"
                    fill="none"
                    className="shrink-0">
                    <path
                      fill="#C4C6CA"
                      d="M7.321 0h-2v5h-5v2h5v5h2V7h5V5h-5V0Z"></path>
                  </svg>
                  <img
                    src={salesforce}
                    alt="salesforceicon"
                    className="object-contain h-6"
                  />
                </div>
              </div>
            </div>
            <div className="relative group bg-white group shadow-xl max-w-[350px] overflow-hidden hover:cursor-pointer">
              <div className="absolute z-20 top-0 w-full h-full transtion-all group-hover:bg-blue-700 opacity-20"></div>
              <div className="relative">
                <img
                  className="w-full h-[180px] scale-110"
                  src={collbration}
                  alt=""
                />
                <div className="absolute  top-[30%] left-[40%] text-white opacity-100 z-30 hidden   font-bold text-2xl  group-hover:block">
                  Read More
                </div>
              </div>

              <div className="p-6">
                <div className=" border-b-2 pb-8">
                  <p className=" text-sm font-semibold text-blue-800 my-3">
                    Toptal Partnership
                  </p>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-800">
                    Industry Perspective: Salesforce On Team Alignment And Agile
                    Talent
                  </h3>
                </div>
                <div className=" flex justify-between items-center pt-4">
                  <img
                    src={toptal}
                    alt="toptal icon"
                    className="block h-6 xl:h-8 object-contain"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="12"
                    fill="none"
                    className="shrink-0">
                    <path
                      fill="#C4C6CA"
                      d="M7.321 0h-2v5h-5v2h5v5h2V7h5V5h-5V0Z"></path>
                  </svg>
                  <img
                    src={salesforce}
                    alt="salesforceicon"
                    className="object-contain h-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collaborations;
