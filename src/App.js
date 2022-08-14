import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {Routes, Route} from 'react-router-dom'
export default function App() {
  return (
    <div className="App">
      <center>
        <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/' element={<Login />}/>
        </Routes>
      </center>
    </div>
  );
}
