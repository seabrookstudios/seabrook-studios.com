import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Item = ({ title, image }) => (
  <figure>
    <Img
      fluid={image ? image.childImageSharp.fluid : {}}
      alt={title}
      style={{ width: 300, margin: 4 }}
    />
    <figcaption>{title}</figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
