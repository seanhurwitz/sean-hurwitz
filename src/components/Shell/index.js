import React, { Fragment } from 'react';
import { Header, Body, DevDoneRight } from './styles';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Shell = ({ children }) => {
  return (
    <Fragment>
      <Header>
        <Link to="/">
          <DevDoneRight>Dev Done Right</DevDoneRight>
        </Link>
        <Nav />
      </Header>
      <Body>{children}</Body>
    </Fragment>
  );
};

export default Shell;
