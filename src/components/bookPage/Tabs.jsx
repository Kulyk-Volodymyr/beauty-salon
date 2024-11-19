import styled from "styled-components";

const _Navigation = styled.nav`
  background-color: var(--peach200);
  padding: 0.5rem;
  @media (min-width: 480px) {
    padding: 0.5rem 1rem;
  }
  @media (min-width: 768px) {
    border-radius: 1.5rem;
    padding: 1.5rem;
  }
  @media (min-width: 992px) {
    padding: 2rem;
  }
  @media (min-width: 1200px) {
    padding: 2.5rem;
  }
`;

const _List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.375rem;
  justify-content: space-evenly;
  list-style: none;
  outline: none;
  padding: 0;
  @media (min-width: 480px) {
    gap: 1rem;
  }
  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 1rem;
  }
  @media (min-width: 992px) {
    gap: 1.5rem;
  }
`;

const _ListItem = styled.li`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const _Radio = styled.input.attrs({
  type: "radio",
})`
  display: none;
  &:checked + label {
    background-color: var(--dark);
    color: var(--white);
  }
`;

const _Label = styled.label`
  background-color: var(--nut300);
  border-radius: 0.5rem;
  cursor: ${(props) => (props.$disable ? "initial" : "pointer")};
  flex: 1;
  font-size: 0.875rem;
  font-weight: 500;
  opacity: ${(props) => (props.$disable ? "0.6" : "1")};
  padding: 0.875rem 0.5rem;
  position: relative;
  pointer-events: ${(props) => (props.$disable ? "none" : "initial")};
  text-align: center;
  transition: all 0.2s;
  @media (min-width: 480px) {
    padding: 0.938rem 0.75rem;
    font-size: 0.938rem;
  }
  @media (min-width: 768px) {
    font-size: 1.125rem;
    padding: 1.25rem 2rem;
  }
  @media (min-width: 992px) {
    padding-inline: 3rem;
  }
  @media (min-width: 1200px) {
    padding: 1.5rem 4rem;
  }
  &:hover,
  &:focus {
    background-color: var(--peach600);
  }
`;

const Tabs = ({
  currentTab,
  setCurrentTab,
  dataProcessing,
  setDataProcessing,
}) => {
  const handleChange = (tab) => {
    if (dataProcessing === "filled") setDataProcessing("entry");
    setCurrentTab(tab);
  };

  return (
    <_Navigation>
      <_List>
        <_ListItem>
          <_Radio
            type="radio"
            name="bookTab"
            id="bookTabService"
            checked={currentTab === 0}
            onChange={() => handleChange(0)}
            $disable={dataProcessing === "sending" || dataProcessing === "sent"}
          />
          <_Label
            htmlFor="bookTabService"
            $disable={dataProcessing === "sending" || dataProcessing === "sent"}
          >
            Service
          </_Label>
        </_ListItem>
        <_ListItem>
          <_Radio
            type="radio"
            name="bookTab"
            id="bookTabDate"
            checked={currentTab === 1}
            onChange={() => handleChange(1)}
            $disable={dataProcessing === "sending" || dataProcessing === "sent"}
          />
          <_Label
            htmlFor="bookTabDate"
            $disable={dataProcessing === "sending" || dataProcessing === "sent"}
          >
            Date
          </_Label>
        </_ListItem>
        <_ListItem>
          <_Radio
            type="radio"
            name="bookTab"
            id="bookTabTime"
            checked={currentTab === 2}
            onChange={() => handleChange(2)}
            $disable={dataProcessing === "sending" || dataProcessing === "sent"}
          />
          <_Label
            htmlFor="bookTabTime"
            $disable={dataProcessing === "sending" || dataProcessing === "sent"}
          >
            Time
          </_Label>
        </_ListItem>
        <_ListItem>
          <_Radio
            type="radio"
            name="bookTab"
            id="bookTabContacts"
            checked={currentTab === 3}
            onChange={() => handleChange(3)}
            $disable={dataProcessing === "sending" || dataProcessing === "sent"}
          />
          <_Label
            htmlFor="bookTabContacts"
            $disable={dataProcessing === "sending" || dataProcessing === "sent"}
          >
            Contacts
          </_Label>
        </_ListItem>
      </_List>
    </_Navigation>
  );
};

export default Tabs;
