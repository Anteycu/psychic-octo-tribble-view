import axios from "axios";

export const postFeedback = async ({ name, email, content }) => {
  try {
    const response = await axios.post("http://localhost:8080/api/feedback", {
      name,
      email,
      content,
    });
    alert(`Feedback from ${response.data.name} created`);
  } catch (error) {
    alert(error);
  }
};
