import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostsContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  grid-auto-columns: 50% 50%;
  grid-auto-rows: 50% 50%;

  @media ${(props) => props.theme.mobile} {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow-y: visible;
  }

  @media ${(props) => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow-y: visible;
  }
`;

export const PostLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: black;
`;

export const PostBox = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: background-size 3s ease;
  -moz-transition: background-size 3s ease;
  -web-kit-transition: background-size 3s ease;
  :hover {
    text-decoration: underline;
  }

  @media ${(props) => props.theme.mobile} {
    aspect-ratio: 1;
  }

  @media ${(props) => props.theme.tablet} {
    aspect-ratio: 1;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  color: black;
  font-weight: bold;
  margin: 0 0 0.5rem 1rem;
`;

export const Subtitle = styled.div`
  font-size: 1rem;
  color: black;
  margin: 0 0 1rem 1rem;
`;
