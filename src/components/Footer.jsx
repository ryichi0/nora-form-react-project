import React from 'react';


export default function Footer() {
  return <footer className="footer">
    <div className="footer-main"><div className="footer-brand"><a className="wordmark" href="#top">NÓRA FORM</a><p>Furniture for the way you live.</p></div>
      <div className="footer-col"><h4>Explore</h4><a href="#collection">Furniture</a><a href="#collection">Collections</a><a href="#about">Our story</a><a href="#journal">Journal</a></div>
      <div className="footer-col"><h4>Here to help</h4><a href="#newsletter">Contact</a><a href="#newsletter">Delivery & returns</a><a href="#newsletter">Care guide</a><a href="#newsletter">FAQ</a></div>
      <div className="footer-col"><h4>Find us</h4><a href="#top">Instagram ↗</a><a href="#top">Pinterest ↗</a><a href="mailto:hello@noraform.com">hello@noraform.com</a></div>
    </div>
    <div className="footer-bottom"><span>© 2026 Nóra Form</span><div><a href="#top">Privacy policy</a><a href="#top">Terms & conditions</a></div><span>CURATED / Back to top ↑</span></div>
  </footer>;
}