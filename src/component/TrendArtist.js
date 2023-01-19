
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function TrendArtist() {

    const [topArtists, setTopArtists] = useState([])
    const TrendingArtist = async () => {
        var Artist = await fetch('https://api-beta.melobit.com/v1/artist/trending/0/4')
            .then(Response =>
                Response.json())
            .then(data => {
                setTopArtists(data.results)
            })
    }
    TrendingArtist()

    return (

        <div className='container '>
            <p className='text-light'>Trending Artist</p>
            <div className='row'>


                {
                    topArtists.map((a, i) => (
                        <div class="card bg-dark col">
                            <img
                                className='card-img-top'
                                key={i}
                                src={a.image.cover.url}
                                alt=''
                            />
                        </div>
                    ))
                }
            </div>

        </div>

    );
}

export default TrendArtist;
