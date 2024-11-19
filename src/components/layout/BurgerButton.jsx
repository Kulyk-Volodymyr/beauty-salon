import { useContext } from "react";
import styled from "styled-components";
import { SalonContext } from "../../context/SalonContext";

const _Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 1.375rem;
  opacity: 1;
  outline: none;
  position: relative;
  transition: all 0.2s;
  width: 2rem;
  @media (min-width: 768px) {
    display: none;
  }
  &:hover {
    opacity: 0.65;
  }
`;

const _FirstBar = styled.div`
  background-color: ${(props) =>
    props.$isHomePage ? "var(--white)" : "var(--dark)"};
  height: 0.125rem;
  position: absolute;
  opacity: 1;
  transition: all 0.3s;
  top: ${(props) => (props.$opened ? "0.675rem" : "0.125rem")};
  transform: ${(props) =>
    props.$opened ? "scale(1) rotate(45deg)" : "scale(1) rotate(deg)"};
  transform-origin: center;
  width: 2rem;
`;

const _SecondBar = styled(_FirstBar)`
  opacity: ${(props) => (props.$opened ? "0" : "1")};
  transform: ${(props) =>
    props.$opened ? "scale(0) rotate(0deg)" : "scale(1) rotate(0deg)"};
  top: 0.625rem;
`;

const _ThirdBar = styled(_FirstBar)`
  top: ${(props) => (props.$opened ? "0.675rem" : "1.125rem")};
  transform: ${(props) =>
    props.$opened ? "scale(1) rotate(135deg)" : "scale(1) rotate(0deg)"};
`;

const BurgerButton = ({ isHomePage }) => {
  const { menuOpened, showMenu, hideMenu } = useContext(SalonContext);

  return (
    <_Button
      onClick={menuOpened ? hideMenu : showMenu}
      aria-label="Burger button"
    >
      <_FirstBar $opened={menuOpened} $isHomePage={isHomePage} />
      <_SecondBar $opened={menuOpened} $isHomePage={isHomePage} />
      <_ThirdBar $opened={menuOpened} $isHomePage={isHomePage} />
    </_Button>
  );
};

export default BurgerButton;
