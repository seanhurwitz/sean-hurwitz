import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.headerHeight};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  padding: 0.5rem;
  & a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const DevDoneRight = styled.div`
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
