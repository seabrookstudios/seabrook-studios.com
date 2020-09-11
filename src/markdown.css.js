import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  .markdown {
    ol, ul {
      list-style: disc inside none;
    }

    html {font-size: 100%;} /*16px*/

    body {
      background-color: white;
      font-weight: 400;
      line-height: 1.65;
      color: #333;
    }
    
    p {margin-bottom: 1.15rem;}

    em {
      font-style: italic;
    }
    
    h1, h2, h3, h4, h5 {
      margin: 2.75rem 0 1.05rem;
      font-weight: 400;
      line-height: 1.15;
      text-transform: uppercase;
    }
    
    h1 {
      margin-top: 0;
      font-size: 2.488em;
    }
    
    h2 {font-size: 2.074em;}
    
    h3 {font-size: 1.728em;}
    
    h4 {font-size: 1.44em;}
    
    h5 {font-size: 1.2em;}
    
    small, .text_small {font-size: 0.833em;}
  }
`;
