import React from 'react';
import { Carousel } from 'flowbite-react';
import '../index.css'; 

import image1 from "../Images/Carousel1.png"
import image2 from "../Images/Carousel2.jpg";
import image3 from "../Images/Carousel3.jpg"; 
import image4 from "../Images/Carousel4.png";

export function CarouselHome() {
  return (
    <div className="relative w-full max-w-screen-lg mx-auto overflow-hidden">
      <Carousel
        indicators={true}
        controls={true}
        className="w-full h-[calc(100vh-3rem)]" 
      >
        <div className="w-full h-full flex items-center justify-center">
          <img src={image1} alt="Slide 1" className="object-cover w-full h-full" />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <img src={image2} alt="Slide 2" className="object-cover w-full h-full" />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <img src={image3} alt="Slide 3" className="object-cover w-full h-full" />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <img src={image4} alt="Slide 4" className="object-cover w-full h-full" />
        </div>
      </Carousel>
    </div>
  );
}
