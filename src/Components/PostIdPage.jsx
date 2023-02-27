import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostServise from "../Api/PostServise";
import {useFetching} from "./hooks/useFetching";
import Loader from "./UI/loader/Loader";


const PostIdPage = ()=>{
    const [post, setPost] = useState({})
    const params = useParams();
    const [fetchPostById, isLoading, error] = useFetching(async(id)=>{
        const response = await PostServise.getById(id);
        setPost(response.data)
    })
    useEffect(()=>{
        fetchPostById(params.id)
    },[])
    return(
        <div>
            <h1>You open post page id = {params.id}</h1>
            {isLoading
              ?<Loader/>
              :<div>{post.id}.{post.title}</div>
            }
            
        </div>
    )
}
export default PostIdPage;