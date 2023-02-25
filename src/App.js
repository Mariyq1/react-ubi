import React, { useState } from "react";
import './styles/App.css';
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/button/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'k', body: 'D'},
    {id: 2, title: 'B', body: 'H'},
    {id: 3, title: 'a', body: 'A'}
  ])
  
  
  const [selectedSort, setSelectedSort] = useState("");
  
  const createPost = (newPost)=>{
    setPosts([...posts, newPost])
  }
  const removePost = (post)=>{
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const sortPosts = (sort)=>{
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
  }
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin:'15px 0'}}/>
      <div>
        <MySelect
           defaultValue="Sort by"
           value={selectedSort}
           onChange={sortPosts}
           options={[
            {value: 'title', name: 'Name'},
            {value: 'body', name: 'Description'}
           ]}/>
      </div>
      {posts.length 
        ? <PostList posts={posts} title="Posts about JS"remove={removePost}/>
        :<h1 style={{textAlign: 'center'}}>
          Can't find posts</h1>
      }
    </div>
    );
}
export default App;
