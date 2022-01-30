import styled from "styled-components";
import React from "react";

const StyledFlex = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  @media ${(props) => props.theme.media.phone} {
    min-height: 100vh;
  } ;
`;

export default function Flex(props) {
  return <StyledFlex {...props} />;
}
