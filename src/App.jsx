import { useState } from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Userlogin from "./pages/Userlogin"; 
import Usersignup from "./pages/Usersignup";
import Useraccount from "./pages/Useraccount";
import Protected from "./component/Protected";
 
 
 
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/usersignup" element={<Usersignup />} />
          <Route path="/account" element={ <Protected> <Useraccount /></Protected>} />

 
        
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
