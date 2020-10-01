import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Layout from 'components/layout';
import Head from 'components/head';

const Cards = () => (
  <Layout>
    <Head pageTitle="Card Translations" />
    <div
      style={{
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-evenly',
        padding: 16,
        marginBottom: 400,
      }}
    >
      <Link to="/cards/en-de">Show German</Link>
      <Link to="/cards/en-it">Show Italian</Link>
      <Link to="/cards/en-es">Show Spanish</Link>
      <Link to="/cards/en-fr">Show French</Link>
    </div>
  </Layout>
);

Cards.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Cards;
