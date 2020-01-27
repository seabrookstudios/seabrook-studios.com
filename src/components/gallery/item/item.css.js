import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  color: #757575;
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const Platforms = styled.p`
  color: #757575;
  font-size: 1.5rem;
  margin: 0 2rem 0rem;
`;

export const Status = styled.p`
  color: #757575;
  font-size: 1.5rem;
  margin: 0 2rem 2rem;
  min-height: 1.75rem;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;

export const Url = styled.a`
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
