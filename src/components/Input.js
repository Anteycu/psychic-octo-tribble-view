import styled from "styled-components";
import React from "react";

const StyledInput = styled.input`
  width: 100%;
  height: ${(props) => props.height || "93px"};
  margin-bottom: ${(props) => props.margin || "8px"};
  padding-left: 46px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  font-size: 18px;
  line-height: 180%;
  color: #2d2d2d;
  &::-moz-placeholder {
    color: #2d2d2d;
  }
  &::-webkit-input-placeholder {
    color: #2d2d2d;
  }

  @media ${(props) => props.theme.media.phone} {
    height: 35px;
    font-size: 16px;
    margin-bottom: 3%;
    padding-left: 10px;
    line-height: 60%;
  } ;
`;

export default function Input(props) {
  return <StyledInput {...props} />;
}
