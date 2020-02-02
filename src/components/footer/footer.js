import React from 'react';
import styled from 'styled-components';
import seabrookstudios from '../../images/icon.png';

const LayoutFooter = styled.footer`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Legal = styled.p`
  font-family: 'D-DIN';
  font-size: 0.8em;
  color: #757575;
  margin: 0;
  text-align: center;
  padding: 8px;
`;

const SeabrookStudiosIcon = styled.img`
  width: 100px;
  height: auto;
`;

export const SeabrookStudiosLogo = () => (
  <div>
    <a href="https://seabrook-studios.com">
      <SeabrookStudiosIcon src={seabrookstudios} />
    </a>
  </div>
);

const Footer = () => (
  <LayoutFooter>
    <div style={{ marginTop: 16 }}>
      <SeabrookStudiosLogo />
    </div>
    <Legal>© Seabrook Studios 2018.</Legal>
  </LayoutFooter>
);

export default Footer;
