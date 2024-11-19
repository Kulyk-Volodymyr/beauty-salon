import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const _Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(18, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  @media (min-width: 480px) {
    gap: 1.5rem;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(10, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
  @media (min-width: 1200px) {
    gap: 2rem;
  }
`;

const _Picture = styled.div`
  position: relative;
`;

const _Picture1 = styled(_Picture)`
  grid-column: 1/-1;
  grid-row: 5/11;
  @media (min-width: 480px) {
    grid-column: 1/6;
    grid-row: 4/8;
  }
  @media (min-width: 992px) {
    grid-column: 4/10;
    grid-row: 1/-1;
  }
`;

const _Picture2 = styled(_Picture)`
  grid-column: 1/4;
  grid-row: 11/15;
  @media (min-width: 480px) {
    grid-column: 6/-1;
    grid-row: 1/6;
  }
  @media (min-width: 992px) {
    grid-column: 1/4;
    grid-row: 3/-1;
  }
`;

const _Picture3 = styled(_Picture)`
  grid-column: 4/-1;
  grid-row: 11/15;
  @media (min-width: 480px) {
    grid-column: 6/-1;
    grid-row: 6/-1;
  }
  @media (min-width: 992px) {
    grid-column: 10/-1;
    grid-row: 1/5;
  }
`;

const _Picture4 = styled(_Picture)`
  grid-column: 1/-1;
  grid-row: 1/5;
  @media (min-width: 480px) {
    grid-column: 1/6;
    grid-row: 1/4;
  }
  @media (min-width: 992px) {
    grid-column: 1/4;
    grid-row: 1/3;
  }
`;

const _Picture5 = styled(_Picture)`
  grid-column: 1/-1;
  grid-row: 15/19;
  @media (min-width: 480px) {
    grid-column: 1/6;
    grid-row: 8/-1;
  }
  @media (min-width: 992px) {
    grid-column: 10/-1;
    grid-row: 5/-1;
  }
`;

const spinner1 = keyframes`
  100% {
      transform: translate(-50%, -50%) rotate(1turn);
   }
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

const _Photo = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: relative;
  width: 100%;
`;

const InstagramPhotos = () => {
  const [unloaded1, setUnloaded1] = useState(true);
  const [unloaded2, setUnloaded2] = useState(true);
  const [unloaded3, setUnloaded3] = useState(true);
  const [unloaded4, setUnloaded4] = useState(true);
  const [unloaded5, setUnloaded5] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <_Photos>
      <_Picture1
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-once="true"
      >
        <_Photo
          src="/assets/images/instgram-pic01.jpg"
          alt="makeup for a girl"
          width={800}
          height={800}
          onError={(e) => {
            e.target.style.outline = "2px dashed var(--nut300)";
          }}
          onLoad={() => setUnloaded1(false)}
          style={unloaded1 ? { color: "transparent" } : { color: "inintial" }}
        />
        {unloaded1 && <_Spinner />}
      </_Picture1>

      <_Picture2
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-once="true"
      >
        <_Photo
          src="/assets/images/instgram-pic02.jpg"
          alt="girl in a hair salon"
          width={480}
          height={700}
          onError={(e) => {
            e.target.style.outline = "2px dashed var(--nut300)";
          }}
          onLoad={() => setUnloaded2(false)}
          style={unloaded2 ? { color: "transparent" } : { color: "inintial" }}
        />
        {unloaded2 && <_Spinner />}
      </_Picture2>

      <_Picture3
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-once="true"
      >
        <_Photo
          src="/assets/images/instgram-pic03.jpg"
          alt="girl in a hair salon"
          width={480}
          height={700}
          onError={(e) => {
            e.target.style.outline = "2px dashed var(--nut300)";
          }}
          onLoad={() => setUnloaded3(false)}
          style={unloaded3 ? { color: "transparent" } : { color: "inintial" }}
        />
        {unloaded3 && <_Spinner />}
      </_Picture3>

      <_Picture4
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-once="true"
      >
        <_Photo
          src="/assets/images/instgram-pic04.jpg"
          alt="girl in a hair salon"
          width={600}
          height={400}
          onError={(e) => {
            e.target.style.outline = "2px dashed var(--nut300)";
          }}
          onLoad={() => setUnloaded4(false)}
          style={unloaded4 ? { color: "transparent" } : { color: "inintial" }}
        />
        {unloaded4 && <_Spinner />}
      </_Picture4>

      <_Picture5
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-once="true"
      >
        <_Photo
          src="/assets/images/instgram-pic05.jpg"
          alt="girl in a hair salon"
          width={600}
          height={400}
          onError={(e) => {
            e.target.style.outline = "2px dashed var(--nut300)";
          }}
          onLoad={() => setUnloaded5(false)}
          style={unloaded5 ? { color: "transparent" } : { color: "inintial" }}
        />
        {unloaded5 && <_Spinner />}
      </_Picture5>
    </_Photos>
  );
};

export default InstagramPhotos;
