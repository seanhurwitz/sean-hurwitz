import React from 'react';
import { NavItem as Item, NavItems } from './styles';

const NavItem = ({ children, to }) => {
  return (
    <Item exact to={to} activeClassName="active-nav">
      {children}
    </Item>
  );
};

const Nav = ({ mobile }) => {
  return (
    <NavItems mobile={mobile}>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
    </NavItems>
  );
};

export default Nav;
