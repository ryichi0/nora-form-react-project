import React from 'react';


export default function Principles() {
  const items = [['01', 'Honest materials', 'Natural textures. Enduring character.'], ['02', 'Thoughtful construction', 'Beautiful from every angle.'], ['03', 'A lasting point of view', 'Designed beyond the season.']];
  return <section className="principles">
    <div><div className="eyebrow">GOOD BY DESIGN</div><h2>Made with care.<br />Kept for years.</h2></div>
    <div className="principle-list">{items.map(([n, t, d]) => <div className="principle" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div>
  </section>;
}