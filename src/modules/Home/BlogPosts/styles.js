import styled from 'styled-components';

const PostsGrid = styled.div`
  display: grid;
  grid-column-gap: 0.5rem;
  grid-template-columns: repeat(6, 1fr);
  padding: 0.5rem;
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    grid-template-columns: 1fr;
    grid-row-gap: 0.5rem;
    padding: 0.5rem 5rem;
  }
`;

const Post = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 200px;
  display: grid;
  grid-template-rows: 80% 20%;
  cursor: pointer;
  :hover {
    > div:first-child {
      ::before {
        opacity: 0;
      }
    }
    > div:last-child {
      font-size: 1.1rem;
    }
  }
`;

const PostImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ url }) => url}) no-repeat center center/cover;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.white};
    opacity: 0.3;
    transition: 100ms;
  }
`;

const PostContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primaryBlue};
  font-weight: bold;
  transition: 100ms;
  text-align: center;
`;

export { Post, PostsGrid, PostImage, PostContent };
