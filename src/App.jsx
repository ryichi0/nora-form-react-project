import React, { useState } from 'react';
import Header from './components/Header';
import Room from './components/Room';
import Collection from './components/Collection';
import About from './components/About';
import Principles from './components/Principles';
import Journal from './components/Journal';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import textAnimation from '../utils/animation';
import { titleAnimation } from '../utils/titleAnimation';
import { pageAnimations } from '../utils/pageAnimation';

export default function App() {

  useGSAP(() => {
    return pageAnimations();
  });


  const [bagCount, setBagCount] = useState(0);
  return <>
    <div className="page-shell">
      <Header bagCount={bagCount} />
      <main>
        <Hero />
        <Collection onAdd={() => setBagCount(c => c + 1)} />
        <About />
        <Room />
        <Principles />
        <Journal />
        <Newsletter />
      </main>
      <Footer />
    </div>
  </>;
}