import { useTheme } from "../ThemeProvider"
import { MINIMAL } from "../constants"
// https://www.geeksforgeeks.org/how-to-use-radial-gradient-in-tailwind-css/
// Not really using this... but helpful nonetheless
const BackdropBG = () => {
  const { isDarkMode } = useTheme();

  const darkModeBackground = (
    <div
      className="absolute top-0 z-[-2] h-screen w-screen"
      style={{
        background: `radial-gradient(ellipse 70% 76% at 50% -20%, ${MINIMAL.MidnightDarkBlue}, ${MINIMAL.ObsidianBlue})`,
        opacity: `${isDarkMode ? 1 : 0}`,
        transition: 'opacity 0.5s ease',
      }}
    />
  );

  const LightModeBackground = (
    <div
      className="absolute top-0 z-[-2] h-screen w-screen"
      style={{
        background: `radial-gradient(ellipse 70% 76% at 50% -20%, rgba(214, 196, 176, 0.8), ${MINIMAL.LightGray})`,
        opacity: `${isDarkMode ? 0 : 1}`,
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