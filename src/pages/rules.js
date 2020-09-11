import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from 'components/layout';
import Head from 'components/head';
import MarkdownStyle from 'markdown.css.js';

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Column = styled.div`
  flex: 1;
  max-width: 50%;
  margin: 8;
`;

const Rules = ({ data }) => (
  <Layout>
    <Head pageTitle={data.rulesJson.title} />
    <Columns>
      <MarkdownStyle />
      <Column>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{
            __html: data.rulesJson.en.childMarkdownRemark.html,
          }}
        />
      </Column>
      <Column>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{
            __html: data.rulesJson.de.childMarkdownRemark.html,
          }}
        />
      </Column>
    </Columns>
  </Layout>
);

Rules.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Rules;

export const query = graphql`
  query RulesQuery {
    rulesJson {
      title
      en {
        childMarkdownRemark {
          html
        }
      }
      de {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
