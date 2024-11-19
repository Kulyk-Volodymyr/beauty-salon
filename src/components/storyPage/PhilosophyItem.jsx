import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const _Item = styled.li`
  margin: auto;
  max-width: 18rem;
  @media (min-width: 480px) {
    height: 100%;
    width: 100%;
  }
`;

const _Image = styled.img`
  height: 2.875rem;
  margin: auto;
  width: auto;
  @media (min-width: 768px) {
    height: 3.25rem;
  }
`;

const _Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-block: 1rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const _Text = styled.p`
  font-size: 0.938rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const PhilosophyItem = ({ icon, alt, title, info }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <_Item
      data-aos="zoom-in-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-once="true"
    >
      <_Image src={icon} alt={alt} width={52} height={52} />
      <_Title>{title}</_Title>
      <_Text>{info}</_Text>
    </_Item>
  );
};

export default PhilosophyItem;
