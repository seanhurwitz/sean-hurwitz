import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  LogoTwitter32,
  LogoGithub32,
  LogoLinkedin32,
} from '@carbon/icons-react';
import { lighten } from 'polished';

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

const NavItems = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  & .active-nav {
    color: ${({ theme }) => theme.colors.primaryBlue};
    ::before {
      content: '';
      width: 100%;
      height: 5px;
      position: absolute;
      bottom: 0;
      background: ${({ theme }) => theme.colors.primaryBlue};
    }
    :hover {
      ::before {
        height: 15px;
        transition: 100ms;
      }
    }
  }
`;

const NavItem = styled(NavLink)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.5rem;
  text-transform: uppercase;
  width: 150px;
  position: relative;
  ::before {
    content: '';
    width: 100%;
    height: 0px;
    position: absolute;
    bottom: 0;
    background: ${({ theme }) => theme.colors.primaryBlue};
  }
  :hover {
    background: ${({ theme }) => theme.colors.lightGrey};
    ::before {
      height: 15px;
      transition: 100ms;
    }
  }
`;

const IconContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Twitter = styleIcon(LogoTwitter32);
const Github = styleIcon(LogoGithub32);
const Linkedin = styleIcon(LogoLinkedin32);

export {
  NavItems,
  NavItem,
  Twitter,
  Github,
  IconContainer,
  Linkedin,
};
