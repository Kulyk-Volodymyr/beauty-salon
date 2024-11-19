import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SalonContext } from "../context/SalonContext";

const links = ["primary", "secondary", "ternary"];

const _LinkPrimary = styled(NavLink)`
  background-color: var(--peach400);
  border: 1px solid var(--peach400);
  border-radius: 0.5rem;
  color: var(--dark);
  display: block;
  font-size: 1rem;
  font-weight: 700;
  outline: none;
  padding: 0.75rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  margin: ${(props) => props.$margin || "auto"};
  min-width: fit-content;
  max-width: 16rem;
  width: 100%;
  @media (min-width: 768px) {
    font-size: 1.125rem;
    padding: 1rem;
  }
  &:hover,
  &:focus {
    background-color: transparent;
    border-color: var(--dark);
    color: var(--dark);
  }
  &:active {
    background-color: transparent;
    border-color: var(--dark);
    color: var(--dark);
  }
  &:focus {
    outline: 4px solid var(--peach400);
  }
`;

const _LinkSecondary = styled(_LinkPrimary)`
  background-color: transparent;
  border-color: var(--peach400);
  color: var(--peach400);
  &:hover,
  &:focus {
    background-color: transparent;
    border-color: var(--dark);
    color: var(--dark);
  }
  &:active {
    background-color: transparent;
    border-color: var(--brown);
    color: var(--brown);
  }
  &:focus {
    outline: 4px solid var(--gray);
  }
`;

const _LinkTernary = styled(_LinkPrimary)`
  background-color: transparent;
  border-color: var(--dark);
  color: var(--dark);
  &:hover,
  &:focus {
    background-color: var(--peach100);
    border-color: var(--dark);
    color: var(--dark);
  }
  &:active {
    background-color: var(--peach100);
    border-color: var(--brown);
    color: var(--brown);
  }
  &:focus {
    outline: 4px solid var(--peach400);
  }
`;

const _ErrorLink = styled(_LinkPrimary)`
  background-color: blue;
  border-color: red;
  color: red;
`;

const LinkButton = ({ pathname, linkStyle, margin, children }) => {
  const { hideMenu } = useContext(SalonContext);

  const handleClick = () => {
    hideMenu();
    window.scrollTo(0, 0);
  };

  return (
    <>
      {links.includes(linkStyle) ? (
        linkStyle === "primary" ? (
          <_LinkPrimary
            to={pathname}
            onClick={() => handleClick()}
            $margin={margin}
          >
            {children}
          </_LinkPrimary>
        ) : linkStyle === "secondary" ? (
          <_LinkSecondary
            to={pathname}
            onClick={() => handleClick()}
            $margin={margin}
          >
            {children}
          </_LinkSecondary>
        ) : (
          <_LinkTernary
            to={pathname}
            onClick={() => handleClick()}
            $margin={margin}
          >
            {children}
          </_LinkTernary>
        )
      ) : (
        <_ErrorLink to={""}>Style Me</_ErrorLink>
      )}
    </>
  );
};

export default LinkButton;
