import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderH2 from "../HeaderH2";
import Paragraph from "../Paragraph";
import SocialNetworks from "../SocialNetworks";

const _Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  @media (min-width: 768px) {
    flex: 1;
    height: 20rem;
  }
`;

const _Info = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  position: relative;
  padding-top: 3.5rem;
  @media (min-width: 768px) {
    padding-top: 0;
  }
`;

const _ParagraphWrapper = styled.div`
  margin: auto;
  max-width: 16rem;
  width: 100%;
`;

const _Networks = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 100%;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: column-reverse;
    height: calc(100% + 9rem);
    bottom: auto;
    top: auto;
    right: -3rem;
    width: 3rem;
  }
  @media (min-width: 992px) {
    right: -5rem;
    width: 5rem;
  }
  @media (min-width: 1200px) {
    right: -5rem;
    width: 8rem;
  }
`;

const _NetworkInstagram = styled.div`
  background-color: var(--peach200);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 4rem;
  width: 100%;
  &::before {
    background-color: inherit;
    content: "";
    height: 14rem;
    position: absolute;
    bottom: 0;
    right: 50%;
    width: 50vw;
    z-index: -1;
    @media (min-width: 768px) {
      height: 50%;
      width: 50vw;
      right: auto;
      left: 0;
      z-index: -1;
    }
  }
`;

const _NetworkFacebook = styled(_NetworkInstagram)`
  background-color: var(--peach500);
  &::before {
    right: auto;
    left: 50%;
    @media (min-width: 768px) {
      height: calc(50% + 10rem);
      right: auto;
      top: auto;
      bottom: 50%;
      left: 0;
    }
  }
`;

const _NetworkName = styled.p`
  font-size: 1rem;
  font-family: "Kiwi Maru";
  font-weight: 500;
  text-transform: uppercase;
  @media (min-width: 480px) {
    font-size: 1.125rem;
    letter-spacing: 0.25rem;
  }
  @media (min-width: 768px) {
    font-size: 1.25rem;
    writing-mode: vertical-lr;
    transform: scale(-1);
  }
`;

const FollowInfo = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <_Content>
      <_Info
        data-aos="zoom-in-right"
        data-aos-anchor-placement="center-bottom"
        data-aos-once="true"
        data-aos-delay="300"
      >
        <HeaderH2>Follow Us</HeaderH2>
        <_ParagraphWrapper>
          <Paragraph>
            Don't miss promotions, follow us for the latest news
          </Paragraph>
        </_ParagraphWrapper>
        <SocialNetworks marginTop={"2rem"} />
      </_Info>

      <_Networks>
        <_NetworkInstagram>
          <_NetworkName>Instagram</_NetworkName>
        </_NetworkInstagram>
        <_NetworkFacebook>
          <_NetworkName>Facebook</_NetworkName>
        </_NetworkFacebook>
      </_Networks>
    </_Content>
  );
};

export default FollowInfo;
