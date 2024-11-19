import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderH2 from "../HeaderH2";
import Paragraph from "../Paragraph";
import LinkButton from "../LinkButton";

import { services } from "../../data/services";

const _Section = styled.section`
  padding: 5rem 1.5rem;
  @media (min-width: 480px) {
    padding-inline: 2rem;
  }
  @media (min-width: 768px) {
    padding: 6rem 3rem;
  }
  @media (min-width: 992px) {
    padding: 7rem 5rem;
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
`;

const _Services = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 3rem;
  row-gap: 3rem;
  justify-content: space-evenly;
  list-style: none;
  margin: auto;
  max-width: 20rem;
  width: 100%;
  @media (min-width: 768px) {
    column-gap: 2rem;
    flex-wrap: nowrap;
    justify-content: space-between;
    max-width: 62rem;
  }
`;

const _Service = styled.li`
  flex: 1;
`;

const _ServiceImage = styled.img`
  height: 3.25rem;
  margin: auto;
  width: auto;
  @media (min-width: 768px) {
    height: 3.75rem;
  }
`;

const _ServiceTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.125rem;
  margin-top: 1rem;
  text-align: center;
  @media (min-width: 768px) {
    letter-spacing: 0.25rem;
  }
`;

const _ParagraphWrapper = styled.div`
  margin-top: 1.5rem;
  max-width: 32rem;
  @media (min-width: 768px) {
    margin-top: 3rem;
  }
`;

const Service = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <_Section>
      <_Inner>
        <HeaderH2>Service Menu</HeaderH2>

        <_Services
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-once="true"
        >
          {services.map((item) => (
            <_Service key={uuidv4()}>
              <_ServiceImage
                src={item.icon}
                alt={item.alt}
                width={60}
                height={60}
              />
              <_ServiceTitle>{item.title}</_ServiceTitle>
            </_Service>
          ))}
        </_Services>

        <_ParagraphWrapper>
          <Paragraph>
            Get your nails done for great mood. Simple pleasures can make your
            week, not just day.
          </Paragraph>
        </_ParagraphWrapper>

        <LinkButton pathname="/service" linkStyle="primary">
          View Service Menu
        </LinkButton>
      </_Inner>
    </_Section>
  );
};

export default Service;
