import React from "react";
import styled from "styled-components";
import Contact from "./Contact/Contact";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import Footer from "./Footer/Footer";
import { postFeedback } from "./actions/feedbacks";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
`;

export default function App() {
  const formSubmitHandler = (data) => {
    console.log(data);
    postFeedback(data);
  };

  return (
    <AppWrapper>
      <Contact>
        <FeedbackForm onSubmit={formSubmitHandler} />
      </Contact>
      <Footer />
    </AppWrapper>
  );
}
