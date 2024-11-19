import styled, { keyframes } from "styled-components";

const waveMove = keyframes`
from{background-position: 0%;}
  to {
       background-position: 100rem;
   }
`;

const _Wave = styled.div`
  animation: ${waveMove} infinite linear;
  animation-duration: ${(props) => (props.$position === "top" ? "48s" : "36s")};
  background-color: ${(props) =>
    props.$position === "top" ? "#fde4db" : "transparent"};
  background-image: ${(props) =>
    props.$position === "top"
      ? `url(/assets/images/wave-top.svg)`
      : `url(/assets/images/wave-bottom.svg)`};
  background-size: auto 100%;
  background-position: 0%;
  background-repeat: repeat-x;
  height: 10rem;
  overflow: hidden;
  width: 100%;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const AnimatedWave = ({ position }) => {
  return <_Wave $position={position}></_Wave>;
};

export default AnimatedWave;
