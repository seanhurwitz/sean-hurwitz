import React, { useContext, useEffect, Fragment } from 'react';
import { MainImageContext } from '../../components';
import BlogPosts from './BlogPosts';
import { SplashContainer, BlogPostsHeader } from './styles';

const Home = () => {
  const { setImageInner } = useContext(MainImageContext);
  useEffect(() => {
    setImageInner(
      <SplashContainer>
        <h1>The Story</h1>
        <h2>
          of a guy who went from mediocre spreadsheet skills to full
          stack developer
        </h2>
        <h3>In a little under a year</h3>
        <h2>And how you can too!</h2>
      </SplashContainer>,
    );
    return () => {
      setImageInner(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      <BlogPostsHeader>
        My latest thoughts, ideas and tips.
      </BlogPostsHeader>
      <BlogPosts />
    </Fragment>
  );
};

export default Home;
