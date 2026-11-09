import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowUpRight, Menu } from 'lucide-react';
import React, { useState } from 'react';




export default function Header({ bagCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: '#nav',
        start: 'bottom top'
      }
    })

    navTween.fromTo('#nav', { backgroundColor: 'transparent' },
      {
        backgroundColor: '#f7f6f250',
        backdropFilter: 'blur(20px)',
        duration: 1,
        ease: 'power1.inOut'
      })
  })
  return <header id='nav' className="header">
    <a className="wordmark" href="#top">NÓRA FORM</a>
    <nav className="nav">
      <a href="#collection" onClick={() => setMenuOpen(false)}>Furniture</a>
      <a href="#collection" onClick={() => setMenuOpen(false)}>Collections</a>
      <a href="#about" onClick={() => setMenuOpen(false)}>Our story</a>
      <a href="#journal" onClick={() => setMenuOpen(false)}>Journal</a>
    </nav>
    <a className="bag" href="#newsletter">Bag ({bagCount}) <ArrowUpRight size={11} /></a>
    <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
  </header>;
}
