import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`
  width: 218px;
  height: 73px;
  background: #fad34f;
  border-radius: 500px;
  border: 0;
  padding: 0;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
  @media ${(props) => props.theme.media.phone} {
    width: 120px;
    height: 40px;
    font-size: 16px;
    line-height: 16px;
  } ;
`;

export default function Button(props) {
  return <StyledButton {...props} />;
}
