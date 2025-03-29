import { SectionIDs } from '../constants';
import { IoMdDownload } from "react-icons/io";
import profilePic from "../assets/Alan/AlanBanksPortrait.png";
import AlanResume from "../assets/Alan/AlanBanks_Resume_2025.pdf";
import { motion } from "framer-motion"

const AnimationVariants = (startXPos: number, delaySeconds: number, ) => ({
    HIDDEN_STATE: {x: startXPos, opacity: 0},
    VISIBLE_STATE: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delaySeconds
        }
    }
})

const Hero = () => {
  return (
    <div id={SectionIDs.HOME} className="border-b border-neutral-900 pb-6 md:mt-12 mt-24">
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 md:pl-16">
                <div className="flex flex-col items-center md:items-center md:mr-10">
                    <motion.h1
                        variants={AnimationVariants(-100, 0.1)}
                        initial="HIDDEN_STATE"
                        animate="VISIBLE_STATE"
                        className="md:pb-16 pb-8 text-6xl font-thin tracking-tight md:mt-24 md:text-8xl text-center"
                    >
                        Alan Banks
                    </motion.h1>
                    <motion.span
                        variants={AnimationVariants(-100, 0.5)}
                        initial="HIDDEN_STATE"
                        animate="VISIBLE_STATE"
                        className="
                            bg-gradient-to-r from-SunsetOrange to-BurntOrange dark:from-LightGray/70 dark:to-DriftwoodBeige/90
                            bg-clip-text text-5xl tracking-tight text-transparent
                            font-light mt-4 md:mb-20 mb-10 text-center
                        "
                    >
                        Full Stack Developer
                    </motion.span>
                    <motion.div
                        variants={AnimationVariants(-100, 1)}
                        initial="HIDDEN_STATE"
                        animate="VISIBLE_STATE"
                        className='flex flex-row  items-center md:mb-0 mb-8'
                    >
                        <span className='text-2xl'>Resume:</span>
                        <button
                            className="
                            bg-white
                            text-MacbookMidnight
                            hover:bg-SunsetOrange/80
                            hover:text-white
                                font-bold
                                ml-2
                                p-2
                                border 
                                rounded inline-flex items-center
                                transition-colors
                                duration-500
                            "
                        >
                            {/* <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                            */}
                            <IoMdDownload size={26}/>
                            <a href={AlanResume} className="text-md" download>Download PDF</a>
                        </button>
                    </motion.div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                        variants={AnimationVariants(100, 1.1)}
                        initial="HIDDEN_STATE"
                        animate="VISIBLE_STATE"
                        className="lg:mt-14"
                        style={{borderRadius: '3.0rem'}}
                        src={profilePic}
                        alt="Alan Banks Profile Pic"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero