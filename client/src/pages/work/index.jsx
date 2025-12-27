
import { useEffect } from 'react';
import Intro from './components/Intro';
import Description from './components/Description';
import Projects from './components/Projects';

export default function index() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
      <main className='bg-black'>
        <Intro />
        <Description />
        <Projects />
      </main>
  )
}
