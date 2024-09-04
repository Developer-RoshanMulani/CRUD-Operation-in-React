import React from "react";
import "./App.css";
import Create from "./Components/Create";
import { Route, Routes } from "react-router-dom";
import Read from "./Components/Read";
import Edit from "./Components/Edit";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Read />}></Route>
        <Route exact path="/create" element={<Create />}></Route>
        <Route exact path="/edit" element={<Edit />}></Route>
      </Routes>
    </div>
  );
};

export default App;
