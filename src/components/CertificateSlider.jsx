import { useState, useEffect } from "react";

const certificates = [
  "Certificate 1",
  "Certificate 2",
  "Certificate 3",
  "Certificate 4",
  "Certificate 5",
  "Certificate 6",
  "Certificate 7",
];

const colors = [
  "bg-red-200",
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-purple-200",
  "bg-indigo-200",
  "bg-pink-200",
];

const CertificateSlider = () => {
  const [currentCertificates, setCurrentCertificates] = useState(certificates);
  const [sliderHeight, setSliderHeight] = useState("auto");

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
    <div className=" bg-gray-200  flex justify-center items-center">
      <div
        className={`my-10 flex flex-col justify-around items-center flex-wrap max-h-${sliderHeight}`}>
        <p className="text-center p-5">
          TRUSTED BY LEADING BRANDS AND STARTUPS
        </p>
        <div className="flex shadow flex-grow gap-2 flex-wrap justify-center items-center">
          {currentCertificates.map((certificate, index) => (
            <div key={index} className={`p-5 ${colors[index]}`}>
              {certificate}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateSlider;
