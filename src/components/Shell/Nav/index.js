import React from 'react';
import {
  Github,
  IconContainer,
  NavItem as Nav,
  NavItems,
  Twitter,
  Linkedin,
} from './styles';

const NavItem = ({ children, to }) => {
  return (
    <Nav exact to={to} activeClassName="active-nav">
      {children}
    </Nav>
  );
};

const Shell = ({ children }) => {
  return (
    <NavItems>
      <IconContainer>
        <a
          href="https://www.github.com/seanhurwitz"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
      </IconContainer>
      <IconContainer>
        <a
          href="https://twitter.com/TheHurwitz"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
        </a>
      </IconContainer>
      <IconContainer>
        <a
          href="https://www.linkedin.com/in/sean-hurwitz-9987a0b8/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
      </IconContainer>
      <NavItem to="/">Home</NavItem>
      {<NavItem to="/about">About</NavItem>}
    </NavItems>
  );
};

export default Shell;
