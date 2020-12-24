import styled from 'styled-components';

const Me = styled.div`
  position: absolute;
  left: 4vw;
  top: 230px;
  z-index: 2000;
  font-family: 'Patrick Hand SC', cursive;
  font-size: 8rem;
  transform: rotate(-20deg);
  padding: 0 2rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 100px 100px 0 100px;
  color: ${({ theme }) => theme.colors.primaryBlue};
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    top: 150px;
    font-size: 5rem;
  }
`;
const Filler = styled.div`
  cursor: none;
  position: absolute;
  right: 6vw;
  top: 100px;
  z-index: 2000;
  width: 700px;
  font-family: 'Patrick Hand SC', cursive;
  font-size: 3rem;
  transform: rotate(5deg);
  padding: 2rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 100px 100px 100px 0;
  color: ${({ theme }) => theme.colors.primaryBlue};
  text-align: center;
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    display: none;
  }
  :hover {
    opacity: 0;
  }
`;

export { Me, Filler };
