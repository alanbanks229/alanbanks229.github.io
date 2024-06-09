import { useTheme } from '../ThemeProvider';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MINIMAL } from '../constants';



const ThemeToggleBtn = () => {

  const {isDarkMode, toggleTheme} = useTheme();

  const SunIcon = (
    <MdOutlineLightMode
      size={34}
      color={MINIMAL.BurntOrange}
      style={{
        opacity: `${ isDarkMode ? 1 : 0}`,
        transition: 'opacity 0.5s ease',
        position: 'absolute',
      }}
    />
  )

  const MoonIcon = (
    <MdOutlineDarkMode
      size={34}
      color={MINIMAL.MacbookMidnight}
      style={{
        opacity: `${ isDarkMode ? 0 : 1}`,
        transition: 'opacity 0.5s ease',
        position: 'absolute',
      }}
    />
  )

  return (
    <>
      <button className='
        relative md:mr-1 mr-5 rounded-xl py-5 p-10 pr-10
        border border-MacbookMidnight/60 hover:border-black hover:bg-MidnightDarkBlue/10

        md:dark:border-LightGray/80 dark:hover:bg-MidnightDarkBlue
         dark:border-white/40
         transition-all duration-300
      ' onClick={toggleTheme}
      >
        <div className="absolute inset-0 flex justify-center items-center">
          {SunIcon}
          {MoonIcon}
        </div>
      </button>
    </>
  )
}

export default ThemeToggleBtn