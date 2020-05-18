import React from 'react';
import classes from './Timeline.module.css';
const Timeline = () => {
  return (
    <div className={classes.Timeline}>
      <h3>START</h3>
      <div className={classes.Content}>
        <div className={classes.LeftSide}>LEFT</div>
        <div className={classes.Line}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={classes.RightSide}>RIGHT</div>
      </div>
    </div>
  );
};

export default Timeline;
