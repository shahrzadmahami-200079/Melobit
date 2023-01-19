
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function TopWeek() {

    const [topSong, setTopSongs] = useState([])
    const TopSong = async () => {
        var Songs = await fetch('https://api-beta.melobit.com/v1/song/top/week/0/37')
            .then(Response =>
                Response.json())
            .then(data => {
                setTopSongs(data.results)
            })
    }
    TopSong()

    return (

        <div className='container '>
            <p className='text-light'>Top Week Song</p>
            <div className='row'>


                {
                    topSong.map((s, i) => (
                        <div class="card bg-dark col-1">
                            <img
                                className='card-img-top'
                                key={i}
                                src={s.image.cover.url}
                                alt=''
                            />
                        </div>
                    ))
                }
            </div>

        </div>

    );
}

export default TopWeek;
