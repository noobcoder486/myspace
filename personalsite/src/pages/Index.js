import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Shubham Dubey's personal website. Mumbai based Software Developer, "
    + 'Investor, Photographer.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">MY DREAM</h2>
          <p>
            To never settle for less.
          </p>
        </div>
      </header>
      <p> <b>WELCOME</b> to my website. Please feel free to read more <Link to="/about"><b>About me</b></Link>,
        or you can check out my {' '}
        <Link to="/resume"><b>Resume</b></Link>, {' '}
        <Link to="/projects"><b>Projects</b></Link>, {' '}
        view <Link to="/stats"><b>Site Statistics</b></Link>, {' '}
        or <Link to="/contact"><b>Contact</b></Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
