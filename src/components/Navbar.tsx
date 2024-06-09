import React, { useEffect, useState } from 'react';

import { RxDividerVertical } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import AlanProfile from "../assets/Alan/AlanBanksPortrait.png"
import AnchorButton from './AnchorButton';
import { NavbarSections, SectionIDs } from '../constants';
import PorfolioLogo from './HeroLogo';
import { throttle } from '../helpers';
import { useTheme } from '../ThemeProvider';
import ThemeToggleBtn from './ThemeToggleBtn';

const FloatNavbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [selectedAnchor, setSelectedAnchor] = useState<string>('');
    const {isDarkMode} = useTheme();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const onLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSelectedAnchor('')
        setMobileMenuOpen(false);
    }

    useEffect(() => {
        const handleGeneralScroll = throttle(() => {
            const scrollY = window.scrollY;
            if (scrollY > 2745) {
                setSelectedAnchor(NavbarSections.PROJECTS);
            } else if (scrollY > 1976) {
                setSelectedAnchor(NavbarSections.EXPERIENCE);
            } else if (scrollY > 1269) {
                setSelectedAnchor(NavbarSections.TECH);
            } else if (scrollY > 488) {
                setSelectedAnchor(NavbarSections.ABOUT);
            } else {
                setSelectedAnchor('');
            }

        }, 10); // Throttle time in milliseconds

        window.addEventListener('scroll', handleGeneralScroll);

        return () => {
            window.removeEventListener('scroll', handleGeneralScroll);
        };
    }, []);

    const onNavbarSelection = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        const section = e.currentTarget.innerText;
        setSelectedAnchor(e.currentTarget.innerText)
        setMobileMenuOpen(false);
        let target;
        switch (section) {
            case NavbarSections.ABOUT:
                target = document.getElementById(SectionIDs.ABOUT)
                break;
            case NavbarSections.TECH:
                target = document.getElementById(SectionIDs.TECH)
                break;
            case NavbarSections.EXPERIENCE:
                target = document.getElementById(SectionIDs.EXPERIENCE)
                break;
            case NavbarSections.PROJECTS:
                target = document.getElementById(SectionIDs.PROJECTS)
                break;
            default:
                target = document.getElementById(SectionIDs.HOME)
                break;
        }
        if (target) {
            let offsetPosition
            const targetPosition = target.getBoundingClientRect().top + window.scrollY;
            switch (section) {
                case NavbarSections.ABOUT:
                    offsetPosition = targetPosition - (85 * 2) + 4;
                    break;
                case NavbarSections.TECH:
                    offsetPosition = targetPosition - (88);
                    break;
                case NavbarSections.EXPERIENCE:
                    offsetPosition = targetPosition - (85 * 2);
                    break;
                case NavbarSections.PROJECTS:
                    offsetPosition = targetPosition - (85 * 2);
                    break;
                default:
                    offsetPosition = 0;
                    break;
            }

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    return (
        <nav
            id="Navbar"
            className="
                p-4
                fixed w-full z-20 top-0 start-0
                dark:bg-MidnightDarkBlue
                bg-DriftwoodBeige
            "
            style={{
                borderBottom: `${isDarkMode ? `solid rgba(249, 116, 75, 0.7) 3px` : 'solid rgba(249, 116, 75, 0.4) 5px'}`,
                borderBottomRightRadius: '1.5rem',
                borderBottomLeftRadius: '1.5rem',
            }}
        >
            <div className="
                max-w-screen-2xl
                flex flex-wrap
                items-center justify-between
                mx-auto md:pl-4 md:pr-4
            ">
                <PorfolioLogo
                    imgSrc={AlanProfile}
                    onClick={onLogoClick}
                />
                <div className="flex flex-row md:order-2 md:space-x-0 rtl:space-x-reverse items-center justify-center">
                    <ThemeToggleBtn/>
                    <RxDividerVertical className='md:flex hidden transition-colors duration-300' size={60} color={`${isDarkMode ? 'rgba(249, 116, 75, 0.7)': 'black'}`}/>
                    <div className="md:flex gap-4 text-2xl hidden">
                        <a href="https://www.linkedin.com/in/alan-banks/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="hover:text-SunsetOrange transition-all duration-300" size={30}/>
                        </a>
                        <a href="https://github.com/alanbanks229" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="hover:text-SunsetOrange transition-all duration-300" size={30}/>
                        </a>
                        <a href="https://www.instagram.com/alan_got_banks/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="hover:text-SunsetOrange transition-all duration-300" size={30}/>
                        </a>
                    </div>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="
                        items-center p-2 w-10 h-10 justify-center text-sm text-MacbookMidnight dark:text-LightGray/90
                        rounded-lg md:hidden"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                        onClick={toggleMobileMenu}
                    >
                        {/* <span className="sr-only">Open main menu</span> */}
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div className={`${mobileMenuOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <AnchorButton
                            title='About'
                            onNavbarSelection={onNavbarSelection}
                            isSelected={selectedAnchor === 'About'}
                        />
                        <AnchorButton
                            title='Technologies'
                            onNavbarSelection={onNavbarSelection}
                            isSelected={selectedAnchor === 'Technologies'}
                        />
                        <AnchorButton
                            title='Experience'
                            onNavbarSelection={onNavbarSelection}
                            isSelected={selectedAnchor === 'Experience'}
                        />
                        <AnchorButton
                            title='Projects'
                            onNavbarSelection={onNavbarSelection}
                            isSelected={selectedAnchor === 'Projects'}
                        />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default FloatNavbar