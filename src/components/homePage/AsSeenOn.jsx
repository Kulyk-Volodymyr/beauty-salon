import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import AnimatedWave from "../AnimatedWave";
import HeaderH2 from "../HeaderH2";
import LinkButton from "../LinkButton";

const _Section = styled.section`
  background-color: var(--peach400);
  padding: 1rem 1.5rem;
  @media (min-width: 480px) {
    padding-inline: 2rem;
  }
  @media (min-width: 768px) {
    padding: 2rem 3rem;
  }
  @media (min-width: 992px) {
    padding: 3rem 5rem;
  }
`;

const _Inner = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  justify-content: space-between;
  margin: auto;
  max-width: 60rem;
  @media (min-width: 768px) {
    gap: 3.5rem;
  }
`;

const _Text = styled.p`
  font-family: "Kiwi Maru", serif;
  font-weight: 500;
  font-size: 1.875rem;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 320px) {
    font-size: 2.125rem;
  }
  @media (min-width: 480px) {
    font-size: 2.25rem;
  }
  @media (min-width: 768px) {
    font-size: 2.625rem;
  }
`;

const AsSeenOn = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <AnimatedWave position="top" />
      <_Section>
        <_Inner>
          <HeaderH2>As seen On</HeaderH2>
          <_Text
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-once="true"
          >
            "The place with its constant excellence, soul, and style"
          </_Text>
          <LinkButton pathname="/story" linkStyle="ternary">
            Learn More
          </LinkButton>
        </_Inner>
      </_Section>
      <AnimatedWave position="bottom" />
    </>
  );
};

export default AsSeenOn;
