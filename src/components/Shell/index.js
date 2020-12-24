import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Icons from './Icons';
import Nav from './Nav';
import SideMenu from './SideMenu';
import { Body, DevDoneRight, Header, SideMenuIcon } from './styles';

const Shell = ({ children }) => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const toggleSideMenu = () => setShowSideMenu((prev) => !prev);
  console.log('showSideMenu', showSideMenu);
  return (
    <Fragment>
      <Header>
        <Link to="/">
          <DevDoneRight>Dev Done Right</DevDoneRight>
        </Link>
        <Icons />
        <Nav />
        <SideMenuIcon onClick={toggleSideMenu} />
      </Header>
      <SideMenu
        showSideMenu={showSideMenu}
        toggleSideMenu={toggleSideMenu}
      />
      <Body>{children}</Body>
    </Fragment>
  );
};

export default Shell;
