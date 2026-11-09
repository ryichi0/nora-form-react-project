import React from 'react';
import LinkArrow from './shared/LinkArrow';
import Textanimation from '../../utils/animation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


// export default function About() {
//   return <section className="about section" id="about">
//     <h2 className="about-title">ABOUT<br />US.</h2>
//     <div className="about-intro">
//       <div className="eyebrow">SPATIAL DESIGN FOR MODERN RITUALS.</div>
//       <p>Quietly bold. Warm materials, crisp geometry and thoughtful details made for everyday life.</p>
//       <LinkArrow href="#story">Our story</LinkArrow>
//     </div>
//     <img className="about-main" src="/images/thoughtful-natural-living-room.jpg" alt="Thoughtfully composed contemporary living room" />
//     <div className="about-side">
//       <img src="/images/sunlit-living-room.jpg" alt="Natural textures and a calm living space" />
//       <h3>Designed to<br />feel natural.</h3>
//       <p>At Nóra Form, we shape expressive interiors around the way people work, gather and recharge—balancing personality with lasting simplicity.</p>
//       <span className="about-index">NÓRA FORM / 01</span>
//     </div>
//   </section>;
// }
export default function About() {


  return <section className="about section" id="about">
    <h2 className="about-title">ABOUT<br />US.</h2>


    <div className="about-bottom-section">
      <div className="about-intro">
        <div className="eyebrow">SPATIAL DESIGN FOR MODERN RITUALS.</div>
        <p>Quietly bold. Warm materials, crisp geometry and thoughtful details made for everyday life.</p>
        <LinkArrow href="#story">Our story</LinkArrow>
      </div>
      <img className="about-main" src="/images/thoughtful-natural-living-room.jpg" alt="Thoughtfully composed contemporary living room" />
      <div className="about-side">
        <img src="/images/sunlit-living-room.jpg" alt="Natural textures and a calm living space" />
        <h3>Designed to<br />feel natural.</h3>
        <p>At Nóra Form, we shape expressive interiors around the way people work, gather and recharge—balancing personality with lasting simplicity.</p>
        <span className="about-index">NÓRA FORM / 01</span>
      </div>
    </div>
  </section>;
}