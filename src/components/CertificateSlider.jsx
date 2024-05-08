import { useState, useEffect } from 'react';

const certificates = [
  'Certificate 1',
  'Certificate 2',
  'Certificate 3',
  'Certificate 4',
  'Certificate 5',
  'Certificate 6',
  'Certificate 7',
];

const colors = [
  'bg-red-200',
  'bg-blue-200',
  'bg-green-200',
  'bg-yellow-200',
  'bg-purple-200',
  'bg-indigo-200',
  'bg-pink-200',
];

const CertificateSlider = () => {
  const [currentCertificates, setCurrentCertificates] = useState(certificates);
  const [sliderHeight, setSliderHeight] = useState('auto');

  useEffect(() => {
    // Calculate the maximum height of the slider content
    const maxCertHeight = Math.max(
      ...currentCertificates.map((cert) => cert.length * 10)
    ); // Adjust multiplier as needed
    setSliderHeight(maxCertHeight > 200 ? 200 : maxCertHeight); // Set maximum height to 200px or the calculated max height

    const interval = setInterval(() => {
      // Rotate the certificates array to the left
      const rotatedCertificates = [
        ...currentCertificates.slice(1),
        currentCertificates[0],
      ];
      setCurrentCertificates(rotatedCertificates);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentCertificates]);

  return (
    <div className=' bg-gray-200 2xl:mx-auto 2xl:w-max'>
      <div
        className={`m-[5%] overflow-hidden px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center max-h-${sliderHeight}`}
      >
        <p className='min-w-[220px] opacity-70 uppercase mb-4 lg:mb-0'>
          TRUSTED BY LEADING BRANDS AND STARTUPS
        </p>
        <div className='flex flex-grow gap-2 lg:h-auto  items-center justify-center lg:ml-4 lg:flex-nowrap xl:flex-nowrap 2xl-flex-nowrap'>
          {currentCertificates.map((certificate, index) => (
            <div
              key={index}
              className={`w-full sm:w-auto h-auto p-4 flex items-center justify-center border-2 ${colors[index]} mb-4 lg:mb-0`}
            >
              {certificate}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateSlider;
