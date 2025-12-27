import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function index() {

    const phrase = "The combination of my passion for development, system design, and user experience places me in a unique position in the web development world. I specialize in turning complex ideas into reliable digital platforms, from intuitive interfaces to powerful backend systems.";
    const phrase2 ="No noise. No shortcuts. Just clean code, strong architecture, and results-driven design—always on the cutting edge."
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                <br />
                {
                    phrase2.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })  
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>Helping brands and businesses stand out in the digital era.
                    Together, we build modern, scalable, and high-performance web experiences that set a new standard.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
