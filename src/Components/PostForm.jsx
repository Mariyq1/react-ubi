import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/button/input/MyInput";

const PostForm = ({create})=>{
    const [post, setPost] = useState({title: '', body: ''});
    const addNewPost = (e) =>{
    e.preventDefault();
    const newPost = {
        ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''});
  }
    return(
        <form>
        <MyInput 
          type="text" 
          placeholder="Name of the post"
          value={post.title}
          onChange={e=> setPost({...post, title: e.target.value})}
          />
        <MyInput 
          type="text" 
          placeholder="Post description"
          value={post.body}
          onChange={e=> setPost({...post, body:e.target.value})}
          />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
    )
}
export default PostForm;