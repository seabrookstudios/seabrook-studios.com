import React from 'react';
import { Container } from './nav.css';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'gatsby';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <SocialIcon
          url="https://twitter.com/seabrookstudios"
          bgColor="white"
          fgColor="#222"
        />
      </li>
      <li>
        <SocialIcon
          url="mailto:hi@seabrook-studios.com"
          bgColor="white"
          fgColor="#222"
        />
      </li>
      <li>
        <SocialIcon
          url="https://medium.com/seabrook-studios/"
          bgColor="white"
          fgColor="#222"
        />
      </li>
      <li>
        <SocialIcon
          url="https://instagram.com/seabrookstudios/"
          bgColor="white"
          fgColor="#222"
        />
      </li>
      <li>
        <Link to="/presskit/index.html">PRESS KIT</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
