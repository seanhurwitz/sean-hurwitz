import React, { useState, useEffect } from 'react';
import sanityClient from '../../client';
import { Post, PostsGrid, PostImage, PostContent } from './styles';
import { Link } from 'react-router-dom';

const BlogPosts = () => {
  const [allPostsData, setAllPosts] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
            _id,
            url
          }
        }
      }`,
      )
      .then((data) => setAllPosts(data))
      .catch((e) => console.log('e', e));
  }, []);
  console.log('allPostData', allPostsData);
  return (
    <PostsGrid>
      {allPostsData.map((post) => (
        <Link to={`/${post.slug.current}`}>
          <Post key={post.title}>
            <PostImage url={post.mainImage.asset.url} />
            <PostContent>{post.title}</PostContent>
          </Post>
        </Link>
      ))}
    </PostsGrid>
  );
};

export default BlogPosts;
