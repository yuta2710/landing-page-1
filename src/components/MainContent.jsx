import { useEffect, useRef } from "react";
import background from "../assets/background.jpg"; 
import "../styles/MainContent.css";
import { gsap } from "gsap";
import anime from "animejs";

export const MainContent = () => {
    let bg = useRef(null);
    let heading1 = useRef(null);

    let timeline = gsap.timeline();

    useEffect(() => {
      heading1.classList.add('letter');
      heading1.innerHTML = heading1.textContent.replace(/\S/g, "<span class='letter' style='z-index: 100000; color: #fff;'>$&</span>")
      anime.timeline().add({
        targets: ".heading1 .letter",
        translateY: [200, 0],
        easing: "easeOutExpo",
        opacity: 1,
        duration: 1700,
        delay: (el, idx) => 400 + 70 * idx
      })
      timeline.from(bg, {
        delay: 1,
        duration: 2,
        y: '-50%',
        x: '-50%',
        opacity: 1
      });
    }, [])
    return (
      <div>
        <div className="content">
          <h1 className="heading1" ref={el => heading1 = el}>Shop Now!</h1>
          <p>New Arrivals</p>
        </div>

        <img className="background" src={background} alt="bg" ref={el => bg = el} />
      </div>
    );
}