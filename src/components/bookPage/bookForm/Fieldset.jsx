import styled from "styled-components";

const _Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  margin: auto;
  max-width: 30rem;
  outline: none;
  padding: 2rem 0 0 0;
  width: 100%;
  @media (min-width: 992px) {
    gap: 2.25rem;
  }
`;

const _FieldsetTime = styled(_Fieldset)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1rem;
`;

const _Legend = styled.legend`
  font-size: 1rem;
  font-weight: 500;
  @media (min-width: 992px) {
    font-size: 1.125rem;
  }
`;

const Fieldset = ({ tab, legend, children }) => {
  return (
    <>
      {tab === "service" && (
        <_Fieldset>
          <_Legend>{legend}</_Legend>
          {children}
        </_Fieldset>
      )}
      {tab === "date" && (
        <_Fieldset>
          <_Legend>{legend}</_Legend>
          {children}
        </_Fieldset>
      )}
      {tab === "time" && (
        <_FieldsetTime>
          <_Legend>{legend}</_Legend>
          {children}
        </_FieldsetTime>
      )}
      {tab === "contacts" && (
        <_Fieldset>
          <_Legend>{legend}</_Legend>
          {children}
        </_Fieldset>
      )}
    </>
  );
};

export default Fieldset;
