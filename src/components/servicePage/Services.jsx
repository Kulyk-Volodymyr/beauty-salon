import { useState } from "react";
import styled from "styled-components";

import ServiceSwitch from "./ServiceSwitch";
import ServiceInfo from "./ServiceInfo";
import LinkButton from "../LinkButton";
import { services } from "../../data/services";

const _Section = styled.section`
  margin: auto;
  max-width: 102rem;
  padding: 3rem 1rem;
  @media (min-width: 360px) {
    padding-inline: 1.5rem;
  }
  @media (min-width: 480px) {
    padding-inline: 2rem;
  }
  @media (min-width: 768px) {
    padding: 4rem 3rem;
  }
  @media (min-width: 992px) {
    padding: 5rem 5rem;
  }
`;

const _Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
  @media (min-width: 480px) {
    flex-direction: row;
    gap: 3rem;
  }
  @media (min-width: 1200px) {
    gap: 5rem;
  }
`;

const Services = () => {
  const [switchService, setSwitchService] = useState(0);
  const [currentService, setCurrentService] = useState(services[switchService]);

  return (
    <_Section>
      <_Info>
        <ServiceSwitch
          services={services}
          switchService={switchService}
          setSwitchService={setSwitchService}
          setCurrentService={setCurrentService}
        />
        <ServiceInfo service={currentService} />
      </_Info>
      <LinkButton pathname="/book" linkStyle="primary">
        Book an Appointment
      </LinkButton>
    </_Section>
  );
};

export default Services;
