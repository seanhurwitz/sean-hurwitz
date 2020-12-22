import styled from 'styled-components';

const SplashContainer = styled.div`
  position: absolute;
  right: 10%;
  top: 10%;
  height: 80%;
  z-index: 2;
  width: 600px;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  & * {
    text-align: center;
  }
  & h1 {
    font-size: 6rem;
  }
  & h2 {
    font-size: 2.25rem;
  }
  & h3 {
    font-size: 1rem;
    font-style: italic;
  }
`;

const BlogPostsHeader = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primaryBlue};
  font-size: 3rem;
`;

export { SplashContainer, BlogPostsHeader };
