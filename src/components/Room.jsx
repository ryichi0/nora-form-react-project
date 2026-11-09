import React from 'react'
import LinkArrow from './shared/LinkArrow';

export default function Room() {
  return <section className="room-band">
    <div className="eyebrow">A ROOM OF YOUR OWN</div>
    <h2>Come on in.</h2>
    <div className="room-layout">
      <img src="/images/the-sunday-room.jpg" alt="A quiet living room filled with natural light" />
      <div className="room-copy">
        <div className="eyebrow">01 / THE SUNDAY ROOM</div>
        <h3>A slower<br />kind of living.</h3>
        <p>Soft silhouettes, solid oak and a little room to breathe. A place for slow mornings and long conversations.</p>
        <LinkArrow>Discover the room</LinkArrow>
        <span className="room-caption">LIVING, NATURALLY.</span>
      </div>
    </div>
  </section>;
}