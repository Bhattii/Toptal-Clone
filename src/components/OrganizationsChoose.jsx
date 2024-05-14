import playButton from "../assets/img/playButton.svg";
import iconOne from "../assets/img/1stCardIcon.svg";
import image1 from "../assets/img/VideoImage1.avif";
// import image2 from "../assets/img/VideoImage2.avif";
// import image3 from "../assets/img/VideoImage3.avif";
// import image4 from "../assets/img/VideoImage4.avif";
// import image5 from "../assets/img/VideoImage5.avif";
// import image6 from "../assets/img/VideoImage6.avif";
function OrganizationsChoose() {
  return (
    <>
      <div
        className="bg-white p-11 flex flex-col justify-center items-center"
        id="id='Organization'">
        <div className="max-w-[1200px]">
          <div className=" flex flex-col justify-center items-center mb-4 ">
            <h2 className="text-5xl text-gray-900 font-semibold text-center">
              Why Organizations Choose Toptal
            </h2>
            <p className="m-6 text-center text-gray-500 ">
              Discover the many ways in which our clients have embraced the
              benefits of the Toptal network.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
              <li className="relative group">
                <div className="relative max-w-[330px]  overflow-hidden ">
                  <div className="absolute inset-0 bg-black group-hover:bg-blue-800 opacity-100 transition duration-300 "></div>
                  <img
                    src={image1}
                    alt=""
                    className="opacity-50 w-full h-auto transition-transform duration-300 transform group-hover:scale-110"
                  />
                </div>

                <div>
                  <img
                    src={iconOne}
                    alt=""
                    className="absolute top-10 left-10"
                  />
                </div>

                <button className="text-white absolute bottom-10 left-10 flex gap-3 justify-center items-center font-semibold">
                  <img src={playButton} alt="" />
                  Watch the Video
                </button>
              </li>
              <li className="relative group">
                <div className="relative max-w-[330px]  overflow-hidden ">
                  <div className="absolute inset-0 bg-black group-hover:bg-blue-800 opacity-100 transition duration-300 "></div>
                  <img
                    src={image1}
                    alt=""
                    className="opacity-50 w-full h-auto transition-transform duration-300 transform group-hover:scale-110"
                  />
                </div>

                <div>
                  <img
                    src={iconOne}
                    alt=""
                    className="absolute top-10 left-10"
                  />
                </div>

                <button className="text-white absolute bottom-10 left-10 flex gap-3 justify-center items-center font-semibold">
                  <img src={playButton} alt="" />
                  Watch the Video
                </button>
              </li>
              <li className="relative group">
                <div className="relative max-w-[330px]  overflow-hidden ">
                  <div className="absolute inset-0 bg-black group-hover:bg-blue-800 opacity-100 transition duration-300 "></div>
                  <img
                    src={image1}
                    alt=""
                    className="opacity-50 w-full h-auto transition-transform duration-300 transform group-hover:scale-110"
                  />
                </div>

                <div>
                  <img
                    src={iconOne}
                    alt=""
                    className="absolute top-10 left-10"
                  />
                </div>

                <button className="text-white absolute bottom-10 left-10 flex gap-3 justify-center items-center font-semibold">
                  <img src={playButton} alt="" />
                  Watch the Video
                </button>
              </li>
              <li className="relative group">
                <div className="relative max-w-[330px]  overflow-hidden ">
                  <div className="absolute inset-0 bg-black group-hover:bg-blue-800 opacity-100 transition duration-300 "></div>
                  <img
                    src={image1}
                    alt=""
                    className="opacity-50 w-full h-auto transition-transform duration-300 transform group-hover:scale-110"
                  />
                </div>

                <div>
                  <img
                    src={iconOne}
                    alt=""
                    className="absolute top-10 left-10"
                  />
                </div>

                <button className="text-white absolute bottom-10 left-10 flex gap-3 justify-center items-center font-semibold">
                  <img src={playButton} alt="" />
                  Watch the Video
                </button>
              </li>
              <li className="relative group">
                <div className="relative max-w-[330px]  overflow-hidden ">
                  <div className="absolute inset-0 bg-black group-hover:bg-blue-800 opacity-100 transition duration-300 "></div>
                  <img
                    src={image1}
                    alt=""
                    className="opacity-50 w-full h-auto transition-transform duration-300 transform group-hover:scale-110"
                  />
                </div>

                <div>
                  <img
                    src={iconOne}
                    alt=""
                    className="absolute top-10 left-10"
                  />
                </div>

                <button className="text-white absolute bottom-10 left-10 flex gap-3 justify-center items-center font-semibold">
                  <img src={playButton} alt="" />
                  Watch the Video
                </button>
              </li>
              <li className="relative group">
                <div className="relative max-w-[330px]  overflow-hidden ">
                  <div className="absolute inset-0 bg-black group-hover:bg-blue-800 opacity-100 transition duration-300 "></div>
                  <img
                    src={image1}
                    alt=""
                    className="opacity-50 w-full h-auto transition-transform duration-300 transform group-hover:scale-110"
                  />
                </div>

                <div>
                  <img
                    src={iconOne}
                    alt=""
                    className="absolute top-10 left-10"
                  />
                </div>

                <button className="text-white absolute bottom-10 left-10 flex gap-3 justify-center items-center font-semibold">
                  <img src={playButton} alt="" />
                  Watch the Video
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrganizationsChoose;
