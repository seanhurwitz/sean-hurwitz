import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import config from '../../../config';

const Header = (props) => {
  const [windowScroll, setWindowScroll] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setWindowScroll(window.scrollY);
    });
  }, [windowScroll]);
  const headerStyle = windowScroll >= 100 && classes.HeaderScrollDown;
  return (
    <div className={`${classes.Header} ${headerStyle}`}>
      <h1>SEAN HURWITZ</h1>
      <ul>
        {config.pages.map((page) => (
          <NavLink
            key={page}
            to={`/${page}`}
            exact
            activeClassName={classes.Active}
          >
            {page.toUpperCase()}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Header;
