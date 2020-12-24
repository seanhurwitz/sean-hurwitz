import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.headerHeight};
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  background: ${({ theme }) => theme.colors.white};
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const DevDoneRight = styled.div`
  padding: 0 1rem;
  color: ${({ theme }) => theme.colors.primaryBlue};
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  margin-top: ${({ theme }) => theme.headerHeight};
  width: 100%;
`;

export { Header, Body, DevDoneRight };
