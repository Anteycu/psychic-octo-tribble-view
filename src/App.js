import React from "react";
import styled from "styled-components";
import Contact from "./components/Contact";
import FeedbackForm from "./components/FeedbackForm";
import Footer from "./components/Footer";
import Flex from "./components/Flex";
import { postFeedback } from "./actions/feedbacks";

const AppWrapper = styled.div`
  width: 1440px;
  min-height: 100vh;
  @media ${(props) => props.theme.media.phone} {
    max-width: 768px;
  } ;
`;

export default function App() {
  const formSubmitHandler = (data) => {
    console.log(data);
    postFeedback(data);
  };

  return (
    <AppWrapper>
      <Flex direction={"column"}>
        <Contact>
          <FeedbackForm onSubmit={formSubmitHandler} />
        </Contact>
        <Footer />
      </Flex>
    </AppWrapper>
  );
}
