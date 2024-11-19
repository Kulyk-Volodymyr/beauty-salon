import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const _Navbar = styled.nav`
  background-color: var(--white);
  padding-block: 1rem;
  position: sticky;
  top: 0;
  @media (min-width: 480px) {
    height: fit-content;
    padding-block: 3rem;
  }
`;

const _List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  justify-content: space-between;
  list-style: none;
  width: 100%;
  @media (min-width: 380px) {
    gap: 0.5rem;
  }
  @media (min-width: 480px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const _ListItem = styled.li`
  flex: 1;
`;

const _Radio = styled.input.attrs({
  type: "radio",
})`
  display: none;
  &:checked + label::after {
    background-color: var(--peach500);
  }
`;

const _Label = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  position: relative;
  &::after {
    background-color: transparent;
    content: "";
    height: 0.125rem;
    transition: all 0.3s;
    position: absolute;
    left: 0;
    bottom: -0.25rem;
    width: 100%;
    @media (min-width: 768px) {
      height: 0.188rem;
      bottom: -0.5rem;
    }
  }
  &:hover::after,
  &:focus::after {
    background-color: var(--peach800);
  }
`;

const _LabelImage = styled.img`
  height: 2rem;
  margin: auto;
  width: auto;
  @media (min-width: 480px) {
    height: 3.25rem;
  }
  @media (min-width: 768px) {
    height: 3.75rem;
  }
`;

const _LabelTitle = styled.p`
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.063rem;
  text-align: center;
  @media (min-width: 380px) {
    font-size: 0.875rem;
  }
  @media (min-width: 480px) {
    letter-spacing: 0.125rem;
  }
  @media (min-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.25rem;
  }
`;

const ServiceSwitch = ({
  services,
  switchService,
  setSwitchService,
  setCurrentService,
}) => {
  const handleService = (index) => {
    setSwitchService(index);
    setCurrentService(services[index]);
  };

  return (
    <_Navbar>
      <_List>
        {services.map((item, index) => (
          <_ListItem key={uuidv4()}>
            <_Radio
              type="radio"
              name="service"
              id={item.title.slice(0, 3) + index}
              checked={index === switchService}
              onChange={() => handleService(index)}
            />
            <_Label htmlFor={item.title.slice(0, 3) + index}>
              <_LabelImage
                src={item.icon}
                alt={item.alt}
                width={60}
                height={60}
              />
              <_LabelTitle>{item.title}</_LabelTitle>
            </_Label>
          </_ListItem>
        ))}
      </_List>
    </_Navbar>
  );
};

export default ServiceSwitch;
