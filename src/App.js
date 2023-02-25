import React, { useState } from "react";
import './styles/App.css';
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'}
  ])
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Name of the post"/>
        <input type="text" placeholder="Post description"/>
        <MyButton>Create post</MyButton>
      </form>
      <PostList posts={posts} title="Posts about JS"/>
    </div>
    );
}
export default App;
