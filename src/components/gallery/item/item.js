import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy, Platforms, Status, Url } from './item.css';

const Item = ({ title, copy, image, url, platforms, status }) => (
  <figure>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption>
      <Title>{title}</Title>
      <Platforms>{platforms}</Platforms>
      <Status>{status}</Status>
      <Copy>{copy}</Copy>
      <Url to={url}>{url}</Url>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  url: PropTypes.string,
  platforms: PropTypes.string,
  status: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
