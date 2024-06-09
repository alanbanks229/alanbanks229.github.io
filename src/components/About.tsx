
import { SectionIDs } from '../constants'
import { motion } from "framer-motion"
import ImageCarousel from './ImageCarousel'

const About = () => {
    return (
        <div id={SectionIDs.ABOUT} className="border-b border-neutral-900 pb-24">
            <h1 className="mb-10 mt-10 md:mt-20 md:mb-20 text-center text-4xl">About
                <span className="text-neutral-500"> Me</span>
            </h1>
            <div className="flex flex-col md:flex-row">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="lg:w-1/2 lg:pl-8 lg:pr-8"
                >
                    <ImageCarousel />
                </motion.div>
                <motion.div
                    className="w-full lg:w-1/2"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-center lg:justify-start">
                        <div className="flex flex-col">
                            <h3 className='mt-16 text-xl font-normal text-center'>My Journey of Passion and Versatility</h3>
                            <p className="md:mt-2 md:mb-2 max-w-xl py-6">
                            &emsp;My path to Software Engineering/Web Development has been anything but typical.
                            Growing up in a family of medical professionals, I initially expected to follow a similar path.
                            However, my true passions for music and computer science led me in a different direction.
                            Today, I proudly hold degrees in both Music and Computer Science :D
                            <br/><br/>
                            In my professional life, I am a dedicated and versatile full-stack developer with a strong focus
                            on creating performant and user-friendly web applications. I have over 4 years of professional experience and
                            specialize in React/Typescript, GoLang, and managing PostgreSQL databases across various applications.
                            <br/><br/>
                            Beyond my technical work, I find joy in performing at occasional gigs, staying active, exploring all the nature in Washington,
                            and when I have time, work on open-source / personal projects.
                            <br/><br/>Wherever I go, I look forward to utilizing my blend of creativity and technical expertise to innovate and create tools that enhance everyday life.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About