import React, { useState, useEffect } from 'react';
import classes from './LandingPage.module.css';
const LandingPage = () => {
  const [bgClasses, setBgClasses] = useState(classes.LowerOpacity);
  useEffect(() => {
    setTimeout(() => {
      setBgClasses(classes.HigherOpacity);
    }, 2000);
  }, []);
  return (
    <div className={classes.LandingPage}>
      <div className={`${classes.Dark} ${bgClasses}`}></div>
      <div className={`${classes.Text} ${bgClasses}`}>
        <h1>Development</h1>
        <h2>done right</h2>
      </div>
    </div>
  );
};

export default LandingPage;
