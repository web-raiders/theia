import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Screen } from 'styles';
import { Toggle } from 'utils';

const NavContainer = styled.div`
  position: fixed;
  height: 10vh;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.body};
  width: 100%;
  ${Screen.largePhone`
    height: 50px;
  `};
`;


const Nav = ({ toggleTheme }: any) => (
    <NavContainer>
        <Toggle toggleTheme={toggleTheme} />
    </NavContainer>
);

export default Nav;
