import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import exploreBg from "../assets/img/explore-1.avif";
import exploreBg2 from "../assets/img/explore-bg-2.avif";
import exploreMan from "../assets/img/explore-man.jpg";
import exploreGirl from "../assets/img/explore-girl-2.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function ExploreTrending() {
  return (
    <>
      <div className="bg-white p-11 flex flex-col justify-center items-center">
        <div className="max-w-[1200px] flex flex-col justify-center items-center">
          <div className="mb-16 flex flex-col lg:flex-row gap-3 justify-center items-center">
            <h2 className="text-5xl text-gray-900 font-semibold text-center">
              Explore Trending Toptal Publications
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="group border hover:shadow-2xl">
              <div className="relative">
                <div className="w-full h-full bg-blue-800 absolute opacity-50 hidden group-hover:block"></div>
                <img
                  src={exploreBg}
                  alt="explore image"
                  className="w-full"></img>
                <img
                  src={exploreMan}
                  alt="explore man image"
                  className="absolute left-10 bottom-[-40px] "
                  width="100px"
                />
              </div>

              <div className="px-10">
                <ol className="flex mt-16 text-blue-800 uppercase gap-2 text-sm text-nowrap">
                  <li>
                    <a href="">Finance</a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      width="10px"></FontAwesomeIcon>
                  </li>
                  <li>
                    <a href="">Finance Processes</a>
                  </li>
                </ol>
                <h3 className="text-2xl my-3 font-semibold group-hover:text-blue-800">
                  <a href="">
                    Exploring the Post-crash Cryptocurrency Market: Blockchain,
                    Regulations, and Beyond
                  </a>
                </h3>
                <div className="flex gap-2">
                  <span className="text-gray-500">By </span>
                  <span className="font-semibold">Jeffrey Mazer</span>
                </div>

                <p className="my-6">
                  The 2022 crash shook the cryptocurrency market to its core,
                  but investors are still buying digital coins. How does crypto
                  work, and what does the future hold for it?
                </p>
                <div className="flex justify-between items-center my-10 ">
                  <span className="text-gray-500">17 minute read</span>
                  <div className="hidden group-hover:block">
                    <div className="flex gap-4 justify-center items-center text-blue-800">
                      <a href="" className="">
                        Continue Reading
                      </a>
                      <FontAwesomeIcon
                        className="hidden group-hover:block"
                        icon={faArrowRight}
                        width="12px"></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group border hover:shadow-2xl ">
                <div className="relative">
                  <div className="w-full h-full bg-blue-800 absolute opacity-50 hidden group-hover:block"></div>
                  <img
                    src={exploreBg2}
                    alt="explore image"
                    className="w-full"></img>
                  <img
                    src={exploreGirl}
                    alt="explore man image"
                    className="absolute left-10 bottom-[-40px] "
                    width="100px"
                  />
                </div>

                <div className="px-6 pb-6">
                  <ol className="flex mt-16 text-blue-800 uppercase gap-2 text-sm text-nowrap">
                    <li>
                      <a href="">Projects</a>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        width="10px"></FontAwesomeIcon>
                    </li>
                    <li>
                      <a href="">Tips and Tools</a>
                    </li>
                  </ol>
                  <h3 className="text-xl my-3 font-semibold group-hover:text-blue-800">
                    <a href="">How to Use ChatGPT for Project Management</a>
                  </h3>

                  <div className="flex gap-2">
                    <span className="text-gray-500">By </span>
                    <span className="font-semibold">Jeffrey Mazer</span>
                  </div>
                </div>
              </div>
              <div className="group border hover:shadow-2xl">
                <div className="relative">
                  <div className="w-full h-full bg-blue-800 absolute opacity-50 hidden group-hover:block"></div>
                  <img
                    src={exploreBg2}
                    alt="explore image"
                    className="w-full"></img>
                  <img
                    src={exploreGirl}
                    alt="explore man image"
                    className="absolute left-10 bottom-[-40px] "
                    width="100px"
                  />
                </div>

                <div className="px-6 pb-6">
                  <ol className="flex mt-16 text-blue-800 uppercase gap-2 text-sm text-nowrap">
                    <li>
                      <a href="">Projects</a>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        width="10px"></FontAwesomeIcon>
                    </li>
                    <li>
                      <a href="">Tips and Tools</a>
                    </li>
                  </ol>
                  <h3 className="text-xl my-3 font-semibold group-hover:text-blue-800">
                    <a href="">How to Use ChatGPT for Project Management</a>
                  </h3>

                  <div className="flex gap-2">
                    <span className="text-gray-500">By </span>
                    <span className="font-semibold">Jeffrey Mazer</span>
                  </div>
                </div>
              </div>
              <div className="group border hover:shadow-2xl">
                <div className="relative">
                  <div className="w-full h-full bg-blue-800 absolute opacity-50 hidden group-hover:block"></div>
                  <img
                    src={exploreBg2}
                    alt="explore image"
                    className="w-full"></img>
                  <img
                    src={exploreGirl}
                    alt="explore man image"
                    className="absolute left-10 bottom-[-40px] "
                    width="100px"
                  />
                </div>

                <div className="px-6 pb-6">
                  <ol className="flex mt-16 text-blue-800 uppercase gap-2 text-sm text-nowrap">
                    <li>
                      <a href="">Projects</a>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        width="10px"></FontAwesomeIcon>
                    </li>
                    <li>
                      <a href="">Tips and Tools</a>
                    </li>
                  </ol>
                  <h3 className="text-xl my-3 font-semibold group-hover:text-blue-800">
                    <a href="">How to Use ChatGPT for Project Management</a>
                  </h3>

                  <div className="flex gap-2">
                    <span className="text-gray-500">By </span>
                    <span className="font-semibold">Jeffrey Mazer</span>
                  </div>
                </div>
              </div>
              <div className="group border hover:shadow-2xl">
                <div className="relative">
                  <div className="w-full h-full bg-blue-800 absolute opacity-50 hidden group-hover:block"></div>
                  <img
                    src={exploreBg2}
                    alt="explore image"
                    className="w-full"></img>
                  <img
                    src={exploreGirl}
                    alt="explore man image"
                    className="absolute left-10 bottom-[-40px] "
                    width="100px"
                  />
                </div>

                <div className="px-6 pb-6">
                  <ol className="flex mt-16 text-blue-800 uppercase gap-2 text-sm text-nowrap">
                    <li>
                      <a href="">Projects</a>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        width="10px"></FontAwesomeIcon>
                    </li>
                    <li>
                      <a href="">Tips and Tools</a>
                    </li>
                  </ol>
                  <h3 className="text-xl my-3 font-semibold group-hover:text-blue-800">
                    <a href="">How to Use ChatGPT for Project Management</a>
                  </h3>

                  <div className="flex gap-2">
                    <span className="text-gray-500">By </span>
                    <span className="font-semibold">Jeffrey Mazer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded py-2 px-4 m-16 font-semibold hover:text-blue-800">
            <a href="">Read More Through Leadership</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreTrending;
