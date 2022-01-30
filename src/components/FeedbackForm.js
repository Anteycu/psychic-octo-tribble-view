import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import Title from "./Title";

const StyledFeedbackForm = styled.form`
  width: 563px;
  margin-bottom: 174px;
  font-size: 40px;
  line-height: 130%;
  color: #3e3e3e;
  @media ${(props) => props.theme.media.phone} {
    max-width: 300px;
    margin-bottom: 1%;
    font-size: 20px;
    line-height: 60%;
  } ;
`;

export default function FeedbackForm({ onSubmit, children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, content });
    setName("");
    setEmail("");
    setContent("");
  };

  return (
    <StyledFeedbackForm onSubmit={handleSubmit}>
      <Title>Reach out to us!</Title>
      <Input
        type="text"
        placeholder="Your name*"
        onChange={handleNameChange}
        value={name}
      />
      <Input
        type="email"
        placeholder="Your e-mail*"
        onChange={handleEmailChange}
        value={email}
      />
      <Textarea
        placeholder="Your message*"
        onChange={handleContentChange}
        value={content}
      />
      <Button type="submit">Send message</Button>
    </StyledFeedbackForm>
  );
}
