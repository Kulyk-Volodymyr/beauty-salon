import styled from "styled-components";

import Hero from "../components/servicePage/Hero";
import Services from "../components/servicePage/Services";
import HeaderH2 from "../components/HeaderH2";
import JoinUs from "../components/contactsSections/JoinUs";
import Contacts from "../components/contactsSections/Contacts";
import ContactUs from "../components/contactsSections/ContactUs";

const _ContactUsHeader = styled.div`
  background-color: var(--peach200);
  padding: 4rem 1rem 3rem 1rem;
`;

const Service = () => {
  return (
    <>
      <Hero />
      <Services />
      <_ContactUsHeader>
        <HeaderH2>Contact Us</HeaderH2>
      </_ContactUsHeader>
      <ContactUs />
      <JoinUs backgroundColor={"var(--peach200)"} />
      <Contacts />
    </>
  );
};

export default Service;
