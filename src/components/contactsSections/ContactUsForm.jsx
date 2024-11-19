import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import Input from "../Input";

const _Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: auto;
  max-width: 30rem;
  width: 100%;
  @media (min-width: 992px) {
    gap: 2rem;
  }
  @media (min-width: 1400px) {
    margin-left: 4.5rem;
  }
`;

const ContactUsForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <_Form
      action=""
      onSubmit={(e) => e.preventDefault()}
      data-aos="zoom-in-left"
      data-aos-anchor-placement="center-bottom"
      data-aos-once="true"
    >
      <Input type="text" name="name" id="contactUsName" placeholder="Name" />
      <Input
        type="tel"
        name="phone"
        id="contactUsPhone"
        placeholder="Phone number"
      />
      <Input
        type="email"
        name="email"
        id="contactUsEmail"
        placeholder="Email Address"
      />
      <Input
        type="textarea"
        name="message"
        id="contactUsMessage"
        placeholder="Message"
      />
      <Input type="submit" value="Send Message" />
    </_Form>
  );
};

export default ContactUsForm;
