import React, { Fragment } from 'react';
import { Header, Body, DevDoneRight } from './styles';
import { Link } from 'react-router-dom';

const Shell = ({ children }) => {
  return (
    <Fragment>
      <Header>
        <Link to="/">
          <DevDoneRight>.devDoneRight</DevDoneRight>
        </Link>
      </Header>
      <Body>{children}</Body>
    </Fragment>
  );
};

export default Shell;
