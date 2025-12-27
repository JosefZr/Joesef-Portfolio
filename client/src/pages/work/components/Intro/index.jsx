import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Index() {

    const background = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px",
            },
        })

        timeline
            .from(background.current, {clipPath: `inset(15%)`})
            .to(introImage.current, {height: "200px"}, 0)
    }, [])

    return (
        <div className={styles.homeHeader}>
            <div className={styles.backgroundImage} ref={background}>
                <img 
                    src={'/images/background.jpeg'}
                    alt="background image"
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
            </div>
            <div className={styles.intro}>
                    <div ref={introImage} data-scroll data-scroll-speed="0.3" className={styles.introImage}>
                        <img
                            src={'/images/intro.png'}
                            alt="intro image"
                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                        />
                    </div>
                    <h1 data-scroll data-scroll-speed="0.7">SMOOTH SCROLL</h1>
             </div>
        </div>
    )
}
