import React from 'react';
import {
  Icons as IconsContainer,
  IconContainer,
  Github,
  Twitter,
  Linkedin,
} from './styles';

const Icons = ({ mobile }) => {
  return (
    <IconsContainer mobile={mobile}>
      <IconContainer>
        <a
          href="https://www.github.com/seanhurwitz"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
      </IconContainer>
      <IconContainer>
        <a
          href="https://twitter.com/TheHurwitz"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
        </a>
      </IconContainer>
      <IconContainer>
        <a
          href="https://www.linkedin.com/in/sean-hurwitz-9987a0b8/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
      </IconContainer>
    </IconsContainer>
  );
};

export default Icons;
