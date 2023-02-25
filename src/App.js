import React, { useRef, useState } from "react";
import './styles/App.css';
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/button/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'}
  ])
  const [title, setTitle] = useState("");
  const addNewPost = (e) =>{
    e.preventDefault();
    console.log(bodyInputRef.current.value);

  }
  const bodyInputRef = useRef();
  return (
    <div className="App">
      <form>
        <MyInput 
          type="text" 
          placeholder="Name of the post"
          value={title}
          onChange={e=> setTitle(e.target.value)}
          />
        <MyInput 
          type="text" 
          placeholder="Post description"
          ref={bodyInputRef}
          />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title="Posts about JS"/>
    </div>
    );
}
export default App;
