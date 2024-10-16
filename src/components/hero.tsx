import React from 'react';
import styled from 'styled-components';
import { Basics, Screen, Decors } from 'styles';
import { content } from 'config';
import Socials from './socials';

const HeroContainer = styled.div`
${Decors.animate.fadeIn(4)};
  position: relative;
  display: flex;
  flex-direction: column;
  height: 20vh;
  margin: 150px 320px 0px 350px;
  ${Screen.xlargeScreen`
    margin: 100px 150px 100px 150px;
  `};
  ${Screen.largeScreen`
    margin: 100px 100px 100px 100px;
  `};
  ${Screen.pad`
    margin: 100px 20px 100px 20px;
  `};
  ${Screen.tablet`
    margin: 100px 20px 100px 20px;
  `};
  ${Screen.largePhone`
    margin: 100px 20px 100px 20px;
  `};
  ${Screen.smallPhone`
    margin: 0px 30px 0px 20px;
  `};
`;

const Title = styled.h1`
  font-size: ${Basics.fontSize.large};
  margin: 0;
  ${Screen.largePhone`
  font-size: 40px;
  `};
  ${Screen.smallPhone`
    font-size: 40px;
  `};
`;
const SubTitle = styled.h2`
  
  margin: 0px 0px 0px 0px;
  font-size: ${Basics.fontSize.small};
`;
const BodyText = styled.p`
  font-weight: 500;
  font-size: 15px;
  ${Screen.largePhone`
    font-size: ${Basics.fontSize.small};
  `};
  a {
    ${Decors.inLine};
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 30px;
  width: 90px;
  height: 90px;
  content: url(${({ theme }) => theme.loader});
  ${Screen.miniTablet`
    width: 55px;
    height: 55px;
  `};
`;

const App = () => (
  <HeroContainer>
    <LogoContainer />
    <Title>Web Raiders Studio</Title>
    <SubTitle>Product. Design. Develop.</SubTitle>
    <BodyText dangerouslySetInnerHTML={{ __html: content.bodyText }} />
    <Socials />
  </HeroContainer>
);

export default App;
