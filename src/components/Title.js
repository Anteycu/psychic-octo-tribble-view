import styled from "styled-components";
import React from "react";

const StyledTitle = styled.p`
  margin-bottom: 30px;
  @media ${(props) => props.theme.media.phone} {
    margin-bottom: 5%;
  } ;
`;

export default function Title(props) {
  return <StyledTitle {...props} />;
}
