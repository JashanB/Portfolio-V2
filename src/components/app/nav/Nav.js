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
    //move off nav while that is active means shouldnt set state to null
    function moveOffNav(section) {
        // console.log('active', activeSection)
        if (activeSection !== section) {
            setHoveredNav(state => null);
        }
        // if (item !== navObj[key]) {
        //     console.log('yes')
        // }
    }

    function handleSetActive(to) {
        if (!isNavigationClick) {
            setActiveSection(state => to);
            // const navObjNumber = navObj[to];
            // hoverNav(navObjNumber)
        };
    }

    function selectedNavItem(section) {
        //return true or false
        if (activeSection === section || hoveredNav === section) {
            return true;
        } else {
            return false;
        }
    }

    useEffect(() => {
        handleSetActive('about')
    }, [])

    //hoveredNav can only be 1 thing at once, therefore only 1 nav item will be highlighted
    //need to maybe use function to check if active section or hovered to determine state, instead of just if hovered display 

    return (
        <nav className={!props.smallScreen ? "nav-hidden" : "nav-open"}>
            <ul className='nav-ul'>
                <li className={hoveredNav === 1 ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav('about')}
                    onMouseLeave={() => moveOffNav('about')}

                >
                    <Link spy={true} smooth={true} offset={-100} duration={500} to="about" activeClass="active" className='flex-nav-center' onSetActive={handleSetActive}>
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