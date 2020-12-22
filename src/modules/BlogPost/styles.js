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
`;

export { Title, Content };
