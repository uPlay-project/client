import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Album from "./components/AddAlbum";
import AddTrack from "./components/AddTrack";
import AlbumList from "./pages/AlbumList";
// import IsPrivate from "./components/IsPrivate"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/track" element={<AddTrack/>}/>
      <Route path="/album/list" element={<AlbumList/>}/>
        <Route path="/album" element={<Album/>}/>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;






         


         


