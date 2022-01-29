import React, { useState } from "react";

export default function FeedbackForm({ onSubmit }) {
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
    <form onSubmit={handleSubmit}>
      {" "}
      Reach out to us!
      <label>
        <input
          type="text"
          name="name"
          placeholder="Your name*"
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label>
        <input
          type="email"
          name="email"
          placeholder="Your e-mail*"
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label>
        <input
          type="text"
          name="content"
          placeholder="Your message*"
          onChange={handleContentChange}
          value={content}
        />
      </label>
      <button type="submit">Send message</button>
    </form>
  );
}
