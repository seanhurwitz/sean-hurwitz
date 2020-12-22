import React, { Fragment } from 'react';
import { Header, Body, DevDoneRight } from './styles';

const Shell = ({ children }) => {
  return (
    <Fragment>
      <Header>
        <DevDoneRight>.devDoneRight</DevDoneRight>
      </Header>
      <Body>{children}</Body>
    </Fragment>
  );
};

export default Shell;
