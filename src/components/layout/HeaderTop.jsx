import styled from "styled-components";

import BurgerButton from "./BurgerButton";

const _Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 768px) {
    width: fit-content;
  }
`;

const Logo = styled.p`
  color: ${(props) => (props.$isHomePage ? "var(--white)" : "var(--dark)")};
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 0.25rem;
`;

const HeaderTop = ({ pathname }) => {
  return (
    <_Container>
      <Logo $isHomePage={pathname === "/"}>SALON</Logo>
      <BurgerButton isHomePage={pathname === "/"} />
    </_Container>
  );
};

export default HeaderTop;
