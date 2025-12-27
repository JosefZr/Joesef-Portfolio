import styles from "../../page.module.scss";
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../../components/preLoader';
import Landing from '../../components/Landing';
import Projects from '../../components/Projects';
import Description from '../../components/Description';
import SlidingImages from '../../components/SlidingImages';
import Contact from '../../components/Contact';
import Header from '../../components/Header';
import BigProjectsSection from '../../components/bg-project-section';
export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect( () => {
    (
      async () => {
          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])
  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header/>
      <Landing />
      <Description />
      <Projects />
      <BigProjectsSection/>
      <SlidingImages />
      <Contact />
    </main>
  );
}