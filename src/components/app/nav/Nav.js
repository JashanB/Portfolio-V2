import React, { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './Nav.css';

export default function Nav(props) {
    const [hoveredNav, setHoveredNav] = useState(null);
    const [activeSection, setActiveSection] = useState(null);
    const [isNavigationClick, setIsNavigationClick] = useState(false);


    const navObj = {
        about: 1,
        experience: 2,
        projects: 3,
        publications: 4
    }

    function hoverNav(section) {
        setHoveredNav(state => section);
    }

    function moveOffNav(section) {
        if (activeSection !== section) {
            setHoveredNav(state => null);
        }
    }

    function handleSetActive(to) {
        if (!isNavigationClick) {
            setActiveSection(state => to);
        };
    }

    function selectedNavItem(section) {
        if (activeSection === section || hoveredNav === section) {
            return true;
        } else {
            return false;
        }
    }

    function handleLinkClick (section) {
        setIsNavigationClick(true);
        setTimeout(() => {
          setIsNavigationClick(false);
        }, 500);
        handleSetActive(section)
      };

    useEffect(() => {
        handleSetActive('about')
    }, [])

    return (
        <nav className={!props.smallScreen ? "nav-hidden" : "nav-open"}>
            <ul className='nav-ul'>
                <li className={hoveredNav === 1 ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav('about')}
                    onMouseLeave={() => moveOffNav('about')}

                >
                    <Link spy={true} smooth={true} offset={-100} duration={500} to="about" activeClass="active" className='flex-nav-center' onSetActive={handleSetActive} onClick={() => handleLinkClick('about')}>
                        <span className={selectedNavItem('about') ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={selectedNavItem('about') ? "nav-text-elongate" : "nav-text-normal"}>About</span>
                    </Link>
                </li>
                <li className={hoveredNav === 2 ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav('experience')}
                    onMouseLeave={() => moveOffNav('experience')}
                >
                    <Link spy={true} smooth={true} offset={-60} duration={500} to="experience" activeClass="active" className='flex-nav-center' onSetActive={handleSetActive}>
                        <span className={selectedNavItem('experience') ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={selectedNavItem('experience') ? "nav-text-elongate" : "nav-text-normal"}>Experience</span>
                    </Link>
                </li>
                <li className={hoveredNav === 3 ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav('projects')}
                    onMouseLeave={() => moveOffNav('projects')}
                >
                    <Link spy={true} smooth={true} offset={-60} duration={500} to="projects" activeClass="active" className='flex-nav-center' onSetActive={handleSetActive}>
                        <span className={selectedNavItem('projects') ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={selectedNavItem('projects') ? "nav-text-elongate" : "nav-text-normal"}>Projects</span>
                    </Link>
                </li>
                <li className={hoveredNav === 4 ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav('publications')}
                    onMouseLeave={() => moveOffNav('publications')}
                >
                    <Link spy={true} smooth={true} offset={0} duration={500} to="publications" activeClass="active" className='flex-nav-center' onSetActive={handleSetActive}>
                        <span className={selectedNavItem('publications') ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={selectedNavItem('publications') ? "nav-text-elongate" : "nav-text-normal"}>Publications</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}