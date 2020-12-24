import React, { useState, useEffect } from 'react';
import sanityClient from '../../../client';
import { Post, PostsGrid, PostImage, PostContent } from './styles';
import { Link } from 'react-router-dom';
import groq from 'groq';

const BlogPosts = () => {
  const [allPostsData, setAllPosts] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        groq`*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
            _id,
            url
          },
          _createdAt
        }
      } | order(_createdAt desc)`,
      )
      .then((data) => setAllPosts(data))
      .catch((e) => console.log('e', e));
  }, []);
  console.log('allPostData', allPostsData);
  return (
    <PostsGrid>
      {allPostsData.map((post) => (
        <Link key={post.slug.current} to={`/${post.slug.current}`}>
          <Post>
            <PostImage url={post.mainImage.asset.url} />
            <PostContent>{post.title}</PostContent>
          </Post>
        </Link>
      ))}
    </PostsGrid>
  );
};

export default BlogPosts;
