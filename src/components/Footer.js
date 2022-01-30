import React from "react";
import styled from "styled-components";
import FooterImg from "../img/backgrnd-footer.svg";

const StyledFooter = styled.div`
  width: 100%;
  height: 200px;
  flex: 0 0 auto;
  border: 1px solid #d8d8d8;
  background-image: url("${FooterImg}");
  background-position: 0px -38px;
  @media ${(props) => props.theme.media.phone} {
    height: 85px;
    background-position: auto;
    background-size: cover;
  } ;
`;

export default function Footer() {
  return <StyledFooter />;
}
