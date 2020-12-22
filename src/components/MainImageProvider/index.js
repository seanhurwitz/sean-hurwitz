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
        <MainImageContainer img={img || homeBg}>
          {imageInner}
        </MainImageContainer>
      )}
      {children}
    </MainImageContext.Provider>
  );
};

export { MainImageProvider, MainImageContext };
