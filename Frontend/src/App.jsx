//import Navbar from "./components/Navbar"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from './Pages/About';
import Blog from "./Pages/Blog";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
//import { react } from '@vitejs/plugin-react';
//import { Routes } from 'react-router-dom';


const App = () =>{
    return (
      <>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/blog" element={<Blog/>}/>
         <Route path="/service" element={<Service/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/login" element={<Login/>}/>
         
      </Routes>
      </BrowserRouter>

      </>
    )
  }
  
  export default App
  