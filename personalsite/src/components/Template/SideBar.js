import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/dsx2.jpg`} alt="profile pic" />
      </Link>
      <header>
        <h2>SHUBHAM DUBEY</h2>
        <p><a href="mailto:shubhamk3120@gmail.com">shubhamk3120@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Shubham. I love implementing tech-hacks for developing growth-based strategies
        I am a Computer Science Gradudate and a Software Developer.
        Apart from this,
        I am a self-learned <b>Investor</b>
        , <b>Mentor</b>
        , a tech-freak <b>Developer</b>
        , a passionate <b>Photographer</b>
        , a practicing <b>Blogger</b>
        , and an curious <b>Cyberpunk</b>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; 2022 |SHUBHAM DUBEY</p>
    </section>
  </section>
);

export default SideBar;
