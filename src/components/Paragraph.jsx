import styled from "styled-components";

const _Text = styled.p`
  color: ${(props) => props.$textColor || "var(--dark)"};
  text-align: ${(props) => props.$textAlign || "center"};
  font-size: 1rem;
  font-weight: ${(props) => props.$fontWeight || "400"};
  line-height: 1.5;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const Paragraph = ({ fontWeight, textAlign, color, children }) => {
  return (
    <_Text $fontWeight={fontWeight} $textAlign={textAlign} $textColor={color}>
      {children}
    </_Text>
  );
};

export default Paragraph;
