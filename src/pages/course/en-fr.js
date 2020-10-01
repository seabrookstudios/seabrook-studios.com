import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Head from 'components/head';
import MarkdownStyle from 'markdown.css.js';
import { Columns } from '../../components/rule-styles';
import Content from '../../components/content/course/en-fr';

const Rules = () => (
  <Layout>
    <Head pageTitle="en-fr" />
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
