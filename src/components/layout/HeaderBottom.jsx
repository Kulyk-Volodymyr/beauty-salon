import { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { SalonContext } from "../../context/SalonContext";

import NavbarList from "./NavbarList";

const _Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1.5rem;
  opacity: ${(props) => (props.$burgerMenuOpened ? 1 : 0)};
  visibility: ${(props) => (props.$burgerMenuOpened ? "visible" : "hidden")};
  transition-property: all;
  transition-duration: ${(props) => (props.$burgerMenuOpened ? "0.4s" : "0s")};
  transition-delay: ${(props) => (props.$burgerMenuOpened ? "0.2s" : "0s")};
  position: absolute;
  top: 5rem;
  left: 0;
  right: 0;
  width: 100%;
  @media (min-width: 670px) {
    flex-direction: row;
    padding-inline: 0.75rem;
    top: 4.25rem;
  }
  @media (min-width: 768px) {
    gap: 0.5rem;
    opacity: 1;
    visibility: visible;
    padding-inline: 0;
    position: relative;
    top: 0;
  }
`;

const _Navbar = styled.nav`
  @media (min-width: 768px) {
    flex: 1 1 0;
    display: flex;
    justify-content: center;
  }
`;

const _List = styled.ul`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 1.5rem;
  column-gap: 3rem;
  list-style: none;
  width: 14rem;
  @media (min-width: 480px) {
    row-gap: 0;
    column-gap: 2rem;
    flex-wrap: nowrap;
    width: fit-content;
  }
  @media (min-width: 768px) {
    column-gap: 1rem;
  }
  @media (min-width: 840px) {
    column-gap: 2rem;
  }
  @media (min-width: 992px) {
    column-gap: 3rem;
  }
  @media (min-width: 1200px) {
    column-gap: 4.5rem;
  }
`;

const _Link = styled(NavLink)`
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
  margin: 0;
  width: 10rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
    padding: 1rem;
  }
  &:hover,
  &:focus {
    background-color: var(--white);
    border-color: var(--dark);
    color: var(--dark);
    @media (min-width: 768px) {
      background-color: transparent;
    }
  }
  &:active {
    background-color: var(--white);
    border-color: var(--dark);
    color: var(--dark);
    @media (min-width: 768px) {
      background-color: transparent;
    }
  }
  &:focus {
    outline: 4px solid var(--peach400);
  }
`;

const HeaderBottom = ({ pathname }) => {
  const { hideMenu, menuOpened } = useContext(SalonContext);

  const linkClick = (e) => {
    hideMenu();
    e.target.blur();
  };

  return (
    <_Content $burgerMenuOpened={menuOpened}>
      <_Navbar>
        <_List>
          <NavbarList isHeader={true} pathname={pathname} />
        </_List>
      </_Navbar>

      <_Link to="/contact" onClick={(e) => linkClick(e)}>
        Contact Us
      </_Link>
    </_Content>
  );
};

export default HeaderBottom;
