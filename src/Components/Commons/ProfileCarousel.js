import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function ProfileCarousel(props) {
    return (
        <Carousel controls={false} pause={'hover'} indicators={false} >
            <Carousel.Item interval={3000}>
                <img
                    className="ProfilePicStyle1"
                    src={props.ImagePath1}
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="ProfilePicStyle2"
                    src={props.ImagePath2}
                />
            </Carousel.Item>
        </Carousel>
    )
}
