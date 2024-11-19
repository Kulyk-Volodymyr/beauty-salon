import { Link } from "react-router-dom";
import styled from "styled-components";

const _Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: ${(props) => props.$marginTop || "0"};
`;

const _Network = styled(Link)`
  background-color: var(--dark);
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-position: center;
  -webkit-mask-position: center;
  transition: background-color 0.2s;
  height: 2rem;
  width: 2rem;
  &:hover {
    background-color: var(--gray);
  }
  &:focus {
    background-color: var(--brown);
  }
`;

const _Facebook = styled(_Network)`
  -webkit-mask: url("/assets/images/facebook-icon.svg");
  mask: url("/assets/images/facebook-icon.svg");
`;

const _Instagram = styled(_Network)`
  -webkit-mask: url("/assets/images/instagram-icon.svg");
  mask: url("/assets/images/instagram-icon.svg");
`;

const SocialNetworks = ({ marginTop }) => {
  return (
    <_Container $marginTop={marginTop}>
      <_Facebook
        to="https://www.facebook.com/"
        target="_blank"
        onClick={(e) => e.target.blur()}
      />
      <_Instagram
        to="https://www.instagram.com/"
        target="_blank"
        onClick={(e) => e.target.blur()}
      />
    </_Container>
  );
};

export default SocialNetworks;
