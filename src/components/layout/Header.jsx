import { useContext } from "react";
import styled from "styled-components";
import { SalonContext } from "../../context/SalonContext";

import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

const _Header = styled.header`
  padding-inline: 0.75rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  @media (min-width: 480px) {
    padding-inline: 1.5rem;
  }
  @media (min-width: 768px) {
    padding-inline: 2rem;
  }
  @media (min-width: 992px) {
    padding-inline: 3.25rem;
  }
`;

const _Inner = styled.div`
  --smallHeight: 0.125rem;
  --fullHeight: 10rem;
  --height: ${(props) =>
    props.$burgerMenuOpened ? "var(--fullHeight)" : "var(--smallHeight)"};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 3.75rem;
  margin: auto;
  max-width: 92rem;
  padding-inline: 0.75rem;
  position: relative;

  &::after {
    background-color: ${(props) =>
      props.$isHomePage ? "var(--white)" : "var(--dark)"};
    content: "";
    height: var(--height);
    position: absolute;
    bottom: calc(var(--height) * -1);
    left: 0;
    transition-property: all;
    transition-duration: ${(props) =>
      props.$burgerMenuOpened ? "0.2s" : "0s"};
    width: 100%;
    z-index: -1;
  }
  @media (min-width: 480px) {
    --fullHeight: 7.25rem;
  }
  @media (min-width: 670px) {
    --fullHeight: 3.75rem;
  }
  @media (min-width: 768px) {
    --smallHeight: 0.25rem;
    --fullHeight: 0.25rem;
    gap: 0.5rem;
    height: 5.5rem;
  }
  @media (min-width: 992px) {
    padding-inline: 1.25rem;
    height: 5.5rem;
  }
`;

const Header = ({ pathname }) => {
  const { menuOpened } = useContext(SalonContext);

  return (
    <_Header>
      <_Inner $isHomePage={pathname === "/"} $burgerMenuOpened={menuOpened}>
        <HeaderTop pathname={pathname} />

        <HeaderBottom pathname={pathname} />
      </_Inner>
    </_Header>
  );
};

export default Header;
