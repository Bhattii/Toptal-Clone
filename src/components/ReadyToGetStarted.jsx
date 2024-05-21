import play from "../assets/img/playButton.svg";
import cnbcLogo from "../assets/img/cnbc logo.svg";
import bg from "../assets/img/bg.avif";

function ReadyToGetStarted() {
  return (
    <>
      <div className="bg-gray-100 p-11 flex flex-col justify-center items-center">
        <div className="max-w-[1200px] flex flex-col justify-center items-center overflow-hidden">
          <div className="mb-11 flex flex-col lg:flex-row gap-3 justify-center items-center">
            <h2 className="text-xl text-gray-900 font-semibold text-center xl:text-4xl">
              Ready to get started?
            </h2>
            <span className="px-3 py-3">
              <a
                href=""
                className="bg-green-500 py-3 px-4 lg:px-8 font-semibold shadow rounded-md text-white text-nowrap hover:bg-green-700">
                Hire Top Talent
              </a>
            </span>
          </div>

          <div className="relative">
            <img
              src={bg}
              alt="background image"
              className="h-[400px] bg-cover bg-no-repeat"
            />
            <div className="px-[10%]">
              <blockquote className="absolute top-0 text-white">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 my-11">
                  <path
                    d="M0 13.6C0 17.7 2.47 20 5.247 20c2.469 0 4.32-2 4.32-4.3 0-2.4-1.748-4.2-4.114-4.2-.309 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L7.305 0C3.395 2.8 0 8 0 13.6zm14.61 0c0 4.1 2.365 6.4 5.143 6.4 2.572 0 4.424-2 4.424-4.3 0-2.4-1.749-4.2-4.115-4.2-.412 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L21.914 0c-4.013 2.8-7.305 8-7.305 13.6z"
                    fill="blue"></path>
                </svg>
                <p className="text-xl sm:text-3xl lg:text-4xl">
                  We&apos;re known as a high-skilled marketplace, and we see an
                  acute pain point within that area.
                </p>
              </blockquote>
              <img src={cnbcLogo} className="absolute bottom-0 py-24" alt="" />

              <button className="absolute bottom-0 text-white my-6 lg:my-10 flex gap-3 justify-center items-center font-semibold">
                <img src={play} alt="" />
                Watch the Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadyToGetStarted;
