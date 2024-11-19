import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const _List = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
  list-style: none;
  width: 100%;
  @media (min-width: 768px) {
    align-items: stretch;
    flex-direction: row;
    max-width: 70rem;
    margin: auto;
  }
`;

const _Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: space-between;
  flex: 1;
  max-width: fit-content;
  @media (min-width: 768px) {
    gap: 1.25rem;
  }
`;

const _Text = styled.p`
  color: var(--white);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 0.938rem;
  }
`;

const _Title = styled(_Text)`
  letter-spacing: 0.3rem;
  text-transform: uppercase;
`;

const HeroInfo = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <_List>
      <_Item
        data-aos="zoom-in-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-once="true"
        data-aos-delay="150"
      >
        <_Title>CONTACT</_Title>
        <_Text>
          T: 070 9485 7568
          <br />
          info@beautysalon.com
        </_Text>
      </_Item>

      <_Item
        data-aos="zoom-in-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-once="true"
        data-aos-delay="300"
      >
        <_Title>HOURS</_Title>
        <_Text>
          Mon to Fri: 7:30 am — 1:00 am
          <br />
          Sat: 9:00 am — 1:00 am
          <br />
          Sun: 9:00 am — 11:30 pm
        </_Text>
      </_Item>

      <_Item
        data-aos="zoom-in-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-once="true"
        data-aos-delay="450"
      >
        <_Title>LOCATION</_Title>
        <_Text>
          85 Royal Mint Street,
          <br />
          London, E1 8LG
          <br />
          United Kingdom
        </_Text>
      </_Item>
    </_List>
  );
};

export default HeroInfo;
