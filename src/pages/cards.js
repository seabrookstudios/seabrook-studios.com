import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import CardGroup from '../components/club-card/club-card-group';
import ClubCard from '../components/club-card/club-card';
import GolferCard from '../components/club-card/golfer-card';

const About = ({ data }) => (
  <Layout>
    <Head pageTitle={data.cardsJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.cardsJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
    {data.cardsJson.clubCards.map(({ en, de, it, es }, i) => (
      <CardGroup key={i}>
        <ClubCard image={en} />
        <ClubCard image={de} />
        <ClubCard image={it} />
        <ClubCard image={es} />
      </CardGroup>
    ))}
    {data.cardsJson.golferCards.map(({ en, de, it, es }, i) => (
      <CardGroup key={i}>
        <GolferCard image={en} />
        <GolferCard image={de} />
        <GolferCard image={it} />
        <GolferCard image={es} />
      </CardGroup>
    ))}
    {data.cardsJson.shotCards.map(({ en, de, it, es }, i) => (
      <CardGroup key={i}>
        <GolferCard image={en} />
        <GolferCard image={de} />
        <GolferCard image={it} />
        <GolferCard image={es} />
      </CardGroup>
    ))}
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    cardsJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      clubCards {
        en {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        de {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        it {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        es {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      golferCards {
        en {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        de {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        it {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        es {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      shotCards {
        en {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        de {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        it {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        es {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
