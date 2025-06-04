import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import "./App.css";
import TranslatorComponent from "./components/Translator";
import TranslatorTwo from "./components/TranslatorTwo";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";

function App()
{
  return (
    <div className="text-black bg-gray-200">
      {/* <TranslatorComponent></TranslatorComponent> */}
      {/* <TranslatorTwo></TranslatorTwo> */}
      <NavBar />


      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
