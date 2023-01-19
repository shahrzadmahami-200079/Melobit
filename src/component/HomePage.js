import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Navbar from "./Navbar";
import Slider from "./Slider";
import TrendArtist from "./TrendArtist";
import TopDay from "./TopDay";
import TopWeek from "./TopWeek";

function HomePage() {
    return (
        <div className="container-fluid bg-dark">
            <Slider />
            <TrendArtist />
            <TopDay />
            <TopWeek />
        </div>
    );
}

export default HomePage;
