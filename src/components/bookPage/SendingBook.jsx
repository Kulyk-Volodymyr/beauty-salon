import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const _Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1.5rem;
  justify-content: center;
  margin: auto;
  max-width: 30rem;
  padding: 2.5rem 1.5rem;
  @media (min-width: 768px) {
    flex: 1;
    padding: 1.5rem;
  }
  @media (min-width: 992px) {
    padding: 2rem;
  }
  @media (min-width: 1200px) {
    padding: 2.5rem;
  }
`;

const spinner1 = keyframes`
  100% {
      transform: translate(-50%, -50%) rotate(1turn);
   }
`;

const _SpinnerContainer = styled.div`
  height: 70px;
  position: relative;
  width: 70px;
`;

const _Spinner = styled.div`
  background-color: var(--nut300);
  mask: radial-gradient(circle closest-side at 50% 40%, #0000 94%, #000);
  -webkit-mask: radial-gradient(
    circle closest-side at 50% 40%,
    #0000 94%,
    #000
  );
  transform-origin: 50% 40%;
  animation: ${spinner1} 1.4s infinite linear;
  border-radius: 50%;
  height: 70px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  width: 70px;
`;

const _Text = styled.p`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5;
  @media (min-width: 768px) {
    font-size: 1.375rem;
  }
`;

const SendingBook = ({ setDataProcessing }) => {
  useEffect(() => {
    setTimeout(() => {
      setDataProcessing("sent");
    }, 2000);
  }, []);
  return (
    <_Container>
      <_SpinnerContainer>
        <_Spinner />
      </_SpinnerContainer>
      <_Text>Your appointment is being processed. Please wait.</_Text>
    </_Container>
  );
};

export default SendingBook;
