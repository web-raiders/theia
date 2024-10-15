import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';
import {
  Nav,
  Hero,
} from 'components';

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px 180px 30px 200px;
  ${Screen.tablet`
    margin: 10px 80px 100px 80px;
  `};
  ${Screen.miniTablet`
    margin: 100px 50px 100px 50px;
  `};
  ${Screen.largePhone`
    margin: 50px 10px 30px 10px;
  `};
`;

const App = ({ theme, toggleTheme }: any) => (
      <AppContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Web Raiders</title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content='Web Raiders Studio' />
          <meta name="twitter:description" content='Design. Develop. Deploy.' />
          <meta name="twitter:image" content='https://lh3.googleusercontent.com/d/1XAy4QI3D6fHVQGN1GkWog2PEswwLGhQn=w1000' />
        </Helmet>
        <GlobalStyle />
        <Hero />
        <Nav theme={theme} toggleTheme={toggleTheme}/>
      </AppContainer>
);

export default App;
