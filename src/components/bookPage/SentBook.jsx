import styled from "styled-components";

import icon from "../../assets/icons/hearts.svg";
import Paragraph from "../Paragraph";

const _Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  justify-content: center;
  margin: auto;
  max-width: 30rem;
  padding: 2.5rem 1.5rem;
  @media (min-width: 768px) {
    flex: 1;
    padding: 1.5rem;
  }
  @media (min-width: 992px) {
    padding: 2rem;
  }
  @media (min-width: 1200px) {
    padding: 2.5rem;
  }
`;

const _Text = styled.p`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 0.75rem;
  @media (min-width: 768px) {
    font-size: 1.375rem;
  }
`;

const SentBook = () => {
  return (
    <_Container>
      <img src={icon} alt="" width={68} height={60} />
      <_Text>YOUR APPOINTMENT HAS BEEN BOOKED</_Text>
      <Paragraph>Please be on time we will be waiting for you.</Paragraph>
    </_Container>
  );
};

export default SentBook;
