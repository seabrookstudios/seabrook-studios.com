import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import CardGroup from '../../components/club-card/club-card-group';
import ClubCard from '../../components/club-card/club-card';
import GolferCard from '../../components/club-card/golfer-card';

const CardsFrench = ({ data }) => (
  <Layout>
    <Head pageTitle={data.cardsJson.title} />
    <div
      style={{
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-evenly',
        padding: 16,
        marginBottom: 16,
      }}
    >
      <Link to="/cards/en-de">Show German</Link>
      <Link to="/cards/en-it">Show Italian</Link>
      <Link to="/cards/en-es">Show Spanish</Link>
      <Link to="/cards/en-fr">Show French</Link>
    </div>
    <h1 style={{ textAlign: 'center', fontWeight: 'bold', padding: 16 }}>
      English - French
    </h1>
    {data.cardsJson.clubCards.map(({ en, fr }, i) => (
      <CardGroup key={i}>
        <ClubCard image={en} />
        <ClubCard image={fr} />
      </CardGroup>
    ))}
    {data.cardsJson.golferCards.map(({ en, fr }, i) => (
      <CardGroup key={i}>
        <GolferCard image={en} />
        <GolferCard image={fr} />
      </CardGroup>
    ))}
    {data.cardsJson.shotCards.map(({ en, fr }, i) => (
      <CardGroup key={i}>
        <GolferCard image={en} />
        <GolferCard image={fr} />
      </CardGroup>
    ))}
  </Layout>
);

CardsFrench.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardsFrench;

export const query = graphql`
  query CardsFrench {
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
        fr {
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
        fr {
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
        fr {
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
