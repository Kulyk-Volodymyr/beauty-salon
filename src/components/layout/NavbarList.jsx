import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SalonContext } from "../../context/SalonContext";

const _Link = styled(NavLink)`
  color: ${(props) =>
    props.$isHeader && !props.$isHomePage
      ? props.$isInFocus
        ? "var(--peach400)"
        : "var(--white)"
      : props.$isInFocus
      ? "var(--dark)"
      : "var(--gray)"};
  font-size: 1rem;
  font-weight: 700;
  outline: none;
  transition: all 0.2s;
  text-decoration: none;

  @media (min-width: 768px) {
    color: ${(props) =>
      props.$isHeader && props.$isHomePage
        ? props.$isInFocus
          ? "var(--peach400)"
          : "var(--white)"
        : props.$isInFocus
        ? "var(--dark)"
        : "var(--gray)"};
    display: ${(props) => (props.$isHeader ? "inline-flex" : "initial")};
    justify-content: ${(props) => (props.$isHeader ? "center" : "none")};
    align-items: ${(props) => (props.$isHeader ? "center" : "none")};
    height: ${(props) => (props.$isHeader ? "1.5rem" : "auto")};
    font-size: 1.125rem;
    position: relative;
  }

  &::before {
    --addWidth: 0.5rem;
    transition: all 0.2s;
    @media (min-width: 768px) {
      background-color: ${(props) =>
        props.$isInFocus ? "var(--peach700)" : "transparent"};
      content: ${(props) => (props.$isHeader ? "''" : "none")};
      height: 0.25rem;
      position: absolute;
      left: calc(var(--addWidth) * -1);
      top: 3.5rem;
      width: calc(var(--addWidth) * 2 + 100%);
    }
    @media (min-width: 840px) {
      --addWidth: 1rem;
    }
    @media (min-width: 992px) {
      --addWidth: 1.5rem;
    }
    @media (min-width: 1200px) {
      --addWidth: 2.25rem;
    }
  }

  &:hover,
  &:focus {
    color: var(--peach800);
  }

  &:hover::before,
  &:focus::before {
    background-color: var(--peach400);
  }

  &:active {
    color: var(--brown);
  }
  &:active::before {
    background-color: var(--brown);
  }
`;

const NavbarList = ({ isHeader, pathname }) => {
  const { hideMenu } = useContext(SalonContext);

  const linkClick = (e) => {
    hideMenu();
    e.target.blur();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <li>
        <_Link
          to={"/"}
          $isHeader={isHeader}
          $isHomePage={pathname === "/"}
          $isInFocus={pathname === "/"}
          onClick={(e) => linkClick(e)}
        >
          Home
        </_Link>
      </li>
      <li>
        <_Link
          to={"/book"}
          $isHeader={isHeader}
          $isHomePage={pathname === "/"}
          $isInFocus={pathname === "/book"}
          onClick={(e) => linkClick(e)}
        >
          Book Online
        </_Link>
      </li>
      <li>
        <_Link
          to={"/service"}
          $isHeader={isHeader}
          $isHomePage={pathname === "/"}
          $isInFocus={pathname === "/service"}
          onClick={(e) => linkClick(e)}
        >
          Service Menu
        </_Link>
      </li>
      <li>
        <_Link
          to={"/story"}
          $isHeader={isHeader}
          $isHomePage={pathname === "/"}
          $isInFocus={pathname === "/story"}
          onClick={(e) => linkClick(e)}
        >
          Our story
        </_Link>
      </li>
    </>
  );
};

export default NavbarList;
