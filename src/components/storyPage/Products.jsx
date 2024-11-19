import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import AnimatedWave from "../AnimatedWave";
import HeaderH2 from "../HeaderH2";
import Paragraph from "../Paragraph";
import Photo from "../Photo";

const _Section = styled.section`
  background-color: var(--peach400);
  padding: 2rem 1.5rem;
  @media (min-width: 480px) {
    padding-inline: 2rem;
  }
  @media (min-width: 768px) {
    padding: 3rem 3rem;
  }
  @media (min-width: 992px) {
    padding: 4rem 5rem;
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
  }
`;

const _Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 30rem;
  @media (min-width: 768px) {
    flex: 1;
    gap: 2rem;
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

const Products = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <AnimatedWave position="top" />
      <_Section>
        <_Inner>
          <_Info
            data-aos="zoom-in-right"
            data-aos-anchor-placement="center-bottom"
            data-aos-once="true"
          >
            <HeaderH2>Our Products</HeaderH2>
            <Paragraph>
              All our products are cruelty-free, it’s a category containing all
              cosmetics that have not been tested on animals. Each cosmetic is
              subject to strict control by independent inspection bodies chosen
              by the Coalition for Consumer Information in Cosmetics (CCIC),
              which is an NGO founded by 8 international animal protection
              groups such as: American Anti-Vivisection Society, Animal Alliance
              of Canada, Doris Day Animal League, etc.
            </Paragraph>
          </_Info>

          <_Picture
            data-aos="zoom-in-left"
            data-aos-anchor-placement="center-bottom"
            data-aos-once="true"
            data-aos-delay="200"
          >
            <Photo
              src="/assets/images/makeup-kit-4.png"
              alt="makeup kit"
              width={750}
              height={600}
            />
          </_Picture>
        </_Inner>
      </_Section>
      <AnimatedWave position="bottom" />
    </>
  );
};

export default Products;
