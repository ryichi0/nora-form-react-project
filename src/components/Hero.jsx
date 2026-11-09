import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import Textanimation from '../../utils/animation';


export default function Hero() {

  
  
  return <section className="hero" id="top">

    <div className="eyebrow hero-eyebrow">CONSIDERED FURNITURE. EVERYDAY LIVING.</div>
    <h1>MADE FOR<br />LIVING.</h1>
    <div className="hero-lower">
      <div className="hero-copy">
        <h2>Good design feels<br />right at home.</h2>
        <p>Quietly bold furniture, natural<br className="desktop" /> materials, and thoughtful details.<br className="desktop" /> Made for the way you live.</p>
        <a className="pill" href="#collection">Explore collection <ArrowUpRight size={12} /></a>
      </div>
      <figure className="hero-image">
        <img src="/images/sunlit-living-room.jpg" alt="Warm, sunlit living room with natural furniture" />
        <figcaption><span>THE ART OF FEELING AT HOME</span><span>COLLECTION / 2026</span></figcaption>
      </figure>
    </div>
  </section>;
}