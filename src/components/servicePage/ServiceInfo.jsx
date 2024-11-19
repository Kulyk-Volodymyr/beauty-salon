import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

import HeaderH2 from "../HeaderH2";
import Paragraph from "../Paragraph";

const _Article = styled.article`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 1200px) {
    gap: 3rem;
  }
`;

const _Services = styled.ul`
  display: grid;
  gap: 2rem;
  list-style: none;
  width: 100%;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 6rem;
  }
`;

const _Service = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  width: 100%;
`;

const _Name = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  flex: 1;
  line-height: 1.5;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ServiceInfo = ({ service }) => {
  return (
    <_Article>
      <HeaderH2>{service.title}</HeaderH2>
      <Paragraph fontWeight="500">{service.description}</Paragraph>
      <_Services>
        {service.services.map((item) => (
          <li key={uuidv4()}>
            <_Service>
              <_Name>{item.name}</_Name>
              <Paragraph fontWeight="500">£ {item.price}</Paragraph>
            </_Service>
            <Paragraph color="var(--gray)" textAlign="left">
              {item.depiction}
            </Paragraph>
          </li>
        ))}
      </_Services>
    </_Article>
  );
};

export default ServiceInfo;
