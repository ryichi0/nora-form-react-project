import { ArrowUpRight } from 'lucide-react';
import React, { useState } from 'react';


export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  function submit(e) { e.preventDefault(); if (email.trim()) setSent(true); }
  return <section className="newsletter" id="newsletter">
    <div><div className="eyebrow">LET GOOD THINGS FIND YOU</div><h2>A little inspiration.<br />A lot of possibility.</h2></div>
    <div className="newsletter-form-wrap"><p>New collections, thoughtful spaces and stories worth sharing.<br />A considered note, every now and then.</p>
      <form onSubmit={submit}><label className="sr-only" htmlFor="email">Your email address</label><input id="email" type="email" required placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} /><button type="submit">{sent ? 'You’re on the list' : 'Join us'} <ArrowUpRight size={12} /></button></form>
      <small>{sent ? 'Thank you for joining us.' : 'By subscribing, you agree to our privacy policy.'}<br />Unsubscribe whenever you wish.</small>
    </div>
  </section>;
}