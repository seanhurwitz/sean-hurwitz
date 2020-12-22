import React from 'react';
import {
  Header,
  SplashContainer,
  SplashImage,
  Title,
} from './styles';

const LandingScreen = () => {
  return (
    <Header>
      <SplashImage>
        <SplashContainer>
          <h1>The Story</h1>
          <h2>
            of a guy who went from mediocre spreadsheet skills to full
            stack developer
          </h2>
          <h3>In a little under a year</h3>
          <h2>And how you can too!</h2>
        </SplashContainer>
      </SplashImage>
    </Header>
  );
};

export default LandingScreen;
