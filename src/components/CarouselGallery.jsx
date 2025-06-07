import React from 'react'










import { Carousel } from 'react-responsive-carousel'
import yo1 from '../assets/1.jpg'
import yo2 from '../assets/2.jpg'
import yo3 from '../assets/3.jpg'








function CarouselGallery() {
    return (
        <div>

            <Carousel>

                <img src={yo1} alt='1'/>
                <img src={yo2} alt='1'/>
                <img src={yo3} alt='1'/>

            </Carousel>


        </div>
    )
}

export default CarouselGallery