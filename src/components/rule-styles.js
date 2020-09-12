import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Columns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Column = styled.div`
  flex: 1;
  max-width: 50%;
  margin: 8px;
  padding-right: 4px;
  padding-left: 4px;
`;

export const Callout = styled.div`
  padding: 4px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: c0dc99;
`;
