import { useEffect, useState } from 'react';
import { throttle } from '../helpers';

interface LogoProps {
  imgSrc: string,
  onClick: () => void,
}


const PorfolioLogo = (props: LogoProps) => {
  const { imgSrc, onClick } = props;
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleLogoScroll = throttle(() => {
      const scrollY = window.scrollY;
      const targetPosition = 240; // Adjust this value based on when you want the element to be fully opaque
      const maxOpacity = 1; // Maximum opacity value
      const newOpacity = Math.min(maxOpacity, scrollY / targetPosition);
      setOpacity(newOpacity);
    }, 10); // Throttle time in milliseconds

    window.addEventListener('scroll', handleLogoScroll);

    return () => {
      window.removeEventListener('scroll', handleLogoScroll);
    };
  }, []);

  return (
    <div
      className={`
        ${scrollY > 240 ? 'cursor-pointer' : ''}
        flex items-center space-x-3 rtl:space-x-reverse
        md:ml-8 md:mt-0
        ml-2
      `}
      style={{ opacity, transition: 'opacity 0.5s' }}
      onClick={onClick}
    >
      <img src={imgSrc} className="h-8 rounded-full" alt="Name Logo" style={{ maxHeight: '32px' }} />
      <span className="
        self-center text-2xl font-semibold whitespace-nowrap
         dark:text-LightGray dark:hover:text-SunsetOrange
        text-MidnightDarkBlue hover:text-white
        transition-all duration-300
      ">Alan Banks</span>
    </div>
  );
};

export default PorfolioLogo;
