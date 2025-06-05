import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import "./App.css";
import TranslatorComponent from "./components/Translator";
import TranslatorTwo from "./components/TranslatorTwo";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import HomePage2 from "./pages/HomePage2";

function App()
{
  return (
    <div className="text-black bg-white">
      {/* <TranslatorComponent></TranslatorComponent> */}
      {/* <TranslatorTwo></TranslatorTwo> */}
      <NavBar />


      <Routes>
        <Route path="/" element={<HomePage2 />} />
      </Routes>
    </div>
  );
}

export default App;
