import React from 'react';
import Nav from '../Nav';
import { SideMenuContainer } from './styles';
import Icons from '../Icons';

const SideMenu = ({ showSideMenu, toggleSideMenu }) => {
  return (
    <SideMenuContainer show={showSideMenu} onClick={toggleSideMenu}>
      <Icons mobile />
      <Nav mobile />
    </SideMenuContainer>
  );
};

export default SideMenu;
