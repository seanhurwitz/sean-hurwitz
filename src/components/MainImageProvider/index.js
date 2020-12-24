import React, { useState } from 'react';
import HeartSpinner from '../HeartSpinner';
import MainImageContext from './context';
import { LoadingContainer, MainImageContainer } from './styles';

const MainImageProvider = ({ children }) => {
  const [showImage, setShowImage] = useState(true);
  const [imageInner, setImageInner] = useState();
  const [img, setImg] = useState();
  const [loading, setLoading] = useState(false);
  const [imgOverlay, setImgOverlay] = useState(true);

  return (
    <MainImageContext.Provider
      value={{
        setShowImage,
        setImageInner,
        setImg,
        setLoading,
        setImgOverlay,
        loading,
      }}
    >
      {loading ? (
        <LoadingContainer>
          <HeartSpinner />
        </LoadingContainer>
      ) : (
        showImage && (
          <MainImageContainer
            imgOverlay={imgOverlay}
            img={
              img ||
              'https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3366&q=80'
            }
          >
            {imageInner}
          </MainImageContainer>
        )
      )}
      {children}
    </MainImageContext.Provider>
  );
};

export { MainImageProvider, MainImageContext };
