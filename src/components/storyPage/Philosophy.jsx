import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

import HeaderH2 from "../HeaderH2";
import LinkButton from "../LinkButton";
import PhilosophyItem from "./PhilosophyItem";

import { philosophy } from "../../data/philosophy";

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

const _Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: space-between;
  margin: auto;
  max-width: 96rem;
  @media (min-width: 480px) {
    gap: 3.5rem;
  }
  @media (min-width: 768px) {
    gap: 4.5rem;
  }
`;

const _List = styled.ul`
  display: grid;
  gap: 3rem;
  list-style: none;
  width: 100%;
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3.5rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 4.5rem;
  }
`;

const Philosophy = () => {
  return (
    <_Section>
      <_Inner>
        <HeaderH2>Philosophy</HeaderH2>

        <_List>
          {philosophy.map((item) => (
            <PhilosophyItem
              key={uuidv4()}
              title={item.title}
              icon={item.icon}
              alt={item.alt}
              info={item.info}
            />
          ))}
        </_List>

        <LinkButton pathname="/book" linkStyle="primary">
          Book an Appointment
        </LinkButton>
      </_Inner>
    </_Section>
  );
};

export default Philosophy;
