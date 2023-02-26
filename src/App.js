import React, { useState } from "react";
import axios from 'axios';
import './styles/App.css';
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/modal/MyModal";
import MyButton from "./Components/UI/button/MyButton";
import { usePosts } from "./Components/hooks/usePosts";


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'k', body: 'D'},
    {id: 2, title: 'B', body: 'H'},
    {id: 3, title: 'a', body: 'A'}
  ])
  const [filter, setFilter] = useState({sort:'', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  
  
  const createPost = (newPost)=>{
    setPosts([...posts, newPost]);
    setModal(false);
  }
  const removePost = (post)=>{
    setPosts(posts.filter(p => p.id !== post.id))
  }
  async function fetchPosts(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }
  return (
    <div className="App">
      <button onClick={fetchPosts}>Get Posts</button>
      <MyButton onClick={()=>setModal(true)}>
        Create
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
        <hr style={{margin:'15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList posts={sortedAndSearchedPosts} title="Posts about JS"remove={removePost}/>
    </div>
    );
}
export default App;
