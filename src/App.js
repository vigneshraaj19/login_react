import React from "react";
import Register from "./auth/register";
import Login from "./auth/login";
import Home from "./auth/home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes,Navigate } from "react-router-dom";
const App=() =>{
  const user = localStorage.getItem("token");
  return (
    <div>
    <Routes>
      {user && <Route path="/getAll" exact element={<Home />} />}
    <Route path="/register" exact element={<Register />} />
			<Route path="/" exact element={<Login />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/getAll" element={<Navigate replace to="/login" />} />
     </Routes>
     <ToastContainer />
     </div>
  );
}

export default App;
