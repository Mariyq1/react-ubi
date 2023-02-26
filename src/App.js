import React from "react";
import './styles/App.css';
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./Components/UI/navbar/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route>
          <Route path="/about" element={<About/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/*" element={<Navigate to="/posts" replace />} />

        </Route>
      </Routes>
    </BrowserRouter>
   
  )
}
export default App;
