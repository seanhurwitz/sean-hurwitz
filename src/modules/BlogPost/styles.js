import styled from 'styled-components';

const Title = styled.div`
  position: absolute;
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
`;

export { Title };
