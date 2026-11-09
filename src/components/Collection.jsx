import React from 'react';
import LinkArrow from './shared/LinkArrow';
import { products } from '../data/products';
import { Plus } from 'lucide-react';
import Textanimation from '../../utils/animation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


export default function Collection({ onAdd }) {


  return <section className="collection section" id="collection">
    <div className="eyebrow">THE EVERYDAY COLLECTION</div>
    <div className="section-heading">
      <h2>Fewer pieces.<br />More possibility.</h2>
      <div className="heading-note"><p>Comfort to settle into. Forms that stay with you.<br />Discover our considered essentials.</p><LinkArrow>View all furniture</LinkArrow></div>
    </div>
    <div className="product-grid">
      {products.map(p => <article className="product" key={p.id}>
        <div className="product-image"><img src={p.image} alt={p.alt} /><span className="product-number">{p.id}</span><button className="quick-add" aria-label={`Add ${p.name} to bag`} onClick={() => onAdd(p)}><Plus size={15} /></button></div>
        <div className="product-meta"><span>{p.name}</span><span>{p.price}</span></div>
        <div className="product-type">{p.type}</div>
        <LinkArrow className="LinkArrow">Explore piece</LinkArrow>
      </article>)}
    </div>
  </section>;
}