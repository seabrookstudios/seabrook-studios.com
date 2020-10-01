import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Head from 'components/head';
import MarkdownStyle from 'markdown.css.js';
import { Columns } from '../../components/rule-styles';
import Content from '../../components/content/course/en-es.js';

const Rules = () => (
  <Layout>
    <Head pageTitle="en-es" />
    <Columns className="markdown">
      <MarkdownStyle />
      <Content />
    </Columns>
  </Layout>
);

Rules.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Rules;
