import styled from "styled-components";
import { Link } from "react-router-dom";

const _Container = styled.div`
  align-items: center;
  background-color: #fde4db;
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
`;

const _Inner = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 28rem;
  width: 28rem;
`;

const _Error = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  justify-content: center;
`;

const _Digit = styled.p`
  color: #ffece6;
  font-size: 96px;
  font-weight: 700;
  -webkit-text-stroke: 2px #000;
`;

const _Svg = styled.div`
  align-items: center;
  background-color: #ffece6;
  border: 2px solid #000;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px;
`;

const _Text = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
`;

const _Text1 = styled.p`
  font-size: 1.25rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;

const _Link = styled(Link)`
  background-color: #fde4db;
  border: 1px solid #000;
  border-radius: 0.5rem;
  color: #000;
  font-size: 1.125rem;
  font-weight: 600;
  outline: none;
  padding: 0.875rem 1.25rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  &:hover,
  &:focus {
    background-color: #fccab8;
  }
`;

const Error = () => {
  return (
    <_Container>
      <_Inner>
        <_Error>
          <_Digit>4</_Digit>
          <_Svg>
            <svg
              width="52"
              height="59"
              viewBox="0 0 52 59"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.8749 50.09L36.545 49.165L37.47 52.495C34.14 55.455 30.2549 57.305 25.9999 57.305C21.93 57.305 18.0449 55.455 14.5299 52.495L15.4549 49.165L12.125 50.09C6.01995 43.43 1.94995 33.07 1.94995 25.115C1.94995 20.305 3.42997 15.68 6.01997 11.795L11.9399 13.46L10.275 7.16999C14.53 3.46999 20.08 1.25 26.185 1.25C32.29 1.25 37.84 3.46999 42.095 7.16999L40.4299 13.46L46.3499 11.795C48.9399 15.68 50.42 20.12 50.42 25.115C50.05 33.07 46.1649 43.245 39.8749 50.09Z"
                stroke="black"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.0099 32.145C19.3816 32.145 22.1149 30.4884 22.1149 28.445C22.1149 26.4015 19.3816 24.745 16.0099 24.745C12.6382 24.745 9.90491 26.4015 9.90491 28.445C9.90491 30.4884 12.6382 32.145 16.0099 32.145Z"
                fill="#DEB3A4"
                stroke="black"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M36.1749 32.145C39.5466 32.145 42.2799 30.4884 42.2799 28.445C42.2799 26.4015 39.5466 24.745 36.1749 24.745C32.8032 24.745 30.0699 26.4015 30.0699 28.445C30.0699 30.4884 32.8032 32.145 36.1749 32.145Z"
                fill="#DEB3A4"
                stroke="black"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26 46.76C29.0651 46.76 31.5499 45.6832 31.5499 44.355C31.5499 43.0267 29.0651 41.95 26 41.95C22.9348 41.95 20.45 43.0267 20.45 44.355C20.45 45.6832 22.9348 46.76 26 46.76Z"
                fill="#DEB3A4"
                stroke="black"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </_Svg>
          <_Digit>4</_Digit>
        </_Error>
        <_Text>Oops...</_Text>
        <_Text1>Page Not Found</_Text1>
        <_Link to={"/"}>GO TO HOMEPAGE</_Link>
      </_Inner>
    </_Container>
  );
};

export default Error;
