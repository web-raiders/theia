import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen, Basics } from 'styles';
import { Nav } from 'components';
import { Logo } from 'components/svg';

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.div`
  margin-top: 300px;
  svg {
    fill: ${({ theme }) => theme.logo};
    width: 290px;
    height: 290px;
    ${Screen.miniTablet`
      width: 250px;
      height: 250px;
    `};
  }
  ${Screen.largePhone`
    margin-top: 200px;
  `};
  ${Screen.smallPhone`
    margin-top: 100px;
  `};
`;

const BodyText = styled.h2`
  margin-top: -30px;
  text-align: center;
  font-weight: 800;
  font-size: 40px;
  line-height: 80px;
  ${Screen.miniTablet`
    font-size: ${Basics.fontSize.large};
  `};
  font-family: ${Basics.fonts.RadioCanada};
  color: ${({ theme }) => theme.logo};
`;

const App = ({ theme, toggleTheme }: any) => (
    <PageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404</title>
      </Helmet>
      <GlobalStyle />
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <BodyText>
        404
      </BodyText>
      <Nav theme={theme} toggleTheme={toggleTheme}/>
    </PageContainer>
);

export default App;
