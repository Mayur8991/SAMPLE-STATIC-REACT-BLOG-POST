import React from "react";
import Post from "./components/Post/Post";
import Posts from "./components/Posts/Posts";
import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      <h1 className="main-heading">SAMPLE BLOG POST</h1>
      <Posts />
    </div>
  );
};

export default App;
