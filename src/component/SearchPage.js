
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function SearchPage() {
    const [searchInput, setSearchInput] = useState("")
    const [topSong, setTopSongs] = useState([])
    const search = async () => {
        var Songs = await fetch('https://api-beta.melobit.com/v1/search/query/' + searchInput + '/0/50')
            .then(Response =>
                Response.json())
            .then(data => {
                setTopSongs(data.results)
            })
    }

    return (

        <div className='container-fluid bg-dark '>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <button onClick={search} class="btn btn-outline-secondary" type="button">Search</button>
                </div>
                <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"
                    onKeyPress={event => {
                        if (event.key == "Enter") {
                            search()
                        }
                    }}
                    onChange={event => setSearchInput(event.target.value)} />
            </div>




            <p className='text-light'>Search Result :</p>
            <div className='row'>
                {topSong.map((s) => (
                    s.type === "song" &&
                    <Link to={`detailsong/${s.song.id}`} className='col-2'>

                        <div class="card bg-dark ">
                            <img
                                className='card-img-top'
                                src={s.song.album.image.cover.url}
                                alt=''
                            />
                        </div>
                    </Link>
                ))
                }
            </div>

        </div>

    );
}

export default SearchPage;
