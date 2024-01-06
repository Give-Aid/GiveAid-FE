import Image from "next/image";
import { useState } from "react";

const ImageSlider = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const images = [
    "/images/charity.png",
    "/images/checklist.png",
    "/images/dollar.png",
    "/images/education.png",
    "/images/iftar.png",
    "/images/love.png",
    "/images/moslem.png",
  ];

  return (
    <div className="w-full md:w-[65%] mx-auto">
      {/* Main Image */}
      <img
        src={images[selectedImageIndex]}
        alt="Main"
        className="w-full h-[500px] object-contain bg-black rounded"
      />

      {/* Small Images at the bottom */}
      <div className="flex flex-wrap mt-4 p-4 rounded gap ">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`w-[100px] h-16 m-1 border-2 hover:border-blue-500 ${
              index === selectedImageIndex ? "border-blue-500" : ""
            } cursor-pointer relative`}
            onClick={() => handleImageClick(index)}
          >
            <Image src={imageUrl} alt={`Thumbnail ${index}`} layout="fill"
              objectFit="contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
