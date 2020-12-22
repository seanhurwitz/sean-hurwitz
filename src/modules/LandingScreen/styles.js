import styled from 'styled-components';
import bg from '../../assets/landingPage.jpeg';

const Header = styled.div`
  width: 100%;
  position: relative;
  background: ${({ theme }) => theme.colors.white};
`;

const SplashImage = styled.div`
  width: 100%;
  height: 60vh;
  background: url(${bg}) no-repeat center center/cover;
  position: relative;
  ::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${({ theme }) => theme.colors.white};
    opacity: 0.6;
    z-index: 1;
  }
`;

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
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  & * {
    text-align: center;
    padding: 1rem 0.5rem;
  }
  & h1 {
    font-size: 4rem;
  }
  & h2 {
    font-size: 2.25rem;
  }
  & h3 {
    font-size: 1rem;
    font-style: italic;
  }
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.primaryBlue};
  font-size: 2rem;
`;

export { Header, Title, SplashImage, SplashContainer };
