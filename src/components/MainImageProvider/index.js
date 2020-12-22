import React, { useState } from 'react';
import { MainImageContainer } from './styles';
import homeBg from '../../assets/landingPage.jpeg';
import MainImageContext from './context';

const MainImageProvider = ({ children }) => {
  const [showImage, setShowImage] = useState(true);
  const [imageInner, setImageInner] = useState();
  const [img, setImg] = useState();

  return (
    <MainImageContext.Provider
      value={{ setShowImage, setImageInner, setImg }}
    >
      {showImage && (
        <MainImageContainer
          img={
            img ||
            'https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3366&q=80'
          }
        >
          {imageInner}
        </MainImageContainer>
      )}
      {children}
    </MainImageContext.Provider>
  );
};

export { MainImageProvider, MainImageContext };
