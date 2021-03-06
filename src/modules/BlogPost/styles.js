import styled from 'styled-components';

const Title = styled.div`
  position: absolute;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  font-size: 10rem;
  font-weight: 600;
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    font-size: 5rem;
  }
`;

const Content = styled.div`
  width: 50%;
  margin: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  & figure {
    text-align: center;
  }
  & * {
    margin-bottom: 1.25rem;
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
    line-height: 2rem;
  }
  & img {
    max-width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    width: 100%;
    & img {
      width: 100%;
    }
  }
  & blockquote {
    margin-left: 2rem;
    padding-left: 1rem;
    border-left: 5px solid ${({ theme }) => theme.colors.lightGrey};
    font-size: 1.25rem;
    font-style: italic;
  }
  & ul {
    margin-left: 2rem;
  }
  & h1 {
    font-size: 2.5rem;
    line-height: 3rem;
  }
  & a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primaryBlue};
  }
`;

export { Title, Content };
