import React, { useMemo, useState } from "react";
import './styles/App.css';
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'k', body: 'D'},
    {id: 2, title: 'B', body: 'H'},
    {id: 3, title: 'a', body: 'A'}
  ])
  const [filter, setFilter] = useState({sort:'', query: ''})
  
  const createPost = (newPost)=>{
    setPosts([...posts, newPost])
  }
  const removePost = (post)=>{
    setPosts(posts.filter(p => p.id !== post.id))
  }
  
  const sortedPosts = useMemo(()=>{
    if(filter.sort){
      return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
    }
      return posts;
    },[filter.sort, posts]
  );
  
  const sortedAndSearchedPosts = useMemo(()=> {
      return sortedPosts.filter(post =>post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts]
  )
  return (
    <div className="App">
      <PostForm create={createPost}/>
        <hr style={{margin:'15px 0'}}/>
      <PostFilter 
        filter={filter} 
        setFilter={setFilter}/>
        {sortedAndSearchedPosts.length 
        ? <PostList posts={sortedAndSearchedPosts} title="Posts about JS"remove={removePost}/>
        :<h1 style={{textAlign: 'center'}}>
          Can't find posts</h1>
      }
    </div>
    );
}
export default App;
