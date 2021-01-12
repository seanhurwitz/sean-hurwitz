import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import me from '../../assets/me-hd.jpg';
import { MainImageContext } from '../../components';
import { Content, Header, Paragraph } from './styles';

const About = () => {
  const { setImg, setImgOverlay } = useContext(MainImageContext);
  useEffect(() => {
    setImg(me);
    setImgOverlay(false);
    return () => {
      setImg();
      setImgOverlay(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Content>
      <Header>Who Am I?</Header>
      <Paragraph>
        Fitness enthusiast, squash fanatic, part-time golfer. A proud
        husband and father of a growing brood. But ultimately a guy
        with a passion for all things dev. That's why I made this
        site. That's why you're here.
      </Paragraph>
      <Header>What Can I Share?</Header>
      <Paragraph>
        In October 2019 I didn't know what an IDE was. by December
        2020 I am shipping production code and have become the lead
        developer for two systems where I work. I have built several
        side projects such as a functional personal shopping web app
        for a relative. Through strictly unorthodox methods, along
        with massive help and guidance from my wonderful job, I
        managed to upskill and unlock an entirely new world of
        possibility for myself, both personally and professionally.
        <p />
        This is, in a way,{' '}
        <Link to="/born-to-code">what I always wanted to be</Link>. A
        creator of worlds.
        <p />I believe this path is accessible to anybody who is
        willing to try. That's why I have created this site: to help
        you on your own journey of code. I want to break down the
        perceptions of development that I used to have. Throughout the
        articles and my random thoughts, I try best explain my own
        journey and, utilizing my love of teaching and sharing, try to
        apply it to you and give you small pearls of wisdom from my
        own experience.
        <p />A world of creativity and infinite potential is within
        your grasp, and I'm here to help unlock it along with you.
      </Paragraph>
      <Header>So What Can I Find Here?</Header>
      <Paragraph>
        You will find thought-provoking, short reads about how I came
        to code, and great tips along the way.
        <p />
        You will find step-by-step tutorials from beginner to advanced
        that will help set you up in your environment, jump start your
        journey of code, and give you that extra finesse that will
        really distinguish you in the world of development.
        <p />
        Overall, I hope you will find that coding is just plain FUN,
        and find that sense of excitement from building really cool
        stuff.
        <p />
        Enjoy, and happy coding!
      </Paragraph>
    </Content>
  );
};

export default About;
