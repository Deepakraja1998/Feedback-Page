import React from "react";
import NavBar from "./NavBar";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginPage from "./LoginPage";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";
import "./styles.css";
// import LoginPage from "./LoginPage";
const App = () => {
  return (
    <>
      <BrowserRouter><NavBar/>
      <Routes>
         <Route path="/" element={<LoginPage/>}/>
        <Route path="/" element={<FeedbackForm/>}/>
        <Route path='/feedback-list' element={<FeedbackList/>}/>
      </Routes>
      </BrowserRouter>
    
    </>
  );
};

export default App;






