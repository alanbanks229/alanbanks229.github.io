
import ArizonaJPG from '../assets/Alan/Arizona.jpeg';
import Philippines from '../assets/Alan/missions_1.jpg';
import Mount_Rainier from '../assets/Alan/MtRainier.jpg';
import Singing from '../assets/Alan/singingExchange.jpg';

import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { MINIMAL } from '../constants';
import { useTheme } from '../ThemeProvider';

const slides = [
  { url: ArizonaJPG },
  { url: Philippines },
  { url: Singing },
  { url: Mount_Rainier },
];

// Code Creds to --> https://www.youtube.com/watch?v=tXlZCW26bto
const ImageCarousel = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const {isDarkMode} = useTheme();

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] md:h-[600px] h-[300px] w-full m-auto px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div
        className={`
          opacity-0 visibility-hidden
          group-hover:opacity-100
          group-hover:visibility-visible
          cursor-pointer absolute top-[50%]
          -translate-x-0 translate-y-[-50%] 
          left-5 text-2xl rounded-full p-2 
          bg-white/50 hover:bg-white/80 text-black
          transition-opacity duration-300 ease-in-out
        `}
      >
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div
        className={`
          opacity-0 visibility-hidden
          group-hover:opacity-100
          group-hover:visibility-visible
          cursor-pointer absolute top-[50%]
          -translate-x-0 translate-y-[-50%] 
          right-5 text-2xl rounded-full p-2 
          bg-white/50 hover:bg-white/80 text-black
          transition-opacity duration-300 ease-in-out
        `}
      >
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>


      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled
              size={40}
              color={
                `${slideIndex === currentIndex ?
                  (isDarkMode ?  MINIMAL.BurntOrange : MINIMAL.OceanZoneTeal) :
                  MINIMAL.DriftwoodBeige}
                `}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel