import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SocialPosts from "./components/SocialPosts";
import Post from "./models/Post";

const testData: Post[] = [
  {
    title: "Journal Day 1",
    thought: "This was excellent",
  },
  {
    title: "Journal Day 2",
    thought: "This was good",
  },
  {
    title: "Journal Day 3",
    thought: "This was mid",
  },
];
function App() {
  return (
    <div className="App">
      <h1> My Thoughts </h1>
      <SocialPosts posts={testData} />
    </div>
  );
}

export default App;
