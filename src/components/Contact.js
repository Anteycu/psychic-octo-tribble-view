import React from "react";
import styled from "styled-components";
import BackgroundImg from "../img/background-feedback.svg";

const StyledContact = styled.div`
  width: 100%;
  padding-left: 147px;
  padding-top: 179px;
  flex: 1 0 auto;
  background-image: url("${BackgroundImg}");
  @media ${(props) => props.theme.media.phone} {
    display: flex;
    padding-left: 10px;
    padding-top: 30px;
    background-position: auto;
    background-size: cover;
    align-items: center;
    justify-content: center;
  } ;
`;

export default function Contact({ children }) {
  return <StyledContact>{children}</StyledContact>;
}
