import { useContext } from "react";
import styled from "styled-components";
import { SalonContext } from "../../context/SalonContext";

import icon from "../../assets/icons/service-lotos.svg";
import Paragraph from "../Paragraph";

const _Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.25rem;
  justify-content: center;
  margin: auto;
  max-width: 30rem;
  padding: 2.5rem 1.5rem;
  @media (min-width: 768px) {
    flex: 1;
    gap: 0.5rem;
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

const _Span = styled.span`
  color: var(--gray);
`;

const ConfirmBook = () => {
  const { bookFormData } = useContext(SalonContext);

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <_Container>
      <img src={icon} alt="" width={74} height={62} />

      <_Text>{bookFormData.service}</_Text>
      <Paragraph>
        {month[bookFormData.date.getMonth()]} {bookFormData.date.getDate()},{" "}
        {bookFormData.time}
      </Paragraph>

      <_Text>{bookFormData.name}</_Text>

      <Paragraph>
        <_Span>tel:</_Span>
        {bookFormData.phone}, <_Span>email:</_Span>
        {bookFormData.email}
      </Paragraph>
    </_Container>
  );
};

export default ConfirmBook;
