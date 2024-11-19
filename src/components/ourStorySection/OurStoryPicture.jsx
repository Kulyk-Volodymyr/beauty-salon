import styled, { keyframes } from "styled-components";

import Photo from "../Photo";

const _Wrapper = styled.div`
  padding-left: 5%;
  padding-right: 14%;
`;

const rotateFrame = keyframes`
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const _Frame = styled.div`
  aspect-ratio: 1;
  background-color: var(--peach600);
  clip-path: polygon(
    0% 0%,
    0% 100%,
    1.8% 100%,
    1.8% 1.8%,
    98.2% 1.8%,
    98.2% 98.2%,
    1.8% 98.2%,
    1.8% 100%,
    100% 100%,
    100% 0%
  );
  height: 92%;
  position: absolute;
  top: 4%;
  right: 7%;
  &::after {
    animation: ${rotateFrame} 120s infinite linear;
    background-image: conic-gradient(
      var(--brown),
      var(--peach300),
      var(--peach600),
      var(--peach300),
      var(--nut400),
      var(--peach300),
      var(--peach600),
      var(--peach300),
      var(--brown)
    );
    content: "";
    height: 150%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    width: 150%;
  }
`;

const circle1 = keyframes`
  from {
    transform: scale(1) translate(0, 0);
  }
  20% {
    transform: scale(0.9) translate(-4px, 4px);
  }
  70% {
    transform: scale(1.6) translate(-6px, 6px);
  }
  to {
    transform: scale(2) translate(-10px, 2px);
  }
`;

const _Circle1 = styled.div`
  animation: ${circle1} 15s infinite ease-in-out alternate;
  aspect-ratio: 1;
  background-color: var(--peach800);
  background-image: linear-gradient(var(--nut200) 10%, var(--peach800) 90%);
  border-radius: 50%;
  height: 1rem;
  position: absolute;
  top: 3%;
  left: 30%;
  @media (min-width: 480px) {
    height: 1.25rem;
  }
  @media (min-width: 992px) {
    height: 1rem;
  }
  @media (min-width: 1120px) {
    height: 1.25rem;
  }
`;

const circle2 = keyframes`
  from {
    transform: scale(1) translate(0, 0);
  }
  20% {
    transform:scale(1.2) translate(-6px, 2px);
  }
  60% {
    transform:scale(1) translate(-10px, 10px);
  }
  to {transform:scale(0.7) translate(-4px, 40px);
  }
`;

const _Circle2 = styled(_Circle1)`
  animation: ${circle2} 10s infinite linear alternate;
  height: 2rem;
  top: 0%;
  left: auto;
  right: 4%;
  @media (min-width: 480px) {
    height: 2.5rem;
  }
  @media (min-width: 992px) {
    height: 2rem;
  }
  @media (min-width: 1120px) {
    height: 2.5rem;
  }
`;

const circle3 = keyframes`
  from {
    transform: scale(1) translate(0, 0);
  }
  30% {
    transform:scale(0.7) translate(18px, -18px);
  }
  60% {
    transform:scale(0.9) translate(24px, 0);
  }
  to {transform:scale(1.1) translate(12px, 8px);
  }
`;

const _Circle3 = styled(_Circle1)`
  animation: ${circle3} 10s infinite linear alternate;
  height: 2.5rem;
  top: 50%;
  left: 0%;
  @media (min-width: 480px) {
    height: 3.375rem;
  }
  @media (min-width: 992px) {
    height: 2.5rem;
  }
  @media (min-width: 1120px) {
    height: 3.375rem;
  }
`;

const circle4 = keyframes`
   from {
    transform: scale(1) translate(0, 0);
  }
  30% {
    transform:scale(0.8) translate(-12px, -24px);
  }
  70% {
    transform:scale(1.2) translate(-18px, 0);
  }
  to {transform:scale(1.6) translate(-6px, 12px);
  }
`;

const _Circle4 = styled(_Circle1)`
  animation: ${circle4} 15s infinite linear alternate;
  height: 1.5rem;
  top: 80%;
  left: auto;
  right: 0%;
  @media (min-width: 480px) {
    height: 2rem;
  }
  @media (min-width: 992px) {
    height: 1.5rem;
  }
  @media (min-width: 1120px) {
    height: 2rem;
  }
`;

const OurStoryPicture = () => {
  return (
    <>
      <_Wrapper>
        <Photo
          src="/assets/images/salon-artist.png"
          alt="smiling girl"
          width={450}
          height={490}
          backgroundColor="var(--peach400)"
        />
      </_Wrapper>
      <_Frame />
      <_Circle1 />
      <_Circle2 />
      <_Circle3 />
      <_Circle4 />
    </>
  );
};

export default OurStoryPicture;
