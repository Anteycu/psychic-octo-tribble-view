import styled from "styled-components";
import React from "react";

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 189px;
  margin-bottom: ${(props) => props.margin || "23px"};
  padding-left: 46px;
  padding-top: 31px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  font-size: 18px;
  line-height: 180%;
  color: #2d2d2d;
  resize: none;
  &::-moz-placeholder {
    color: #2d2d2d;
  }
  &::-webkit-input-placeholder {
    color: #2d2d2d;
  }

  @media ${(props) => props.theme.media.phone} {
    height: 90px;
    font-size: 16px;
    margin-bottom: 4%;
    padding-left: 10px;
    padding-top: 10px;
    line-height: 60%;
  } ;
`;

export default function Textarea(props) {
  return <StyledTextarea {...props} />;
}
