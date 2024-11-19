import styled from "styled-components";

const _Font = styled.h2`
  color: ${(props) => props.$color || "var(--dark)"};
  text-align: ${(props) => props.$textAlign || "center"};
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.5;
  @media (min-width: 320px) {
    font-size: 2.125rem;
  }
  @media (min-width: 480px) {
    font-size: 2.25rem;
  }
  @media (min-width: 768px) {
    font-size: 2.625rem;
  }
`;

const HeaderH2 = ({ color, textAlign, children }) => {
  return (
    <_Font $color={color} $textAlign={textAlign}>
      {children}
    </_Font>
  );
};

export default HeaderH2;
