import React, { useMemo, useState } from "react";
import './styles/App.css';
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/button/select/MySelect";
import MyInput from "./Components/UI/button/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'k', body: 'D'},
    {id: 2, title: 'B', body: 'H'},
    {id: 3, title: 'a', body: 'A'}
  ])
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  const createPost = (newPost)=>{
    setPosts([...posts, newPost])
  }
  const removePost = (post)=>{
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const sortPosts = (sort)=>{
    setSelectedSort(sort);
  }
  const sortedPosts = useMemo(()=>{
    if(selectedSort){
      return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]))
    }
      return posts;
    },[selectedSort, posts]
  );
  
  const sortedAndSearchedPosts = useMemo(()=> {
      return sortedPosts.filter(post =>post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts]
  )
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin:'15px 0'}}/>
      <div>
        <MyInput 
           plasholder="Search"
           value={searchQuery}
           onChange={e=> setSearchQuery(e.target.value)}/>
        <MySelect
           defaultValue="Sort by"
           value={selectedSort}
           onChange={sortPosts}
           options={[
            {value: 'title', name: 'Name'},
            {value: 'body', name: 'Description'}
           ]}/>
      </div>
        {sortedAndSearchedPosts.length 
        ? <PostList posts={sortedAndSearchedPosts} title="Posts about JS"remove={removePost}/>
        :<h1 style={{textAlign: 'center'}}>
          Can't find posts</h1>
      }
    </div>
    );
}
export default App;
