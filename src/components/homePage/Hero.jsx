import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import LinkButton from "../LinkButton";
import HeroInfo from "./HeroInfo";

const _Section = styled.section`
  background-color: var(--gray);
  background-image: url("/assets/images/hero-home-bg.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const _Backdrop = styled.div`
  background-color: #31252090;
  backdrop-filter: blur(2px);
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 14rem 2rem 4rem 2rem;
  @media (min-width: 480px) {
    padding: 12rem 3.5rem 4rem 3.5rem;
  }
  @media (min-width: 992px) {
    padding: 18rem 4.5rem 5rem 4.5rem;
  }
`;

const _Inner = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  margin: auto;
  max-width: 100rem;
  z-index: 3;
`;

const _Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  justify-content: space-between;
  margin: auto;
  max-width: 56rem;
`;

const _Title = styled.h1`
  color: var(--white);
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.35;
  @media (min-width: 320px) {
    font-size: 2.75rem;
  }
  @media (min-width: 480px) {
    font-size: 3.25rem;
  }
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

const _Span = styled.span`
  color: var(--peach400);
  font-family: "Kiwi Maru", serif;
  font-weight: 500;
`;

const _Buttons = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  @media (min-width: 576px) {
    flex-direction: row;
    gap: 2.25rem;
  }
`;

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <_Section>
      <_Backdrop>
        <_Inner>
          <_Content
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-once="true"
          >
            <_Title>
              Always Make Room for a <_Span>Little Beauty</_Span> in Your Life
            </_Title>

            <_Buttons>
              <LinkButton pathname="/book" linkStyle="primary" margin="0">
                Book Appointment
              </LinkButton>

              <LinkButton pathname="/service" linkStyle="secondary" margin="0">
                Service Menu
              </LinkButton>
            </_Buttons>
          </_Content>

          <HeroInfo />
        </_Inner>
      </_Backdrop>
    </_Section>
  );
};

export default Hero;
