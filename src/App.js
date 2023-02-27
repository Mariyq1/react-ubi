import React from "react";
import './styles/App.css';
import { BrowserRouter} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./Components/UI/navbar/Navbar";
import AppRouter from "./Components/AppRouter";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
   
  )
}
export default App;
