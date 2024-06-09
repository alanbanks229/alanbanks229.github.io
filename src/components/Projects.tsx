import { FaGithub } from "react-icons/fa";
import { useLayoutEffect, useState } from "react";
import { MINIMAL, SectionIDs } from "../constants";
import vite_tailwind_portfolio from '../assets/projects/Vite-Tailwind-Portfolio.png';
import ASKIT from '../assets/projects/Askit_App.png';
import { throttle } from "../helpers";
import { motion } from "framer-motion";

const getViewPortHeight = (): number => {
    return document.documentElement.clientHeight;
}

const Projects = () => {
    const [paddingBottom, setPaddingBottom] = useState(0);

    // Function responsible for updating padding bottom based on current screen height.
    const updatePaddingBottom = () => {
        const ProjectsDivHeight = document.getElementById(SectionIDs.PROJECTS)?.clientHeight;
        const NavbarHeight = document.getElementById('Navbar')?.clientHeight;
        const viewportHeight = getViewPortHeight();

        if (typeof ProjectsDivHeight === 'number' && typeof NavbarHeight === 'number') {
            const pBottom = viewportHeight - (ProjectsDivHeight + NavbarHeight);
            setPaddingBottom(pBottom);
        }
    };

    // Use layout effect to handle component mounting and resizing
    useLayoutEffect(() => {
        updatePaddingBottom();

        const handleResize = throttle(() => {
            updatePaddingBottom(); // Update on resize
        }, 25);

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            id={SectionIDs.PROJECTS}
            className="border-b border-neutral-900"
            style={{
                paddingBottom: `${paddingBottom}px`,
            }}
        >
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -75 }}
                transition={{ duration: 1.25 }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h1>

            {/* The overall projects container */}
            <div className="flex flex-col">

                {/* PORTFOLIOOOOOOOOOOOOOOO*/}
                <div className="mb-8 flex md:flex-row flex-wrap">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -75 }}
                        transition={{ duration: 1.25 }}
                        className="md:ml-auto md:w-3/6 w-full"
                    >

                            <img
                                alt="Portfolio Project"
                                className="w-full h-[460px] rounded-xl border-l border-y border-MidnightDarkBlue md:block hidden"
                                src={vite_tailwind_portfolio}
                            />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 75 }}
                        transition={{ duration: 1.25 }}
                        className="md:w-2/6 bg-white rounded-xl border-l-2 border-r border-y border-MidnightDarkBlue p-5 md:mr-auto"
                    >
                        <h3 className="mb-2 text-2xl font-semibold text-OceanZoneTeal text-center">My Personal Portfolio :)</h3>
                        <div className="flex flex-row mt-6 justify-center text-center align-middle">
                            <FaGithub size={30} color={MINIMAL.MacbookMidnight}/><p className="ml-2 text-xl dark:text-MidnightDarkBlue">Github:</p>
                            <a rel="noopener noreferrer" target="_blank"
                                className="
                                    pt-[2px]
                                    font-medium
                                    text-BurntOrange
                                    duration-500 ml-2
                                    sticky block group
                                "
                                href="https://github.com/alanbanks229/current_trends_app_frontend"
                            >
                                Source Code
                                <span
                                    className="
                                        absolute left-0 bottom-0 w-full h-0.5 bg-SunsetOrange
                                        transform scale-x-0 group-hover:scale-x-100
                                        transition-transform duration-500
                                    "
                                />
                            </a>
                        </div>
                        <p className="w-5/6 mt-14 mb-8 text-OceanZoneTeal">
                            My Website portfolio built from the ground up showcasing my Projects, Skills and Experience!
                        </p>
                        <span>Built with:</span>
                        <ul className="list-disc ml-8 mb-5 text-OceanZoneTeal">
                            <li>Typescript</li>
                            <li>React</li>
                            <li>Tailwind</li>
                            <li>Vite</li>
                        </ul>
                        <p className="font-extralight mt-1 ml-1 dark:text-MacbookMidnight">Last Updated: June 1, 2024</p>
                    </motion.div>
                </div>

                {/* CURRENT TRENDSSSSSSSSSSSSSSSS */}
                <div className="mb-8 flex md:flex-row flex-wrap">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -75 }}
                        transition={{ duration: 1.25 }}
                        className="md:ml-auto md:w-3/6 w-full"
                    >

                            <iframe
                                title="Current Trends Youtube"
                                className="w-full h-[460px] rounded-xl border-2 border-MidnightDarkBlue md:block hidden"
                                src="https://www.youtube.com/embed/N-hRG1RldIY?rel=0&modestbranding=1&iv_load_policy=3"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen">
                            </iframe>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 75 }}
                        transition={{ duration: 1.25 }}
                        className="md:w-2/6 bg-white rounded-xl border-2 border-MidnightDarkBlue p-5 md:mr-auto"
                    >
                        <h3 className="mb-2 text-2xl font-semibold text-OceanZoneTeal text-center">Current Trends</h3>
                        <div className="flex flex-row mt-6 justify-center text-center align-middle">
                            <FaGithub size={30} color={MINIMAL.MacbookMidnight}/><p className="ml-2 text-xl dark:text-MidnightDarkBlue">Github:</p>
                            <a rel="noopener noreferrer" target="_blank"
                                className="
                                    pt-[2px]
                                    font-medium
                                    text-BurntOrange
                                    duration-500 ml-2
                                    sticky block group
                                "
                                href="https://github.com/alanbanks229/current_trends_app_frontend"
                            >
                                Front-End
                                <span
                                    className="
                                        absolute left-0 bottom-0 w-full h-0.5 bg-SunsetOrange
                                        transform scale-x-0 group-hover:scale-x-100
                                        transition-transform duration-500
                                    "
                                />
                            </a>
                            <span className="ml-2 dark:text-MacbookMidnight">|</span>
                            <a rel="noopener noreferrer" target="_blank"
                                className="
                                    pt-[2px]
                                    font-medium
                                    text-BurntOrange
                                    duration-500 ml-2
                                    sticky block group
                                "
                                href="https://github.com/alanbanks229/current_trends_app_backend"
                            >
                                Back-End
                                <span
                                    className="
                                        absolute left-0 bottom-0 w-full h-0.5 bg-SunsetOrange
                                        transform scale-x-0 group-hover:scale-x-100
                                        transition-transform duration-500
                                    "
                                />
                            </a>
                        </div>
                        <p className="w-5/6 mt-14 mb-8 text-OceanZoneTeal">A Search Engine powered by <b>Bing</b> and <b>NEWSAPI</b>. Enables users to query for a wide variety of news around the world.</p>
                        <ul className="list-disc ml-8 mb-8 text-OceanZoneTeal">
                            <li className="">Filter news by categories and languages.</li>
                            <li>Utilizes Geolocation to obtain local news.</li>
                            <li>Get your local 5-day weather forecast.</li>
                        </ul>
                        <p className="font-extralight mt-1 ml-1 dark:text-MacbookMidnight">Last Updated: 4 years ago</p>
                    </motion.div>
                </div>

                {/* DRAW OFFFFFFFFFFFFFFFFFFFFFFFFFFFF */}
                <div className="mb-8 flex md:flex-row flex-wrap">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -75 }}
                        transition={{ duration: 1.25 }}
                        className="md:ml-auto md:w-3/6 w-full"
                    >

                            <iframe
                                title="Current Trends Youtube"
                                className="w-full h-[460px] rounded-xl border-2 border-MidnightDarkBlue md:block hidden"
                                src="https://www.youtube.com/embed/4vn4oCgs-wc?rel=0&modestbranding=1&iv_load_policy=3"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen">
                            </iframe>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 75 }}
                        transition={{ duration: 1.25 }}
                        className="md:w-2/6 bg-white rounded-xl border-2 border-MidnightDarkBlue p-5 md:mr-auto"
                    >
                        <h3 className="mb-2 text-2xl font-semibold text-OceanZoneTeal text-center">Draw Off</h3>
                        <div className="flex flex-row mt-6 justify-center text-center align-middle">
                            <FaGithub size={30} color={MINIMAL.MacbookMidnight}/><p className="ml-2 text-xl dark:text-MidnightDarkBlue">Github:</p>
                            <a rel="noopener noreferrer" target="_blank"
                                className="
                                    pt-[2px]
                                    font-medium
                                    text-BurntOrange
                                    duration-500 ml-2
                                    sticky block group
                                "
                                href="https://github.com/IdleScV/mod4_frontend"
                            >
                                Front-End
                                <span
                                    className="
                                        absolute left-0 bottom-0 w-full h-0.5 bg-SunsetOrange
                                        transform scale-x-0 group-hover:scale-x-100
                                        transition-transform duration-500
                                    "
                                />
                            </a>
                            <span className="ml-2 dark:text-MacbookMidnight">|</span>
                            <a rel="noopener noreferrer" target="_blank"
                                className="
                                    pt-[2px]
                                    font-medium
                                    text-BurntOrange
                                    duration-500 ml-2
                                    sticky block group
                                "
                                href="https://github.com/alanbanks229/mod4_backend"
                            >
                                Back-End
                                <span
                                    className="
                                        absolute left-0 bottom-0 w-full h-0.5 bg-SunsetOrange
                                        transform scale-x-0 group-hover:scale-x-100
                                        transition-transform duration-500
                                    "
                                />
                            </a>
                        </div>
                        <p className="w-5/6 mt-14 mb-8 text-OceanZoneTeal">An online <b>multiplayer game</b> where users are given a prompt to draw and the winner has the most likes.</p>
                        <ul className="list-disc ml-8 mb-8 text-OceanZoneTeal">
                            <li>Multiple game lobbies!</li>
                            <li>Play to get the highest rating!</li>
                        </ul>
                        <p className="font-extralight mt-1 ml-1 dark:text-MacbookMidnight">Last Updated: 4 years ago</p>
                    </motion.div>
                </div>

                {/* ASKIT FORUMMMMMMMMMMMM */}
                <div className="mb-8 flex md:flex-row flex-wrap">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -75 }}
                        transition={{ duration: 1.25 }}
                        className="md:ml-auto md:w-3/6 w-full"
                    >

                            <img
                                alt="Portfolio Project"
                                className="w-full h-[460px] rounded-xl border-l border-y border-MidnightDarkBlue md:block hidden"
                                src={ASKIT}
                            />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 75 }}
                        transition={{ duration: 1.25 }}
                        className="md:w-2/6 bg-white dark:bg-LightGray rounded-xl border-l-2 border-r border-y border-MidnightDarkBlue p-5 md:mr-auto"
                    >
                        <h3 className="mb-2 text-2xl font-semibold text-OceanZoneTeal text-center">Askit (Forum)</h3>
                        <div className="flex flex-row mt-6 justify-center text-center align-middle">
                            <FaGithub size={30} color={MINIMAL.MacbookMidnight}/><p className="ml-2 text-xl dark:text-MidnightDarkBlue">Github:</p>
                            <a rel="noopener noreferrer" target="_blank"
                                className="
                                    pt-[2px]
                                    font-medium
                                    text-BurntOrange
                                    duration-500 ml-2
                                    sticky block group
                                "
                                href="https://github.com/alanbanks229/Mod_2_Project"
                            >
                                Source Code
                                <span
                                    className="
                                        absolute left-0 bottom-0 w-full h-0.5 bg-SunsetOrange
                                        transform scale-x-0 group-hover:scale-x-100
                                        transition-transform duration-500
                                    "
                                />
                            </a>
                        </div>
                        <p className="w-5/6 mt-14 mb-8 text-OceanZoneTeal">An online forum where you can post any kind of question under specific categories and receive responses from other users who use this app!</p>
                        <ul className="list-disc ml-8 mb-8 text-OceanZoneTeal">
                            <li>Basically Reddit</li>
                            <li>Built with Ruby on Rails</li>
                        </ul>
                        <p className="font-extralight mt-1 ml-1 dark:text-MacbookMidnight">Last Updated: 4 years ago</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Projects