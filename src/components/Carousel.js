import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselImage = ({ images }) => {
    return (
        <Carousel
            autoPlay
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
        >
            {images.map((image, index) => {
                return (
                    <div>
                        <img src={image} alt={index} />
                    </div>
                )
            })}
        </Carousel>
    );
}

export default CarouselImage;
