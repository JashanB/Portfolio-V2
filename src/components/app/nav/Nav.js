import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import { debounce } from 'lodash'
import './Nav.css';

export default function Nav(props) {
    const [hoveredNav, setHoveredNav] = useState(null);
    const [activeSection, setActiveSection] = useState(null);
    const [isNavigationClick, setIsNavigationClick] = useState(false);

    function hoverNav(section) {
        setHoveredNav(state => section);
    }

    function moveOffNav(section) {
        if (activeSection !== section) {
            setHoveredNav(state => null);
        }
    }

    const handleSetActive = useCallback((to) => {
        if (!isNavigationClick) {
            setActiveSection(state => to);
            setHoveredNav(state => null);
        }
    }, [isNavigationClick, setActiveSection, setHoveredNav]);

    function selectedNavItem(section) {
        if (activeSection === section || hoveredNav === section) {
            return true;
        } else {
            return false;
        }
    }

    function handleLinkClick(section) {
        setIsNavigationClick(true);
        //Stop in between nav items being set to active as page scrolls by from nav bar click
        setTimeout(() => {
            setIsNavigationClick(false);
        }, 500);
        handleSetActive(section)
    };

    useEffect(() => {
        //set about to active on page render 
        handleSetActive('about');
    }, [handleSetActive])

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = debounce(() => {
            // Calculate which section is currently in view
            // Update setActiveSection accordingly
            // You can use a similar logic to what you have in handleSetActive
        }, 100); 

        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={!props.smallScreen ? "nav-hidden" : "nav-open"}>
            <ul className='nav-ul'>
                <li className={selectedNavItem('about') ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav('about')}
                    onMouseLeave={() => moveOffNav('about')}

                >
                    <Link spy={true} smooth={true} offset={-100} duration={500} to="about" activeClass="active" className='flex-nav-center' onSetActive={handleSetActive} onClick={() => handleLinkClick('about')}>
                        <span className={selectedNavItem('about') ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={selectedNavItem('about') ? "nav-text-elongate" : "nav-text-normal"}>About</span>
                    </Link>
                </li>
                <li className={selectedNavItem('experience') ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav('experience')}
                    onMouseLeave={() => moveOffNav('experience')}
                >
                    <Link spy={true} smooth={true} offset={-60} duration={500} to="experience" activeClass="active" className='flex-nav-center' onSetActive={handleSetActive} onClick={() => handleLinkClick('experience')}>
                        <span className={selectedNavItem('experience') ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={selectedNavItem('experience') ? "nav-text-elongate" : "nav-text-normal"}>Experience</span>
                    </Link>
                </li>
                <li className={selectedNavItem('projects') ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav('projects')}
                    onMouseLeave={() => moveOffNav('projects')}
                >
                    <Link spy={true} smooth={true} offset={-60} duration={500} to="projects" activeClass="active" className='flex-nav-center' onSetActive={handleSetActive} onClick={() => handleLinkClick('projects')}>
                        <span className={selectedNavItem('projects') ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={selectedNavItem('projects') ? "nav-text-elongate" : "nav-text-normal"}>Projects</span>
                    </Link>
                </li>
                <li className={selectedNavItem('publications') ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav('publications')}
                    onMouseLeave={() => moveOffNav('publications')}
                >
                    <Link spy={true} smooth={true} offset={-50} duration={500} to="publications" activeClass="active" className='flex-nav-center' onSetActive={handleSetActive} onClick={() => handleLinkClick('publications')}>
                        <span className={selectedNavItem('publications') ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={selectedNavItem('publications') ? "nav-text-elongate" : "nav-text-normal"}>Publications</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}