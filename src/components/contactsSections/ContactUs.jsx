import styled from "styled-components";

import Photo from "../Photo";
import ContactUsForm from "./ContactUsForm";

const _Section = styled.section`
  background-color: var(--peach200);
  @media (min-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
    max-height: 45rem;
    overflow: hidden;
    @media (min-width: 992px) {
      gap: 2.75rem;
    }
  }
`;

const _Picture = styled.div`
  display: none;
  @media (min-width: 768px) {
    align-items: center;
    background-color: var(--peach500);
    display: flex;
    flex: 1;
    justify-content: flex-end;
    height: 100%;
    width: auto;
  }
`;

const _FormSection = styled.div`
  padding: 0 1.5rem 5rem 1.5rem;
  width: 100%;
  @media (min-width: 768px) {
    flex: 0.85;
    max-width: 100%;
    padding: 0 3rem 0 0;
  }
  @media (min-width: 992px) {
    flex: 1;
    padding-right: 5rem;
  }
`;

const ContactUs = () => {
  return (
    <_Section>
      <_Picture>
        <Photo
          src="/assets/images/perfume-1.jpg"
          alt="perfumes and flowers"
          width={740}
          height={900}
        />
      </_Picture>

      <_FormSection>
        <ContactUsForm />
      </_FormSection>
    </_Section>
  );
};

export default ContactUs;
