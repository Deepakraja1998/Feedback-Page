import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const FeedbackForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const [submitted, setSubmitted] = useState(false); // State to track if feedback is submitted

  useEffect(() => {
    const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks"));
    if (storedFeedbacks) {
      setFeedbacks(storedFeedbacks);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = { email, name, comment,roll:'user'};
    const updatedFeedbacks = [...feedbacks, newFeedback];
    setFeedbacks(updatedFeedbacks);
    // axios.post('http://localhost:5000/feedback/',newFeedback).then(resp =>{alert('added successfully')})
    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));
    setEmail("");
    setName("");
    setComment("");
    setSubmitted(true); // Set submitted to true after feedback is submitted
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      {submitted ? ( // Show thank you message and button after feedback is submitted
        <div>
          <p> Your feedback is successfully!</p>
          <Link to="/feedback-list">
            <button>Go to Feedback List</button>
          </Link>
        </div>
      ) : (
        // Show form if feedback is not submitted
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
