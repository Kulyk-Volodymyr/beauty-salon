import { useState } from "react";
import styled, { keyframes } from "styled-components";

const _Container = styled.div`
  background-color: ${(props) => props.$backgroundColor || "transparent"};
  position: relative;
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
  height: 90px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  width: 90px;
`;

const _Pic = styled.img`
  height: auto;
  position: relative;
  width: 100%;
`;

const Photo = ({ src, alt, loading, width, height, backgroundColor }) => {
  const [unloaded, setUnloaded] = useState(true);

  return (
    <_Container $backgroundColor={backgroundColor}>
      <_Pic
        src={src}
        alt={alt}
        loading={loading}
        width={width}
        height={height}
        onError={(e) => {
          e.target.style.outline = "2px dashed var(--nut300)";
        }}
        style={unloaded ? { color: "transparent" } : { color: "initial" }}
        onLoad={() => setUnloaded(false)}
      />
      {unloaded && <_Spinner />}
    </_Container>
  );
};

export default Photo;
