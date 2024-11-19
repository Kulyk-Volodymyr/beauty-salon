import styled from "styled-components";

import LogoInCircle from "../LogoInCircle";
import NavbarList from "./NavbarList";
import FooterContactUs from "./FooterContactUs";

const _Content = styled.footer`
  background-color: var(--peach100);
`;

const _Container = styled.div`
  padding: 2.5rem 1rem;
  @media (min-width: 480px) {
    padding: 3rem 3rem;
  }
  @media (min-width: 768px) {
    padding: 3.5rem 4rem;
  }
  @media (min-width: 992px) {
    padding: 4rem 6rem;
  }
  @media (min-width: 1200px) {
    padding-inline: 8rem;
  }
`;

const _Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  margin: auto;
  max-width: 80rem;
  @media (min-width: 480px) {
    gap: 3rem;
  }
  @media (min-width: 840px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const _Info = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: space-between;
  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 2rem;
    width: 100%;
  }
  @media (min-width: 840px) {
    flex: 1 1 0;
    justify-content: space-between;
  }
`;

const _List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 768px) {
    gap: 2.5rem;
  }
`;

const _Navbar = styled.nav`
  @media (min-width: 840px) {
    margin: auto;
  }
`;

const _Copyright = styled.p`
  background-color: var(--nut200);
  font-size: 0.875rem;
  padding: 0.875rem;
  text-align: center;
`;

const Footer = ({ pathname }) => {
  return (
    <_Content>
      <_Container>
        <_Inner>
          <LogoInCircle />

          <_Info>
            <_Navbar>
              <_List>
                <NavbarList isHeader={false} pathname={pathname} />
              </_List>
            </_Navbar>

            <FooterContactUs />
          </_Info>
        </_Inner>
      </_Container>

      <_Copyright>2023 Salon All rights reserved</_Copyright>
    </_Content>
  );
};

export default Footer;
