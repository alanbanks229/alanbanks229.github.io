import { useTheme } from "../ThemeProvider"
import { MINIMAL } from "../constants"
// https://www.geeksforgeeks.org/how-to-use-radial-gradient-in-tailwind-css/
// Not really using this... but helpful nonetheless
const BackdropBG = () => {
  const {isDarkMode} = useTheme();

  // const PitchDarkTealOpac = "rgba(9, 64, 68, 0.9)"; // #094044
  // const MidnightDarkBlueOpac = "rgba(9, 29, 38, 1)"; // #091d26  

  const BrighterPitchDarkTealOpac = "rgba(11, 78, 82, 1)"; // #0b4e52
const BrighterMidnightDarkBlueOpac = "rgba(13, 42, 54, 1)"; // #0b242f

  const darkModeBackground = (
      <div
        className="absolute top-0 z-[-2] h-screen w-screen"
        style={{
          background: `radial-gradient(ellipse 70% 76% at 50% -20%, ${BrighterPitchDarkTealOpac}, ${BrighterMidnightDarkBlueOpac})`,
          opacity: `${ isDarkMode ? 1 : 0}`,
          transition: 'opacity 0.5s ease',
        }}
      />
  );

  const LightModeBackground = (
    <div
      className="absolute top-0 z-[-2] h-screen w-screen"
      style={{
        background: `radial-gradient(ellipse 70% 76% at 50% -20%, rgba(214, 196, 176, 0.8), ${MINIMAL.LightGray})`,
        opacity: `${ isDarkMode ? 0 : 1}`,
        transition: 'opacity 0.5s ease',
      }}
    />
);

  return (
    <>
      {darkModeBackground}
      {LightModeBackground}
    </>
  )
}

export default BackdropBG