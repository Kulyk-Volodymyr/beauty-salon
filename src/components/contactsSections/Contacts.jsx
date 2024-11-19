import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { workingHours } from "../../data/workingHours";

import Phone from "../../assets/icons/phone.svg";
import Clock from "../../assets/icons/clock.svg";
import Location from "../../assets/icons/location.svg";

const _Section = styled.section`
  padding: 4rem 1rem;
  @media (min-width: 768px) {
    padding: 5rem 4rem;
  }
  @media (min-width: 992px) {
    padding: 6rem 4rem;
  }
`;

const _List = styled.ul`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 3rem;
  list-style: none;

  width: 100%;
  @media (min-width: 768px) {
    align-items: stretch;
    flex-direction: row;
    justify-content: space-around;
    max-width: 92rem;
    margin: auto;
  }
`;

const _Item = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: space-between;
  flex: 1;
  min-width: 12rem;
`;

const _Text = styled.p`
  color: var(--gray);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
`;

const _Title = styled(_Text)`
  color: var(--dark);
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
`;

const Contacts = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <_Section>
      <_List>
        <_Item
          data-aos="zoom-in-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-once="true"
        >
          <img src={Phone} alt="phone" height={140} width={140} />
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
          data-aos-delay="150"
        >
          <img src={Clock} alt="clock" height={140} width={140} />
          <_Title>HOURS</_Title>
          <_Text>
            Mon to Fri: {workingHours.monFri.start}:00 —{" "}
            {workingHours.monFri.end}
            :00
            <br />
            Sat: {workingHours.sat.start}:00 — {workingHours.sat.end}:00
            <br />
            Sun: {workingHours.sun.start}:00 — {workingHours.sun.end}:00
          </_Text>
        </_Item>

        <_Item
          data-aos="zoom-in-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <img src={Location} alt="location" height={140} width={140} />
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
    </_Section>
  );
};

export default Contacts;
