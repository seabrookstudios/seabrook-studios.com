import React from 'react';
import styled from 'styled-components';
import { Container } from './nav.css';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'gatsby';

const TextLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

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
          url="https://instagram.com/seabrookstudios/"
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
      <TextLi>
        <Link to="/presskit/index.html">PRESS KIT</Link>
      </TextLi>
    </ul>
  </Container>
);

export default Nav;
