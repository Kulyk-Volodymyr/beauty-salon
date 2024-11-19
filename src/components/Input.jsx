import styled from "styled-components";

const inputs = ["text", "email", "tel", "textarea", "submit"];

const _Label = styled.label`
  display: none;
`;

const _Input = styled.input`
  background-color: transparent;
  border: 1px solid var(--dark);
  border-radius: 0.5rem;
  color: var(--dark);
  font-size: 1rem;
  outline: ${(props) => (props.$error ? "2px solid var(--peach800)" : "none")};
  transition: all 0.3s;
  padding: 0.75rem;
  @media (min-width: 992px) {
    font-size: 1.125rem;
    padding: 1rem;
  }
  &:hover,
  &:focus {
    background-color: var(--peach050);
  }
  &::placeholder {
    color: var(--gray);
  }
`;

const _Submit = styled.input.attrs({
  type: "submit",
})`
  background-color: var(--peach400);
  border: 1px solid var(--peach400);
  border-radius: 0.5rem;
  color: var(--dark);
  cursor: pointer;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  outline: none;
  padding: 0.75rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  margin: 0.5rem auto 0 auto;
  min-width: fit-content;
  max-width: 16rem;
  width: 100%;
  @media (min-width: 768px) {
    font-size: 1.125rem;
    padding: 1rem;
  }
  &:hover,
  &:focus {
    background-color: transparent;
    border-color: var(--dark);
    color: var(--dark);
  }
  &:active {
    background-color: transparent;
    border-color: var(--dark);
    color: var(--dark);
  }
  &:focus {
    outline: 4px solid var(--peach400);
  }
`;

const ErrorInput = styled.p`
  border: 1px solid red;
  color: red;
`;

const Input = ({
  type,
  name,
  id,
  value,
  placeholder,
  error,
  onChange,
  list,
}) => {
  return (
    <>
      {["text", "email", "tel"].includes(type) && (
        <>
          <_Label htmlFor={id}>{name}</_Label>
          <_Input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            $error={error}
            onChange={onChange}
            list={list}
            value={value}
          />
        </>
      )}

      {type === "textarea" && (
        <>
          <_Label htmlFor={id}>{name}</_Label>
          <_Input
            as="textarea"
            name={name}
            id={id}
            placeholder={placeholder}
            rows={5}
          />
        </>
      )}

      {type === "submit" && <_Submit type={type} value={value} />}

      {!inputs.includes(type) && <ErrorInput>Invalid input type</ErrorInput>}
    </>
  );
};

export default Input;
