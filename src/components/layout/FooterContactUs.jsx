import styled from "styled-components";

import Paragraph from "../Paragraph";
import SocialNetworks from "../SocialNetworks";

const _Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  @media (min-width: 480px) {
    max-width: 14rem;
  }
  @media (min-width: 992px) {
    max-width: 17rem;
  }
`;

const _Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 1.625rem;
  }
`;

const FooterContactUs = () => {
  return (
    <_Inner>
      <_Title>Contact Us</_Title>
      <Paragraph fontWeight="500">
        Don't miss promotions, follow us for the latest news
      </Paragraph>
      <SocialNetworks />
    </_Inner>
  );
};

export default FooterContactUs;
