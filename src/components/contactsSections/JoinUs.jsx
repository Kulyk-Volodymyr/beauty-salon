import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import icon from "../../assets/icons/hearts.svg";
import Photo from "../Photo";
import HeaderH2 from "../HeaderH2";
import Paragraph from "../Paragraph";
import LinkButton from "../LinkButton";

const _Section = styled.section`
  background-color: ${(props) => props.$backgroundColor || "none"};
  padding: 2rem 1.5rem;
  @media (min-width: 480px) {
    padding-inline: 2rem;
  }
  @media (min-width: 768px) {
    padding: 2.75rem 3rem;
  }
  @media (min-width: 992px) {
    padding-inline: 5rem;
  }
`;

const _Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  margin: auto;
  max-width: 70rem;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    gap: 2.75rem;
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

const _Info = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  margin: auto;
  @media (min-width: 768px) {
    flex: 1;
  }
  > p {
    max-width: 20rem;
  }
`;

const JoinUs = ({ backgroundColor }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <_Section $backgroundColor={backgroundColor}>
      <_Inner>
        <_Picture
          data-aos="zoom-in-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-once="true"
          data-aos-delay="200"
        >
          <Photo
            src="/assets/images/perfume-2.jpg"
            alt="perfumes and flowers"
            width={660}
            height={430}
          />
        </_Picture>

        <_Info
          data-aos="zoom-in-right"
          data-aos-anchor-placement="center-bottom"
          data-aos-once="true"
        >
          <Photo src={icon} alt="hearts" width={68} height={60} />

          <HeaderH2>Join Our Team</HeaderH2>

          <Paragraph>
            Please send us an email telling us a bit about us
          </Paragraph>

          <LinkButton pathname="" linkStyle="ternary">
            salon@gmail.com
          </LinkButton>
        </_Info>
      </_Inner>
    </_Section>
  );
};

export default JoinUs;
