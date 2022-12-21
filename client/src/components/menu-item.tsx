import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: black;
`;

interface MenuItemProps {
  to: string;
  content: string;
}

export default function MenuItem({ to, content }: MenuItemProps) {
  return (
    <StyledLink to={to}>
      <div className="menu-item">{content}</div>
    </StyledLink>
  );
}
