import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import { debounce } from 'lodash'
import './Nav.css';

export default function Nav(props) {
    // const [hoveredNav, setHoveredNav] = useState(null);
    // const [activeSection, setActiveSection] = useState(null);
    // const [isNavigationClick, setIsNavigationClick] = useState(false);

    // function hoverNav(section) {
    //     setHoveredNav(state => section);
    // }

    // function moveOffNav(section) {
    //     if (activeSection !== section) {
    //         setHoveredNav(state => null);
    //     }
    // }

    // const handleSetActive = useCallback((to) => {
    //     if (!isNavigationClick) {
    //         setActiveSection(state => to);
    //         setHoveredNav(state => null);
    //     }
    // }, [isNavigationClick, setActiveSection, setHoveredNav]);

    // function selectedNavItem(section) {
    //     if (activeSection === section || hoveredNav === section) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // function handleLinkClick(section) {
    //     setIsNavigationClick(true);
    //     //Stop in between nav items being set to active as page scrolls by from nav bar click
    //     setTimeout(() => {
    //         setIsNavigationClick(false);
    //     }, 500);
    //     handleSetActive(section)
    // };

    // useEffect(() => {
    //     //set about to active on page render 
    //     handleSetActive('about');
    // }, [handleSetActive])

    return (
        <nav className={!props.smallScreen ? "nav-hidden" : "nav-open"}>
            <ul className='nav-ul'>
                <li className={props.selectedNavItem('about') ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => props.hoverNav('about')}
                    onMouseLeave={() => props.moveOffNav('about')}

                >
                    <Link spy={true} smooth={true} offset={-100} duration={500} to="about" activeClass="active" className='flex-nav-center' onClick={() => props.handleLinkClick('about')}>
                        <span className={props.selectedNavItem('about') ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={props.selectedNavItem('about') ? "nav-text-elongate" : "nav-text-normal"}>About</span>
                    </Link>
                </li>
                <li className={props.selectedNavItem('experience') ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => props.hoverNav('experience')}
                    onMouseLeave={() => props.moveOffNav('experience')}
                >
                    <Link spy={true} smooth={true} offset={-60} duration={500} to="experience" activeClass="active" className='flex-nav-center' onClick={() => props.handleLinkClick('experience')}>
                        <span className={props.selectedNavItem('experience') ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={props.selectedNavItem('experience') ? "nav-text-elongate" : "nav-text-normal"}>Experience</span>
                    </Link>
                </li>
                <li className={props.selectedNavItem('projects') ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => props.hoverNav('projects')}
                    onMouseLeave={() => props.moveOffNav('projects')}
                >
                    <Link spy={true} smooth={true} offset={-60} duration={500} to="projects" activeClass="active" className='flex-nav-center' onClick={() => props.handleLinkClick('projects')}>
                        <span className={props.selectedNavItem('projects') ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={props.selectedNavItem('projects') ? "nav-text-elongate" : "nav-text-normal"}>Projects</span>
                    </Link>
                </li>
                <li className={props.selectedNavItem('publications') ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => props.hoverNav('publications')}
                    onMouseLeave={() => props.moveOffNav('publications')}
                >
                    <Link spy={true} smooth={true} offset={-50} duration={500} to="publications" activeClass="active" className='flex-nav-center'  onClick={() => props.handleLinkClick('publications')}>
                        <span className={props.selectedNavItem('publications') ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={props.selectedNavItem('publications') ? "nav-text-elongate" : "nav-text-normal"}>Publications</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}