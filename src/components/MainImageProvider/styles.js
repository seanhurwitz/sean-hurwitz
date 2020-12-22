import styled from 'styled-components';

const MainImageContainer = styled.div`
  width: 100%;
  height: 60vh;
  background: url(${({ img }) => img}) no-repeat center center/cover;
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

export { MainImageContainer };
