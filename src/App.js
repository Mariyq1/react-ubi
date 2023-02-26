import React, { useEffect, useState } from "react";
import './styles/App.css';
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/modal/MyModal";
import MyButton from "./Components/UI/button/MyButton";
import { usePosts } from "./Components/hooks/usePosts";
import PostServise from "./Api/PostServise";
import Loader from "./Components/UI/loader/Loader";


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'k', body: 'D'},
    {id: 2, title: 'B', body: 'H'},
    {id: 3, title: 'a', body: 'A'}
  ])
  const [filter, setFilter] = useState({sort:'', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  
  useEffect(()=>{
    fetchPosts()
  }, []);
  const createPost = (newPost)=>{
    setPosts([...posts, newPost]);
    setModal(false);
  }
  const removePost = (post)=>{
    setPosts(posts.filter(p => p.id !== post.id))
  }
  async function fetchPosts(){
    setIsPostsLoading(true);
    const posts = await PostServise.getAll();
    setPosts(posts);
    setIsPostsLoading(false);
  }
  return (
    <div className="App">
      <MyButton onClick={()=>setModal(true)}>
        Create
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
        <hr style={{margin:'15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {isPostsLoading
        ? <div style={{dispaly:'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
        :<PostList posts={sortedAndSearchedPosts} title="Posts about JS"remove={removePost}/>
      }
    </div>
    );
}
export default App;
