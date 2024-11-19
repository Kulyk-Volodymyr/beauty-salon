import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderH2 from "../HeaderH2";
import Paragraph from "../Paragraph";
import OurStoryPicture from "./OurStoryPicture";

const _Section = styled.section`
  background-color: var(--peach200);
  padding: 5rem 1.5rem 3rem 1.5rem;
  @media (min-width: 480px) {
    padding-inline: 2rem;
  }
  @media (min-width: 768px) {
    padding: 6rem 3rem 4rem 3rem;
  }
  @media (min-width: 992px) {
    padding: 7rem 5rem 5rem 5rem;
  }
`;

const _Inner = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: space-between;
  margin: auto;
  max-width: 40rem;
  @media (min-width: 992px) {
    flex-direction: row-reverse;
    max-width: 74rem;
  }
`;

const _Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  > * {
    text-align: center !important;
  }
  @media (min-width: 992px) {
    flex: 1;
    > * {
      text-align: left !important;
    }
  }
`;

const _Subitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 1.625rem;
  }
`;

const _Picture = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  @media (min-width: 992px) {
    flex: 1;
    max-width: auto;
  }
`;

const OurStory = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <_Section>
      <_Inner>
        <_Info
          data-aos="zoom-in-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-once="true"
          data-aos-delay="200"
        >
          <HeaderH2>Our Story</HeaderH2>
          <Paragraph textAlign="left">
            We started as a small beauty studio. Our main idea was to create the
            best beauty studio in the world. Can there be compromises in the
            best studio in the world? Our answer is always no, we care about the
            best quality, we hire the best specialists and provide the best
            customer service. This approach allowed us to grow and create
            awesome team that is passionate about everything we do.
          </Paragraph>
          <_Subitle>~ Marrie Makeup Artist</_Subitle>
        </_Info>

        <_Picture
          data-aos="zoom-in-right"
          data-aos-anchor-placement="center-bottom"
          data-aos-once="true"
        >
          <OurStoryPicture />
        </_Picture>
      </_Inner>
    </_Section>
  );
};

export default OurStory;
