
import playButton from "../assets/img/playButton.svg";
import iconOne from "../assets/img/1stCardIcon.svg";
import image1 from "../assets/img/VideoImage1.avif";
export const VideoCard = () => {
  return (
   <>
     <div className="flex flex-col justify-center items-center">
     <div className="relative group">
                <div className="relative w-full overflow-hidden ">
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
              </div>
          </div>
   </>
  )
}
