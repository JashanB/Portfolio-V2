import React, { useState } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './Nav.css';

export default function Nav(props) {
    const [hoveredNav, setHoveredNav] = useState(null);
    const [activeSection, setActiveSection] = useState(null);

    function hoverNav(item) {
        console.log('entered', item)
        setHoveredNav(state => item);
    }

    function moveOffNav(item) {
        console.log('exited', item)
        setHoveredNav(state => null);
    }

    function handleSetActive (to) {
        console.log('set active', to)
        setActiveSection(state => to);
      };
    
    return (
        <nav className={!props.smallScreen ? "nav-hidden" : "nav-open"}>
            <ul className='nav-ul'>
                <li className={hoveredNav === 1 ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav(1)}
                    onMouseLeave={() => moveOffNav(1)}
                >
                    <Link spy={true} smooth={true} offset={-50} duration={500} to="about" activeClass="active" className='flex-nav-center' onSetActive={handleSetActive}>
                        <span className={hoveredNav === 1 ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={hoveredNav === 1 ? "nav-text-elongate" : "nav-text-normal"}>About</span>
                    </Link>
                </li>
                <li className={hoveredNav === 2 ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav(2)}
                    onMouseLeave={() => moveOffNav(2)}
                >
                    <Link spy={true} smooth={true} offset={-50} duration={500} to="experience" activeClass="active" className='flex-nav-center' onSetActive={handleSetActive}>
                        <span className={hoveredNav === 2 ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={hoveredNav === 2 ? "nav-text-elongate" : "nav-text-normal"}>Experience</span>
                    </Link>
                </li>
                <li className={hoveredNav === 3 ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav(3)}
                    onMouseLeave={() => moveOffNav(3)}
                >
                    <Link spy={true} smooth={true} offset={-50} duration={500} to="projects" activeClass="active" className='flex-nav-center' onSetActive={handleSetActive}>
                        <span className={hoveredNav === 3 ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={hoveredNav === 3 ? "nav-text-elongate" : "nav-text-normal"}>Projects</span>
                    </Link>
                </li>
                <li className={hoveredNav === 4 ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav(4)}
                    onMouseLeave={() => moveOffNav(4)}
                >
                    <Link spy={true} smooth={true} offset={-50} duration={500} to="publications" activeClass="active" className='flex-nav-center' onSetActive={handleSetActive}>
                        <span className={hoveredNav === 4 ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={hoveredNav === 4 ? "nav-text-elongate" : "nav-text-normal"}>Publications</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}