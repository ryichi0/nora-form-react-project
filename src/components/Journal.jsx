import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import LinkArrow from './shared/LinkArrow';
import { posts } from '../data/posts';


export default function Journal() {
  
  return <section className="journal section" id="journal">
    <div className="eyebrow">THE JOURNAL</div>
    <div className="section-heading journal-heading"><h2>Notes on living.</h2><LinkArrow>All stories</LinkArrow></div>
    <div className="journal-grid">{posts.map(p => <article className="journal-card" key={p.title}>
      <img src={p.image} alt={p.alt} />
      <div className="eyebrow">{p.category}</div>
      <h3>{p.title} <ArrowUpRight size={16} /></h3><p>{p.desc}</p>
    </article>)}</div>
    <div className="journal-points">
      <div><span>01</span><strong>Furniture, thoughtfully delivered</strong><p>Care from our door to yours.</p></div>
      <div><span>02</span><strong>A little help finding your form</strong><p>Personal advice for your space.</p></div>
      <div><span>03</span><strong>Here for the long run</strong><p>Materials and care, made simple.</p></div>
    </div>
  </section>;
}