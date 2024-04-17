import React, { useState, useEffect } from "react";
import axios from 'axios';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const loggedinUser = JSON.parse(localStorage.getItem('storeData'))

  useEffect(() => {
    axios.get('http://localhost:5000/feedback')
    .then(data => setFeedbacks(data.data))
    .catch(err => console.log(err));
  }, []);

  const handleSearch = e =>{
    if(e.key === "Enter"){

      const filteredFeedbacks = feedbacks && feedbacks.filter((feedback) =>{
        return feedback.comment.indexOf(searchTerm) !== -1
      }
      );
      setFeedbacks(filteredFeedbacks);
      console.log(filteredFeedbacks);
    }

  }


  console.log(feedbacks);

  return (
    <>{loggedinUser && loggedinUser.user === 'loginUser' ? (<div>
      <h3>Feedback List</h3>
      <div className="search-section">
        <input
          type="text"
          placeholder="Search Feedback"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
      <table className="feedback-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks && feedbacks.map((feedback, index) => (
            <tr key={index}>
              <td>{feedback.email}</td>
              <td>{feedback.name}</td>
              <td>{feedback.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>): (<div><h2>You Do Not Have Access </h2></div>)}</>
  );
};

export default FeedbackList;
