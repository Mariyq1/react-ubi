import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";

const AppRouter = ()=>{
    return (
    <Routes>
        <Route>
          <Route path="/about" element={<About/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/*" element={<Navigate to="/posts" replace />} />
        </Route>
    </Routes>
    )
}
export default AppRouter;