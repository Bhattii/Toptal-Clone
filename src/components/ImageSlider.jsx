import { useState, useEffect } from "react";
import image1 from "../assets/img/image1.jpg";
import image2 from "../assets/img/image2.jpg";
import image3 from "../assets/img/image3.jpg";
import image4 from "../assets/img/image4.jpg";
import image5 from "../assets/img/image5.jpg";
import image6 from "../assets/img/image6.jpg";
import shopify from "../assets/img/shopify.svg";

const images = [image1, image2, image3, image4, image5, image6];

const ImageSlider = () => {
  const [currentimages, setCurrentimages] = useState(images);
  const [sliderHeight, setSliderHeight] = useState("auto");

  useEffect(() => {
    // Calculate the maximum height of the slider content
    const maxCertHeight = Math.max(
      ...currentimages.map((cert) => cert.length * 10)
    ); // Adjust multiplier as needed
    setSliderHeight(maxCertHeight > 200 ? 200 : maxCertHeight); // Set maximum height to 200px or the calculated max height

    const interval = setInterval(() => {
      // Rotate the images array to the left
      const rotatedimages = [...currentimages.slice(1), currentimages[0]];
      setCurrentimages(rotatedimages);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentimages]);

  return (
    <div className="bg-white flex justify-center items-center">
      <div
        className={`max-w-[1200px] w-full p-10 flex gap-5 justify-center overflow-hidden max-h-${sliderHeight}`}>
        {currentimages.map((images, index) => (
          <div
            key={index}
            className="group transition ease-linear opacity-85 hover:opacity-100 flex flex-col justify-center items-center w-[200px] border-transparent shadow-xl border-2 hover:border-blue-800 duration-300">
            <img
              src={images}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full "
            />
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
                <h3 className="text-green-800 text-sm">
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

              <div className="">
                <h3 className="uppercase my-2 text-sm">Previously at</h3>
                <img src={shopify} alt="shopify logo" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
