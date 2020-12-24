import React, { Fragment, useContext, useEffect } from 'react';
import me from '../../assets/me-hd.jpg';
import { MainImageContext } from '../../components';
import { Filler, Me } from './styles';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>AB00T MEE</div>;
};

export default About;
