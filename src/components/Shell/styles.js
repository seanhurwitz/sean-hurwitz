import styled from 'styled-components';
import {
  LogoTwitter32,
  LogoGithub32,
  LogoLinkedin32,
} from '@carbon/icons-react';
import { lighten } from 'polished';
import React from 'react';

const styleIcon = (Component) => styled(Component)`
  cursor: pointer;
  & path {
    fill: ${({ theme }) => theme.colors.primaryBlue};
  }
  :hover {
    & path {
      fill: ${({ theme }) => lighten(0.2, theme.colors.primaryBlue)};
    }
  }
`;

const Twitter = styleIcon(LogoTwitter32);
const Github = styleIcon(LogoGithub32);
const Linkedin = styleIcon(LogoLinkedin32);

const Header = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.headerHeight};
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-content: space-between;
  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: ${({ theme }) => theme.mobileWidth}) {
      justify-self: center;
    }
  }
  background: ${({ theme }) => theme.colors.white};
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    grid-template-columns: auto 1fr;
  }
`;

const DevDoneRight = styled.div`
  padding: 0 1rem;
  color: ${({ theme }) => theme.colors.primaryBlue};
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  margin-top: ${({ theme }) => theme.headerHeight};
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
`;

const IconContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  height: ${({ mobile }) => (mobile ? 'auto' : '100%')};
  justify-self: end;
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    display: ${({ mobile }) => (mobile ? 'flex' : 'none')};
  }
`;

const MenuIcon = styled.div`
  padding: 0.5rem 1rem;
  justify-self: end;
  height: 100%;
  width: ${({ theme }) => theme.headerHeight};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.mobileWidth}) {
    display: none;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.primaryBlue};
  border-radius: 100px;
`;

const SideMenuIcon = ({ onClick }) => (
  <MenuIcon onClick={onClick}>
    <Line />
    <Line />
    <Line />
  </MenuIcon>
);

export {
  Header,
  Body,
  DevDoneRight,
  Twitter,
  Github,
  IconContainer,
  Linkedin,
  Icons,
  SideMenuIcon,
};
