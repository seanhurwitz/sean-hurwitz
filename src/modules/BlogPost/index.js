import React, {
  useContext,
  useEffect,
  Fragment,
  useState,
} from 'react';
import { MainImageContext } from '../../components';
import { Title } from './styles';
import sanityClient from '../../client';
import groq from 'groq';

const BlogPost = ({ match }) => {
  const [post, setPost] = useState({});
  const { setImg, setImageInner } = useContext(MainImageContext);
  const { slug } = match.params;
  useEffect(() => {
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
        setPost(data[0]);
        setImg(data[0].mainImage.asset.url);
        setImageInner(<Title>{data[0].title}</Title>);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {
      setImg(null);
      setImageInner(null);
    };
  }, [slug]);
  console.log('post', post);
  return <div>{slug}</div>;
};

export default BlogPost;
