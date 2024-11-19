import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import FollowInfo from "./FollowInfo";
import LogoInCircle from "../LogoInCircle";

const _Section = styled.section`
  padding: 4.5rem 1.5rem;
  @media (min-width: 480px) {
    padding-inline: 2rem;
  }
  @media (min-width: 768px) {
    padding-inline: 3rem;
  }
  @media (min-width: 992px) {
    padding-inline: 5rem;
  }
`;

const _Inner = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: space-between;
  margin: auto;
  max-width: 32rem;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    gap: 1rem;
    max-width: 110rem;
  }
`;

const _Divider = styled.div`
  background-color: var(--peach700);
  background-image: linear-gradient(
    90deg,
    var(--peach700) 10%,
    var(--peach400) 80%
  );
  border-radius: 1rem;
  height: 1.75rem;
  width: 100%;
  @media (min-width: 768px) {
    border-radius: 1.25rem;
    background-image: linear-gradient(var(--peach700) 10%, var(--peach400) 80%);
    height: 20rem;
    width: 1.75rem;
  }
  @media (min-width: 992px) {
    width: 2.5rem;
  }
`;

const _Logo = styled.div`
  @media (min-width: 768px) {
    flex: 1;
  }
`;

const _LogoWrapper = styled.div`
  margin-bottom: -3rem;
  @media (min-width: 480px) {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

const Follow = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <_Section>
      <_Inner>
        <FollowInfo></FollowInfo>

        <_Divider
          data-aos="zoom-in"
          data-aos-anchor-placement="center-bottom"
          data-aos-once="true"
          data-aos-delay="150"
        />

        <_Logo
          data-aos="zoom-in-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-once="true"
        >
          <_LogoWrapper>
            <LogoInCircle></LogoInCircle>
          </_LogoWrapper>
        </_Logo>
      </_Inner>
    </_Section>
  );
};

export default Follow;
