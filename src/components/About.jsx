import React from 'react';
import aboutpic from '../assets/Picture3.jpg'

export function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={aboutpic} alt="Profile" className="about-img" />
        <p>
          I'm a creative soul who thrives at the intersection of design and technology. From crafting elegant typography to building interactive web apps, I love bringing ideas to life.
        </p>
        <p>
          This blog is my space to share stories, tips, and lessons learned from projects or coding React apps. Join me on this journey of creativity and discovery!
        </p>
        <p className="signature">— Jessica</p>
      </div>
    </section>
  );
}