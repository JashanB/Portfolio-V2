import { useState } from 'react';
import React from 'react';
import './Nav.css';

export default function Nav() {
    return (
        <nav className=''>
            <ul>
                <li className={hoveredNav === 1 ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav(1)}
                    onMouseLeave={() => moveOffNav(1)}
                >
                    <a href="" className='flex-nav-center'>
                        <span></span>
                        <span>About</span>
                    </a>
                </li>
                <li className={hoveredNav === 2 ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav(2)}
                    onMouseLeave={() => moveOffNav(2)}
                >
                    <a href="">
                        <span></span>
                        <span>Experience</span>
                    </a>
                </li>
                <li className={hoveredNav === 3 ? "hovered-nav-item" : "nav-item-normal"}
                    onMouseEnter={() => hoverNav(3)}
                    onMouseLeave={() => moveOffNav(3)}
                >
                    <a href="">
                        <span></span>
                        <span>Projects</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}