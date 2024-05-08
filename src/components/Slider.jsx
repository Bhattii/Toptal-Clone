import { useState, useEffect } from 'react';
import image1 from '../assets/img/image1.jpg';
import image2 from '../assets/img/image2.jpg';
import image3 from '../assets/img/image3.jpg';
import image4 from '../assets/img/image4.jpg';
import image5 from '../assets/img/image5.jpg';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides] = useState([
    {
      image: image1,
      name: 'John Doe',
      company: 'ABC Company',
      introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: image2,
      name: 'Jane Smith',
      company: 'XYZ Corporation',
      introduction:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: image3,
      name: 'Alice Johnson',
      company: '123 Enterprises',
      introduction:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      image: image4,
      name: 'Alice Johnson',
      company: '123 Enterprises',
      introduction:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      image: image5,
      name: 'Alice Johnson',
      company: '123 Enterprises',
      introduction:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className=''>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`transition-opacity duration-1000 absolute lg:flex ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className='relative px:auto lg:mt-32 xl:mt-20 2xl:mt-14'>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className='mr-auto w-[400px] sm:w-[500px] md:[550px]  lg:w-[550px] xl:w-[600px] 2xl:w-[650px]'
            />
            <div className='absolute bottom-0 z-3 w-full h-24 bg-gradient-to-t from-gray-300 to-transparent'></div>
          </div>

          <div className='bg-white text-center bg-opacity-75 w-[350px] mt-7 mx-auto lg:max-h-40 lg:absolute xl:right-0 2xl:left-0'>
            <h2 className='text-lg font-semibold text-blue-600'>
              {slide.name}
            </h2>
            <p className='text-2xl text-green-500'>{slide.company}</p>
            <p className='text-sm'>{slide.introduction}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
