import styled from "styled-components";

import HeaderH2 from "../HeaderH2";
import InstagramPhotos from "./InstagramPhotos";
import LinkButton from "../LinkButton";

const _Section = styled.section`
  background-color: var(--gray);
  background-image: url("/assets/images/hero-instagram-bg.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const _Backdrop = styled.div`
  backdrop-filter: blur(2px);
  padding-block: 3rem;
  padding-inline: 1rem;
  @media (min-width: 480px) {
    padding-inline: 1.5rem;
  }
  @media (min-width: 768px) {
    padding-block: 4rem;
    padding-inline: 3rem;
  }
  @media (min-width: 992px) {
    padding-block: 5rem;
    padding-inline: 4rem;
  }
`;

const _Inner = styled.div`
  background-color: #ffffff40;
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: auto;
  max-width: 92rem;
  padding-block: 2.5rem;
  padding-inline: 1rem;
  @media (min-width: 480px) {
    padding-inline: 1.5rem;
  }
  @media (min-width: 1200px) {
    padding-inline: 2rem;
  }
`;

const Instagram = () => {
  return (
    <_Section>
      <_Backdrop>
        <_Inner>
          <HeaderH2 color="#fccab8">INSTAGRAM</HeaderH2>

          <InstagramPhotos />

          <LinkButton
            pathname="https://www.instagram.com/"
            linkStyle="secondary"
          >
            Follow us on Instagram
          </LinkButton>
        </_Inner>
      </_Backdrop>
    </_Section>
  );
};

export default Instagram;
