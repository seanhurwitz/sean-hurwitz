import BlockContent from '@sanity/block-content-to-react';
import groq from 'groq';
import React, { useContext, useEffect, Fragment } from 'react';
import sanityClient from '../../client';
import { MainImageContext } from '../../components';
import { Me, Filler } from './styles';
import me from '../../assets/me-hd.jpg';

const About = () => {
  const { setImg, setImageInner, setImgOverlay } = useContext(
    MainImageContext,
  );
  useEffect(() => {
    setImg(me);
    setImgOverlay(false);
    setImageInner(
      <Fragment>
        <Me>Hello!</Me>
        <Filler>
          There's a lot of space here. I'd better fill it. Unless you
          like mesmerising walls. If you do, just bring your mouse
          HERE.
        </Filler>
      </Fragment>,
    );
    return () => {
      setImg();
      setImgOverlay(true);
      setImageInner();
    };
  });
  return <div>AB00T MEE</div>;
};

export default About;
