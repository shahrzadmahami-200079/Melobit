
import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function DetailsPage() {

    const id = useParams();
    const [details, setDetails] = useState([])
    const songref = useRef(null);

    useEffect(() => {
    }, [])
    const Details = async () => {
        var DetailsSong = await fetch('https://api-beta.melobit.com/v1/song/' + id.id)
            .then(Response =>
                Response.json())
            .then(data => {
                setDetails(data)
            })
    }
    Details()

    return (

        <div className='container '>
            <p className='text-light'>Song Details</p>
            <div className='row'>
                <div class="card mb-3 w-100">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            {details.image && <img className='card-img' src={details.image.cover.url} />}
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                {details.audio &&
                                    <audio controls src={details.audio.high.url} ref={songref} ></audio>
                                }
                                {details.album && <h5 className='card-title'>{details.album.name}</h5>}
                                {details.artists && <p className='card-title'>{details.artists[0].fullName}</p>}

                                {details.lyrics && <p className='card-text'>{details.lyrics}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default DetailsPage;
