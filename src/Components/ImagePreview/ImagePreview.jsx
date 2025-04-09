// import React, { useRef, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ImagePreview = ({ featuredImage, galleryImages }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [activeImage, setActiveImage] = useState("");
//   const [transitionDirection, setTransitionDirection] = useState("");
//   const sliderRef = useRef(null);
//   // Slider Setting
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
//     useTransform: true,
//     arrows: false,
//     fade: false,
//     waitForAnimate: true,
//   };

//   const activeImageFunction = (index) => {
//     setCurrentIndex(index);
//     setActiveImage(galleryImages[index]);
//   };

//   const goToPrev = () => {
//     const newIndex =
//       currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//     setActiveImage(galleryImages[newIndex]);
//     sliderRef.current.slickPrev();
//   };

//   const goToNext = () => {
//     const newIndex =
//       currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//     setActiveImage(galleryImages[newIndex]);
//     sliderRef.current.slickNext();
//   };

//   const allImages = [
//     featuredImage,
//     ...(Array.isArray(galleryImages) ? galleryImages : []),
//   ];

//   // const currentImage = currentIndex === 0 && featuredImage && galleryImages
//   //   ? `http://localhost:5000/${featuredImage}`
//   //   : `http://localhost:5000/${galleryImages[0]}`;
//   return (
//     <>
//       <div className="carousel w-[60%] max-[1200px]:w-full h-auto rounded-lg flex flex-col p-3">
//         <div className="relative w-full h-auto group">
//           {/* Arrows */}
//           <button
//             onClick={goToPrev}
//             className="hidden group-hover:block bg-white opacity-90 text-black rounded-full px-5 py-3 absolute left-5 top-1/2 transform -translate-y-1/2 z-40"
//           >
//             ❮
//           </button>

//           <div className={`relative w-full h-auto`}>
//             <div className="absolute top-0 left-0 bg-black opacity-5 z-30 w-full h-full "></div>
//             <Slider ref={sliderRef} {...settings} className="w-full">
//               {galleryImages?.map((image, index) => (
//                 <>
//                   <div key={index} className="relative w-full h-auto">
//                     <img
//                       src={`http://localhost:5000/${image}`}
//                       alt={image}
//                       className="w-full h-auto object-cover rounded-lg"
//                     />
//                   </div>
//                 </>
//               ))}
//               {/* <div className="w-full h-auto bg-gray-500">
//            <img
//                 src={
//                   currentIndex === 0
//                     ? `http://localhost:5000/${featuredImage}`
//                     : `http://localhost:5000/${activeImage}`
//                 }
//                 alt="Featured"
//                 className={`w-full h-full rounded-lg object-cover`}
//               />
//            </div> */}
//             </Slider>
//           </div>

//           <button
//             onClick={goToNext}
//             className="hidden group-hover:block bg-white opacity-90 text-black rounded-full px-5 py-3 absolute right-5 top-1/2 transform -translate-y-1/2 z-40"
//           >
//             ❯
//           </button>
//         </div>

//         {/* Thumbnails */}
//         <div className="flex flex-wrap gap-2 p-3 justify-center">
//           {galleryImages?.map((image, index) => (
//             <img
//               key={index}
//               src={`http://localhost:5000/${image}`}
//               onClick={() => activeImageFunction(index)}
//               alt={`Thumbnail ${index}`}
//               className={`w-[19%] h-[130px] rounded-lg object-cover cursor-pointer transition-opacity duration-300 ${
//                 index === currentIndex
//                   ? "border-4 border-orange-600 opacity-100"
//                   : "opacity-60 hover:opacity-100"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ImagePreview;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef } from "react";
import { NextArrow, PrevArrow } from "../CustomArrow/CustomArrow"; 
const GalleryCarousel = ({ galleryImages = [] }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const mainSettings = {
    asNavFor: nav2,
    ref: (slider) => {
      setNav1(slider);
      slider1.current = slider;
    },
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const thumbSettings = {
    asNavFor: nav1,
    ref: (slider) => {
      setNav2(slider);
      slider2.current = slider;
    },
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    dots: false,
  };

  return (
    <div className="carousel w-[60%] max-[1200px]:w-full h-fit rounded-lg flex flex-col p-3">
      {/* Main Image Slider with arrows */}
      <div className="relative w-full h-auto group">
        <Slider {...mainSettings} className="w-full">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative w-full h-auto">
              <img
                src={`http://localhost:5000/${image}`}
                alt={image}
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-4">
        <Slider {...thumbSettings}>
          {galleryImages.map((image, index) => (
            <div key={index} className="px-1">
              <img
                src={`http://localhost:5000/${image}`}
                alt={`Thumb ${index}`}
                className="w-full opacity-50 hover:opacity-100 h-[150px] object-cover rounded-lg border-2 active:border-orange-600 border-gray-300 hover:border-orange-600 transition"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GalleryCarousel;
