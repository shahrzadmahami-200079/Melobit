import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from "./component/Navbar";
import HomePage from "./component/HomePage";
import SearchPage from "./component/SearchPage";
import DetailsPage from "./component/DetailsPage";

function App() {
  return (
    <div className="container-fluid bg-dark">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/detailsong/:id" element={<DetailsPage />} />
        <Route path="search/detailsong/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
