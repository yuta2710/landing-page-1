import { useEffect, useRef } from "react";
import "../styles/Header.css";
import { gsap } from "gsap";

export const Header = () => {
    let timeline = gsap.timeline();
    let logo = useRef(null), menuItems = useRef(null);
    useEffect(() => {
        timeline.from(logo, {
            duration: 1,
            opacity: 0,
            y: 100
        })

        timeline.from(menuItems, {
            duration: 1,
            opacity: 0,
            y: 100
        }, "-=.2");
    })
    return (<div>
        <div className="header">
            <div className="logo" ref={el => logo = el}>Logo</div>
            <div className="menu">
                <ul ref={el => menuItems = el}>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </div>)
}
