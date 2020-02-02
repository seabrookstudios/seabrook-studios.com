import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy, Platforms, Url } from './item.css';

const Item = ({ title, copy, image, url, platforms }) => (
  <figure>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption>
      <Title>{title}</Title>
      <Platforms>{platforms}</Platforms>
      <div style={{ margin: '1rem 2rem 1rem' }}>
        <Url href={url} target="_blank">
          {url}
        </Url>
      </div>
      <Copy>{copy}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  url: PropTypes.string,
  platforms: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
