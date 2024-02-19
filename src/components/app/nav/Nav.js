import { useState } from 'react';
import React from 'react';
import './Nav.css';

export default function Nav(props) {
    const [hoveredNav, setHoveredNav] = useState(null);

    function hoverNav(item) {
        console.log('entered', item)
        setHoveredNav(state => item);
    }

    function moveOffNav(item) {
        console.log('exited', item)
        setHoveredNav(state => null);
    }
    
    return (
        <nav className={!props.smallScreen ? "nav-hidden" : "nav-open"}>
            <ul className='nav-ul'>
                <li className={hoveredNav === 1 ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav(1)}
                    onMouseLeave={() => moveOffNav(1)}
                >
                    <a href="" className='flex-nav-center'>
                        <span className={hoveredNav === 1 ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={hoveredNav === 1 ? "nav-text-elongate" : "nav-text-normal"}>About</span>
                    </a>
                </li>
                <li className={hoveredNav === 2 ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav(2)}
                    onMouseLeave={() => moveOffNav(2)}
                >
                    <a href="" className='flex-nav-center'>
                        <span className={hoveredNav === 2 ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={hoveredNav === 2 ? "nav-text-elongate" : "nav-text-normal"}>Experience</span>
                    </a>
                </li>
                <li className={hoveredNav === 3 ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav(3)}
                    onMouseLeave={() => moveOffNav(3)}
                >
                    <a href="" className='flex-nav-center'>
                        <span className={hoveredNav === 3 ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={hoveredNav === 3 ? "nav-text-elongate" : "nav-text-normal"}>Projects</span>
                    </a>
                </li>
                <li className={hoveredNav === 4 ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav(4)}
                    onMouseLeave={() => moveOffNav(4)}
                >
                    <a href="" className='flex-nav-center'>
                        <span className={hoveredNav === 4 ? "nav-line-elongate" : "nav-line-normal"}></span>
                        <span className={hoveredNav === 4 ? "nav-text-elongate" : "nav-text-normal"}>Publications</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}