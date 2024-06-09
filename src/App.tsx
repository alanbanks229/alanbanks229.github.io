import Navbar from './components/Navbar'
import BackdropBG from './components/BackdropBG'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import { useTheme } from './ThemeProvider'


const App = () => {

  const {isDarkMode} = useTheme();

  return (
      <div
        className={`
          overflow-x-hidden antialiased scroll-smooth
          ${isDarkMode && "dark"} dark:text-LightGray
          text-MidnightDarkBlue
        `}
      >

        <div className="fixed top-0 -z-10 h-full w-full">
          <BackdropBG />
        </div>

        <div className="container mx-auto px-8">
          <Navbar/>
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
        </div>
      </div>
  )
}

export default App