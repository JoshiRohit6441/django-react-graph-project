import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContent from "./MainContent";
import Create from "./Create";
import Table from "./Table";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="app">
          {/* <Sidebar /> */}
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/table" element={<Table />} />
            <Route path="/" element={<MainContent />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
