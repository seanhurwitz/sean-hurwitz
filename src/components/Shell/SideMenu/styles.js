import styled from 'styled-components';

const SideMenuContainer = styled.div`
  position: fixed;
  width: 100vw;
  top: ${({ theme }) => theme.headerHeight};
  height: calc(100vh - ${({ theme }) => theme.headerHeight});
  background: ${({ theme }) => theme.colors.white};
  z-index: 1000000;
  left: ${({ show }) => (show ? '0' : '-1000px')};
  transition: 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  @media (min-width: ${({ theme }) => theme.mobileWidth}) {
    display: none;
  }
`;

export { SideMenuContainer };
