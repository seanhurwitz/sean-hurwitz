import BlockContent from '@sanity/block-content-to-react';
import groq from 'groq';
import React, { useContext, useEffect, useState } from 'react';
import sanityClient from '../../client';
import { MainImageContext } from '../../components';
import { Content, Title } from './styles';

const BlogPost = ({ match }) => {
  const [post, setPost] = useState({});
  const { setImg, setImageInner, setLoading } = useContext(
    MainImageContext,
  );
  const { slug } = match.params;
  useEffect(() => {
    setLoading(true);
    sanityClient
      .fetch(
        groq`*[slug.current == $slug]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
         }
       },
     body,
    "name": author->name,
    "authorImage": author->image
   }`,
        { slug },
      )
      .then((data) => {
        setLoading(false);
        setPost(data[0]);
        setImg(data[0].mainImage.asset.url);
        setImageInner(<Title>{data[0].title}</Title>);
      });
    return () => {
      setImg(null);
      setImageInner(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);
  return (
    <Content>
      <BlockContent
        blocks={post.body}
        projectId={sanityClient.clientConfig.projectId}
        dataset={sanityClient.clientConfig.dataset}
      />
    </Content>
  );
};

export default BlogPost;
