import React from 'react';
import LandingPage from './LandingPage';
import Timeline from './Timeline';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <div className={classes.Home}>
      <LandingPage />
      <Timeline />
    </div>
  );
};

export default Home;
