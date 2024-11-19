import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import Photo from "../Photo";

const _Section = styled.section`
  background-color: var(--peach200);
  padding: 9.5rem 1.5rem 5rem 1.5rem;
  @media (min-width: 480px) {
    padding: 10.5rem 2rem 5rem 2rem;
  }
  @media (min-width: 768px) {
    padding: 11.5rem 3rem 7rem 3rem;
  }
  @media (min-width: 992px) {
    padding-inline: 5rem;
  }
`;

const _Inner = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: space-between;
  margin: auto;
  max-width: 74rem;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

const _Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 30rem;
  @media (min-width: 768px) {
    flex: 1.15;
  }
  @media (min-width: 992px) {
    flex: 1;
    gap: 2.5rem;
  }
`;

const _Picture = styled.div`
  height: auto;
  max-width: 35rem;
  width: 100%;
  @media (min-width: 768px) {
    flex: 1;
    max-width: auto;
  }
`;

const HeroSection = ({ image, alt, children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <_Section>
      <_Inner>
        <_Info
          data-aos="zoom-in-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-once="true"
        >
          {children}
        </_Info>

        <_Picture
          data-aos="zoom-in-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-once="true"
          data-aos-delay="200"
        >
          <Photo src={image} alt={alt} width={800} height={480} />
        </_Picture>
      </_Inner>
    </_Section>
  );
};

export default HeroSection;
