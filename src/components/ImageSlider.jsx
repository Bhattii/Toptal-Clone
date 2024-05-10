import { useState, useEffect } from 'react';
import image1 from '../assets/img/image1.jpg';
import image2 from '../assets/img/image2.jpg';
import image3 from '../assets/img/image3.jpg';
import image4 from '../assets/img/image4.jpg';
import image5 from '../assets/img/image5.jpg';
import image6 from '../assets/img/image6.jpg';


const images = [image1, image2, image3, image4, image5, image6];

const ImageSlider = () => {
  const [currentimages, setCurrentimages] = useState(images);
  const [sliderHeight, setSliderHeight] = useState('auto');

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
    <div className='bg-white '>
      <div
        className={`flex justify-center px-5  gap-2 py-2 flex-wrap max-h-${sliderHeight}`}
      >
          {currentimages.map((images, index) => (
            <div key={index} className='border-transparent border-2 hover:border-blue-800 transition duration-300'>
              <img src={images} alt={`Image ${index + 1}`}  className='w-[400px] h-[370px] lg:w-[250px] lg:h-[200px] xl:w-[200px] xl:h-[170px] 2xl:w-[200px] 2xl:h-[170px]' />
              <h3 className='text-center font-bold'>Intoduction</h3>
              <p className='text-center'>Lorem ipsum dolor sit </p>
            </div>
          ))}
       
      </div>
    </div>
  );
};

export default ImageSlider;
