import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavItems = styled.div`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
  ${({ mobile }) =>
    !mobile
      ? css`
          @media (max-width: ${({ theme }) => theme.mobileWidth}) {
            display: none;
          }
        `
      : css`
          width: 100%;
          & a {
            width: 100%;
          }
        `}
  align-items: center;
  height: ${({ mobile }) => (mobile ? 'auto' : '100%')};
  & .active-nav {
    color: ${({ theme }) => theme.colors.primaryBlue};
    ::before {
      content: '';
      width: 100%;
      height: 5px;
      position: absolute;
      bottom: 0;
      background: ${({ theme }) => theme.colors.primaryBlue};
    }
    :hover {
      ::before {
        height: 15px;
        transition: 100ms;
      }
    }
  }
`;

const NavItem = styled(NavLink)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.5rem;
  text-transform: uppercase;
  width: 150px;
  position: relative;
  ::before {
    content: '';
    width: 100%;
    height: 0px;
    position: absolute;
    bottom: 0;
    background: ${({ theme }) => theme.colors.primaryBlue};
  }
  :hover {
    background: ${({ theme }) => theme.colors.lightGrey};
    ::before {
      height: 15px;
      transition: 100ms;
    }
  }
`;

export { NavItems, NavItem };
