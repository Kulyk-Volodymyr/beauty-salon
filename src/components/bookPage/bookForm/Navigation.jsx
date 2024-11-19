import styled from "styled-components";

const _Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 0.375rem;
  justify-content: center;
  padding: 0.5rem;
  @media (min-width: 480px) {
    gap: 1rem;
  }
  @media (min-width: 768px) {
    border-top: 2px solid var(--peach200);
    gap: 1.5rem;
    justify-content: flex-end;
    padding-right: 3rem;
  }
  @media (min-width: 1200px) {
    padding-block: 0.75rem;
    padding-right: 4rem;
  }
`;

const _Button = styled.button`
  background-color: var(--dark);
  border: none;
  border-radius: 0.5rem;
  color: var(--white);
  cursor: pointer;
  display: block;
  flex: 1;
  font-size: 0.875rem;
  font-weight: 500;
  max-width: 10rem;
  outline: none;
  padding: 0.75rem 0.5rem;
  position: relative;
  text-align: center;
  transition: all 0.2s;
  width: 100%;
  @media (min-width: 480px) {
    font-size: 0.938rem;
  }
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
  @media (min-width: 992px) {
    max-width: 12rem;
  }
  @media (min-width: 1200px) {
  }
  &:hover,
  &:focus {
    background-color: var(--peach400);
    color: var(--dark);
  }
  &:active {
    background-color: var(--peach600);
  }
  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`;

const Navigation = ({
  currentTab,
  setCurrentTab,
  dataProcessing,
  setDataProcessing,
  handleForm,
}) => {
  const prevTab = (e) => {
    setCurrentTab(currentTab - 1);
    e.target.blur();
  };

  const nextTab = (e) => {
    setCurrentTab(currentTab + 1);
    e.target.blur();
  };

  const sendForm = (e) => {
    handleForm();
    e.target.blur();
  };

  const backToBook = () => {
    setDataProcessing("entry");
    setCurrentTab(0);
  };

  return (
    <_Container>
      {dataProcessing === "entry" && (
        <>
          {currentTab > 0 && (
            <_Button onClick={(e) => prevTab(e)}>Back</_Button>
          )}
          <_Button
            onClick={currentTab === 3 ? (e) => sendForm(e) : (e) => nextTab(e)}
          >
            Continue
          </_Button>
        </>
      )}
      {dataProcessing === "filled" && (
        <>
          <_Button onClick={() => setDataProcessing("entry")}>Back</_Button>
          <_Button onClick={() => setDataProcessing("sending")}>Book</_Button>
        </>
      )}
      {dataProcessing === "sending" && (
        <>
          <_Button disabled>Back</_Button>
          <_Button disabled>Book</_Button>
        </>
      )}
      {dataProcessing === "sent" && (
        <>
          <_Button onClick={() => backToBook()}>Back</_Button>
          <_Button disabled>Book</_Button>
        </>
      )}
    </_Container>
  );
};

export default Navigation;
