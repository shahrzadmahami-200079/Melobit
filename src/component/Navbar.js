
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Melobit</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <Link to="/" className='text-decoration-none'>
                        <li class="nav-item active text-decoration-none">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                    </Link>
                    <Link to="/search" className='text-decoration-none'>
                        <li class="nav-item">
                            <a class="nav-link" href="#">search</a>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;
