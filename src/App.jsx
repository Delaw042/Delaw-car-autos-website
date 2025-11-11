import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";

export default function App() {
  return (
   <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500">
    <Navbar />
    <Home />
   </div>
  );
}
