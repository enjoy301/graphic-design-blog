import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: black;
`;

const StyledThumbnailDiv = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: background-size 3s ease;
  -moz-transition: background-size 3s ease;
  -web-kit-transition: background-size 3s ease;
  :hover {
    background-size: 110%;
  }
`;

const StyledThumbnailTitle = styled.div`
  font-size: 2rem;
  color: black;
  font-weight: bold;
  margin: 0 0 0.5rem 1rem;
`;

const StyledThumbnailSubtitle = styled.div`
  font-size: 1rem;
  color: black;
  margin: 0 0 1rem 1rem;
`;

interface MenuItemProps {
  to: string;
  imageUrl: string;
  title: string;
  subtitle: string;
}

export default function Thumbnail({
  to,
  imageUrl,
  title,
  subtitle,
}: MenuItemProps) {
  return (
    <StyledLink to={to}>
      <StyledThumbnailDiv imageUrl={imageUrl}>
        <StyledThumbnailTitle>{title}</StyledThumbnailTitle>
        <StyledThumbnailSubtitle>{subtitle}</StyledThumbnailSubtitle>
      </StyledThumbnailDiv>
    </StyledLink>
  );
}
