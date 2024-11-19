import styled from "styled-components";

const _Font = styled.h1`
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.5;
  margin-block: 0rem;
  @media (min-width: 320px) {
    font-size: 2.625rem;
  }
  @media (min-width: 480px) {
    font-size: 2.875rem;
  }
  @media (min-width: 768px) {
    font-size: 3.125rem;
  }
`;

const HeaderH1 = ({ children }) => {
  return <_Font>{children}</_Font>;
};

export default HeaderH1;
