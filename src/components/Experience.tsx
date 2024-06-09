import { motion } from "framer-motion"
import { EXPERIENCES, SectionIDs } from "../constants"

const Experience = () => {
    return (
        <div id={SectionIDs.EXPERIENCE} className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.25 }}
                className="my-20 text-center text-4xl"
            >
                Experience
            </motion.h1>
            {EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.25 }}
                    className="w-full lg:w-1/4"
                >
                    <p className="mb-2 text-base font-bold dark:text-SunsetOrange text-BurntOrange">{experience.year}</p>
                </motion.div>
                <motion.div
                    className="w-full lg:w-3/4 max-w-xl"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.25 }}
                >
                    <h6 className="mb-2 font-semibold">
                        {experience.role} -{" "}
                        <span className="text-sm text-OceanZoneTeal dark:text-DriftwoodBeige">
                            {experience.company}
                        </span>
                    </h6>
                    <p className="mb-4 text-MacbookMidnight dark:text-white">
                        {experience.description}
                    </p>
                    <div className="flex flex-wrap md:justify-normal justify-start">
                        {experience.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="
                                    text-sm font-medium px-2 py-1 mr-2 mt-4 rounded
                                    border border-MacbookMidnight bg-white dark:bg-LightGray text-MidnightDarkBlue
                                ">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
            ))}
        </div>
    )
}

export default Experience