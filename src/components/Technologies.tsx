import { RiReactjsLine } from "react-icons/ri"

import { GrGraphQl } from "react-icons/gr";
import { SiVuedotjs } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";
import { FaGolang } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";
import { SiJira } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";

import { Variants, motion } from "framer-motion"
import html_css from "../assets/html_css.png";
import cesium_minified from "../assets/cesium_minified.png";
import python_logo from "../assets/Py_logo_snakes.png";
import java_logo from "../assets/java-logo.png";
import { SectionIDs } from "../constants";


function createDurationArray(start: number, end: number, increment: number): number[] {
    const array = [];
    for (let value = start; value <= end; value += increment) {
        const val = parseInt(value.toFixed(2)); // Ensuring two decimal places
        array.push(val);
    }
    return array;
}

function getRandomDuration(): number {
    // Specify time in seconds (start, end, increment);
    const array = createDurationArray(2, 3.5, 0.25);
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function randomBool(): boolean {
    return Math.random() < 0.5; // 50, 50 true or false
}

const generateVariants = (): Variants => ({
    INITIAL_STATE: randomBool() ? {y: -4} : {y: 4},
    ANIMATION: {
        y: randomBool() ? [-4, 4] : [4, -4],
        rotate: randomBool() ? [-3, 3] : [3, -3],
        transition: {
            duration: getRandomDuration(),
            ease: "linear",
            repeat: Infinity,
            repeatType: 'mirror',
        }
    }
})

const Technologies = () => {
    return (
        <div id={SectionIDs.TECH} className="border-b border-neutral-800">
            <div className="flex flex-col pb-24 items-center">

                <motion.h1
                    whileInView={{ opacity: 1, y: 0}}
                    initial={{ opacity: 0, y: -100}}
                    transition={{duration: 1.5}}
                    className="my-20 text-center text-4xl"
                >
                    Technologies
                </motion.h1>

                {/* Web Technologies */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: -100}}
                    transition={{duration: 1.5}}
                    className="flex flex-wrap lg:justify-center items-center w-10/12 pb-4 mb-4"
                    style={{
                        borderBottom: `1px solid rgba(237,237,237,0.05)`,
                    }}
                >
                    <div className="w-full lg:w-1/4">
                        <h1 className="text-left text-2xl text-MacbookMidnight dark:text-LightGray/90 font-medium">Web:</h1>
                    </div>
                    <div className="w-full lg:w-3/4 flex flex-wrap items-center justify-start gap-2">
                        <motion.div
                            variants={generateVariants()}
                            initial="INITIAL_STATE"
                            animate="ANIMATION"
                            className="
                                flex flex-col items-center rounded-3xl p-3 min-w-28 border shadow
                                border-DriftwoodBeige shadow-DriftwoodBeige bg-white
                                dark:bg-LightGray dark:border-LightGray dark:shadow-md
                            ">
                            <RiReactjsLine size={'0.8em'} className="text-7xl text-cyan-400" />
                            <span className="text-sm font-semibold text-MidnightDarkBlue">React / Redux</span>
                        </motion.div>
                        <motion.div
                            variants={generateVariants()}
                            initial="initial"
                            animate="ANIMATION"
                            className="
                                flex flex-col items-center rounded-3xl p-3 min-w-28 border shadow
                                border-DriftwoodBeige shadow-DriftwoodBeige bg-white
                                dark:bg-LightGray dark:border-LightGray dark:shadow-md
                            ">
                            <SiVuedotjs size={'0.8em'} className="text-7xl text-green-500" />
                            <span className="text-sm font-semibold text-MidnightDarkBlue">Vue / Nuxt</span>
                        </motion.div>
                        <motion.div
                            variants={generateVariants()}
                            initial="initial"
                            animate="ANIMATION"
                            className="
                                flex flex-col items-center rounded-3xl p-3 min-w-28 border shadow
                                border-DriftwoodBeige shadow-DriftwoodBeige bg-white
                                dark:bg-LightGray dark:border-LightGray dark:shadow-md
                            ">
                            <BiLogoTailwindCss size={'0.8em'} className="text-7xl text-cyan-400" />
                            <span className="text-sm font-semibold text-MidnightDarkBlue">Tailwind</span>
                        </motion.div>
                        <motion.div
                            variants={generateVariants()}
                            initial="initial"
                            animate="ANIMATION"
                            className="
                                flex flex-col items-center rounded-3xl p-3 min-w-28 border shadow
                                border-DriftwoodBeige shadow-DriftwoodBeige bg-white
                                dark:bg-LightGray dark:border-LightGray dark:shadow-md
                            ">
                            <GrGraphQl size={'0.8em'} className="text-7xl text-pink-500" />
                            <span className="text-sm font-semibold text-MidnightDarkBlue">GraphQL</span>
                        </motion.div>
                        <motion.div
                            variants={generateVariants()}
                            initial="initial"
                            animate="ANIMATION"
                            className="
                                flex flex-col items-center rounded-3xl p-3 min-w-28 border shadow
                                border-DriftwoodBeige shadow-DriftwoodBeige bg-white
                                dark:bg-LightGray dark:border-LightGray dark:shadow-md
                            ">
                            <img src={cesium_minified} style={{ maxHeight: '57.59px' }} />
                            <span className="text-sm font-semibold text-MidnightDarkBlue">CesiumJS</span>
                        </motion.div>
                        <motion.div
                            variants={generateVariants()}
                            initial="initial"
                            animate="ANIMATION"
                            className="
                                flex flex-col items-center rounded-3xl p-3 min-w-28 border shadow
                                border-DriftwoodBeige shadow-DriftwoodBeige bg-white
                                dark:bg-LightGray dark:border-LightGray dark:shadow-md
                            ">
                            <FaNodeJs size={'0.8em'} className="text-7xl text-green-700" />
                            <span className="text-sm font-semibold text-MidnightDarkBlue">Node JS</span>
                        </motion.div>
                        <motion.div
                            variants={generateVariants()}
                            initial="initial"
                            animate="ANIMATION"
                            className="
                                flex flex-col items-center rounded-3xl p-3 min-w-28 border shadow
                                border-DriftwoodBeige shadow-DriftwoodBeige bg-white
                                dark:bg-LightGray dark:border-LightGray dark:shadow-md
                            ">
                            <img src={html_css} style={{ maxHeight: '57.59px' }} />
                            <span className="text-sm font-semibold text-MidnightDarkBlue">HTML5 / CSS3</span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Languages: */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: -100}}
                    transition={{duration: 1.5}}
                    className="flex flex-wrap lg:justify-center items-center w-10/12 pb-4 mb-4"
                    style={{
                        borderBottom: `1px solid rgba(237,237,237,0.05)`,
                    }}
                >
                    <div className="w-full lg:w-1/4">
                        <h1 className="text-left text-2xl text-MacbookMidnight dark:text-LightGray/90 font-medium">Languages:</h1>
                    </div>
                    <div className="w-full lg:w-3/4 flex flex-wrap items-center justify-start gap-2">
                        <motion.div
                            variants={generateVariants()}
                            initial="initial"
                            animate="ANIMATION"
                            className="
                                flex flex-col items-center rounded-3xl p-3 min-w-28 border shadow
                                border-DriftwoodBeige shadow-DriftwoodBeige bg-white
                                dark:bg-LightGray dark:border-LightGray dark:shadow-md
                            ">
                            <FaGolang size={'0.8em'} className="text-7xl text-cyan-500" />
                            <span className="text-sm font-semibold text-MidnightDarkBlue">Go (Golang)</span>
                        </motion.div>
                        <motion.div
                            variants={generateVariants()}
                            initial="initial"
                            animate="ANIMATION"
                            className="
                                flex flex-col items-center rounded-3xl p-3 min-w-28 border shadow
                                border-DriftwoodBeige shadow-DriftwoodBeige bg-white
                                dark:bg-LightGray dark:border-LightGray dark:shadow-md
                            ">
                            <BiLogoTypescript size={'0.8em'} className="text-7xl text-blue-700" />
                            <span className="text-sm font-semibold text-MidnightDarkBlue">Typescript</span>
                        </motion.div>
                        <motion.div
                            variants={generateVariants()}
                            initial="initial"
                            animate="ANIMATION"
                            className="
                                flex flex-col items-center rounded-3xl p-3 min-w-28 border shadow
                                border-DriftwoodBeige shadow-DriftwoodBeige bg-white
                                dark:bg-LightGray dark:border-LightGray dark:shadow-md
                            ">
                            <img src={python_logo} style={{ maxHeight: '57.59px' }} />
                            <span className="text-sm font-semibold text-MidnightDarkBlue">Python</span>
                        </motion.div>
                        <motion.div
                            variants={generateVariants()}
                            initial="initial"
                            animate="ANIMATION"
                            className="
                                flex flex-col items-center rounded-3xl p-3 min-w-28 border shadow
                                border-DriftwoodBeige shadow-DriftwoodBeige bg-white
                                dark:bg-LightGray dark:border-LightGray dark:shadow-md
                            ">
                            <img src={java_logo} style={{ maxHeight: '57.59px' }} />
                            <span className="text-sm font-semibold text-MidnightDarkBlue">Java</span>
                        </motion.div>
                        <motion.div
                            variants={generateVariants()}
                            initial="initial"
                            animate="ANIMATION"
                            className="
                                flex flex-col items-center rounded-3xl p-3 min-w-28 border shadow
                                border-DriftwoodBeige shadow-DriftwoodBeige bg-white
                                dark:bg-LightGray dark:border-LightGray dark:shadow-md
                            ">
                            <BiLogoJavascript size={'0.8em'} className="text-7xl text-yellow-300" />
                            <span className="text-sm font-semibold text-MidnightDarkBlue">Javascript</span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Databases */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: -100}}
                    transition={{duration: 1.5}}
                    className="flex flex-wrap lg:justify-center items-center w-10/12 pb-4 mb-4"
                    style={{
                        borderBottom: `1px solid rgba(237,237,237,0.05)`,
                    }}
                >
                    <div className="w-full lg:w-1/4">
                        <h1 className="text-left text-2xl text-MacbookMidnight dark:text-LightGray/90 font-medium">Databases:</h1>
                    </div>
                    <div className="w-full lg:w-3/4 flex flex-wrap items-center justify-start gap-2">
                        <motion.div
                            variants={generateVariants()}
                            initial="initial"
                            animate="ANIMATION"
                            className="
                                flex flex-col items-center rounded-3xl p-3 min-w-28 border shadow
                                border-DriftwoodBeige shadow-DriftwoodBeige bg-white
                                dark:bg-LightGray dark:border-LightGray dark:shadow-md
                            ">
                            <BiLogoPostgresql size={'0.8em'} className="text-7xl text-sky-800" />
                            <span className="text-sm font-semibold text-MidnightDarkBlue">PostgreSQL</span>
                        </motion.div>
                        <motion.div
                            variants={generateVariants()}
                            initial="initial"
                            animate="ANIMATION"
                            className="
                                flex flex-col items-center rounded-3xl p-3 min-w-28 border shadow
                                border-DriftwoodBeige shadow-DriftwoodBeige bg-white
                                dark:bg-LightGray dark:border-LightGray dark:shadow-md
                            ">
                            <GrMysql size={'0.8em'} className="text-7xl text-cyan-400" />
                            {/* <GrMysql size={'0.8em'} className="text-7xl text-cyan-950"/> */}
                            <span className="text-sm font-semibold text-MidnightDarkBlue">MySQL</span>
                        </motion.div>
                        <motion.div
                            variants={generateVariants()}
                            initial="initial"
                            animate="ANIMATION"
                            className="
                                flex flex-col items-center rounded-3xl p-3 min-w-28 border shadow
                                border-DriftwoodBeige shadow-DriftwoodBeige bg-white
                                dark:bg-LightGray dark:border-LightGray dark:shadow-md
                            ">
                            <DiRedis size={'0.8em'} className="text-7xl text-red-700" />
                            <span className="text-sm font-semibold text-MidnightDarkBlue">Redis</span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Other: */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: -100}}
                    transition={{duration: 1.5}}
                    className="flex flex-wrap lg:justify-center items-center w-10/12 pb-4 mb-4"
                    style={{
                        borderBottom: `1px solid rgba(237,237,237,0.05)`,
                    }}
                >
                    <div className="w-full lg:w-1/4">
                        <h1 className="text-left text-2xl text-MacbookMidnight dark:text-LightGray/90 font-medium">Other:</h1>
                    </div>
                    <div className="w-full lg:w-3/4 flex flex-wrap items-center justify-start gap-2">
                        <motion.div
                            variants={generateVariants()}
                            initial="initial"
                            animate="ANIMATION"
                            className="
                                flex flex-col items-center rounded-3xl p-3 min-w-28 border shadow
                                border-DriftwoodBeige shadow-DriftwoodBeige bg-white
                                dark:bg-LightGray dark:border-LightGray dark:shadow-md
                            ">
                            <FaDocker size={'0.8em'} className="text-7xl text-blue-600" />
                            <span className="text-sm font-semibold text-MidnightDarkBlue">Docker</span>
                        </motion.div>
                        <motion.div
                            variants={generateVariants()}
                            initial="initial"
                            animate="ANIMATION"
                            className="
                                flex flex-col items-center rounded-3xl p-3 min-w-28 border shadow
                                border-DriftwoodBeige shadow-DriftwoodBeige bg-white
                                dark:bg-LightGray dark:border-LightGray dark:shadow-md
                            ">
                            <FaGitAlt size={'0.8em'} className="text-7xl text-red-600" />
                            <span className="text-sm font-semibold text-MidnightDarkBlue">GIT</span>
                        </motion.div>
                        <motion.div
                            variants={generateVariants()}
                            initial="initial"
                            animate="ANIMATION"
                            className="
                                flex flex-col items-center rounded-3xl p-3 min-w-28 border shadow
                                border-DriftwoodBeige shadow-DriftwoodBeige bg-white
                                dark:bg-LightGray dark:border-LightGray dark:shadow-md
                            ">
                            <FcLinux size={'0.8em'} className="text-7xl" />
                            <span className="text-sm font-semibold text-MidnightDarkBlue">Linux / Bash</span>
                        </motion.div>
                        <motion.div
                            variants={generateVariants()}
                            initial="initial"
                            animate="ANIMATION"
                            className="
                                flex flex-col items-center rounded-3xl p-3 min-w-28 border shadow
                                border-DriftwoodBeige shadow-DriftwoodBeige bg-white
                                dark:bg-LightGray dark:border-LightGray dark:shadow-md
                            ">
                            <SiJira size={'0.8em'} className="text-7xl text-blue-700" />
                            <span className="text-sm font-semibold text-MidnightDarkBlue">Jira</span>
                        </motion.div>
                    </div>
                </motion.div>


            </div>
        </div>
    )
}

export default Technologies
