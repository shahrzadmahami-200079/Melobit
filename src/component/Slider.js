
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Slider() {

    const [sliders, setSliders] = useState([])
    const Slider = async () => {
        var Sliderimages = await fetch('https://api-beta.melobit.com/v1/song/slider/latest')
            .then(Response =>
                Response.json())
            .then(data => {
                setSliders(data.results)
            })
    }
    Slider()

    return (
        // <div>
        //     <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        //         {
        //             sliders.map((images, i) => (
        //                 <div class="carousel-inner">
        //                     <div class="carousel-item active">
        //                         <img key={i} class="d-block w-100" src={images.image.slider.url} alt="" />
        //                     </div>
        //                 </div>
        //             ))
        //         }
        //         <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        //             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //             <span class="sr-only">Previous</span>
        //         </a>
        //         <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        //             <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //             <span class="sr-only">Next</span>
        //         </a>
        //     </div>
        // </div>


        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                {
                    sliders.map((s, i) => (
                        <div class="carousel-item active">

                            <img key={i} class="d-block w-100" src={s.image.slider.url} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>


    );
}

export default Slider;
