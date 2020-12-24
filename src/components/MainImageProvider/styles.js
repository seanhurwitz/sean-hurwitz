import styled from 'styled-components';

const MainImageContainerParent = styled.div`
  width: 100%;
  height: 60vh;
  overflow: hidden;
  > div {
    transition: transform 3s, background-image 100ms;
  }
  :hover {
    > div {
      transform: scale(1.1);
    }
  }
`;

const MainImageContainerChild = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ img }) => img}) no-repeat center center/cover;
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    background-size: auto 100%;
    background-position: left center;
  }
  position: relative;
  ::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${({ theme }) => theme.colors.white};
    opacity: ${({ imgOverlay }) => (imgOverlay ? '0.6' : '0')};
    z-index: 1;
  }
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainImageContainer = ({ img, children, imgOverlay }) => (
  <MainImageContainerParent>
    <MainImageContainerChild img={img} imgOverlay={imgOverlay}>
      {children}
    </MainImageContainerChild>
  </MainImageContainerParent>
);

export { MainImageContainer, LoadingContainer };
