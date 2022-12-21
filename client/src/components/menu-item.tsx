import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: black;
  &.active {
    background-color: rgba(242, 228, 191, 0.79);
  }
`;

interface MenuItemProps {
  to: string;
  content: string;
}

export default function MenuItem({ to, content }: MenuItemProps) {
  return (
    <StyledLink
      to={to}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      <div className="menu-item">{content}</div>
    </StyledLink>
  );
}
