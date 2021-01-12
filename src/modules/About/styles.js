import styled from 'styled-components';
import { lighten } from 'polished';

const Content = styled.div`
  width: 60%;
  margin: auto;
  padding: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    width: 100%;
  }
`;

const Header = styled.div`
  padding: 1rem 2rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primaryBlue};
  border-left: 8px solid ${({ theme }) => theme.colors.primaryBlue};
  margin-bottom: 3rem;
`;

const Paragraph = styled.div`
  width: 90%;
  margin-left: auto;
  /* border: 3px solid ${({ theme }) => theme.colors.lightGrey}; */
  background: ${({ theme }) => lighten(0.05, theme.colors.lightGrey)};
  padding: 1.5rem 2rem;
  font-size: 1.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.darkGrey};
  line-height: 2.5rem;
  text-align: justify;
  text-justify: inter-word;
  & a {
    color: ${({ theme }) => theme.colors.primaryBlue};
    text-decoration: underline;
  }
  & p {
    margin: 1rem 0;
  }
`;

export { Content, Header, Paragraph };
