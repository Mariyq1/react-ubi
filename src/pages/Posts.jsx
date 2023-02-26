import React, { useEffect, useState } from "react";
import { useFetching } from "../Components/hooks/useFetching";
import { usePosts } from "../Components/hooks/usePosts";
import Loader from "../Components/UI/loader/Loader";
import Pagination from "../Components/UI/paginator/Pagination";
import PostServise from "../Api/PostServise";
import PostList from "../Components/PostList";
import PostForm from "../Components/PostForm";
import PostFilter from "../Components/PostFilter";
import MyModal from "../Components/UI/modal/MyModal";
import MyButton from "../Components/UI/button/MyButton";
import { getPageCount } from "../utils/pages";
import '../styles/App.css';


function Posts() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'k', body: 'D'},
    {id: 2, title: 'B', body: 'H'},
    {id: 3, title: 'a', body: 'A'}
  ])
  const [filter, setFilter] = useState({sort:'', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [fetchPosts, isPostsLoading, postError ] = useFetching(async(limit,page)=>{
    const response = await PostServise.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit));
  });
  useEffect(()=>{
    fetchPosts(limit, page)}, []);

  const createPost = (newPost)=>{
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post)=>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) =>{
    setPage(page);
    fetchPosts(limit, page);
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
      {postError && 
      <h1>Error ${postError}</h1>
      }
      {isPostsLoading
        ? <div style={{dispaly:'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
        :<PostList posts={sortedAndSearchedPosts} title="Posts about JS"remove={removePost}/>
      }
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
      
    </div>
    );
}
export default Posts;
