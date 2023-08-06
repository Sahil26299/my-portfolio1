import React from 'react';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { Box } from '@mui/material';

function ShowcaseCarousel(props) {
    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 6000,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     initialSlide:0,
    //     autoplaySpeed: 0,
    //   };

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: props.Speed ? props.Speed : 30000,
        slidesToShow: props.SlidesToShow ? props.SlidesToShow : 4,
        slidesToScroll: props.ImageArray.length,
        autoplay: true,
        autoplaySpeed: 0,
        pauseOnHover: true,
        initialSlide: 0,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: props.SlidesToShow ? props.SlidesToShow - 2 : 3,
                    slidesToScroll: props.ImageArray.length,
                    infinite: true,
                    speed: props.Speed ? props.Speed : 10000,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: props.SlidesToShow ? props.SlidesToShow - 3 : 2,
                    slidesToScroll: props.ImageArray.length,
                    initialSlide: 0,
                    speed: props.Speed ? props.Speed : 5000,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: props.SlidesToShow ? props.SlidesToShow - 4 : 1,
                    slidesToScroll: props.ImageArray.length,
                    speed: props.Speed ? props.Speed : 5000,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: props.ImageArray.length,
                    speed: props.Speed ? props.Speed : 5000,
                }
            }
        ]
    };
    return (
        <div className={props.CarouselWrapperStyle} >
            <Slider {...settings} >
                {props.ImageArray && props.ImageArray.map((item) => {
                    return (
                        <div>
                            <img className={props.ImageStyleName} src={item} />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default React.memo(ShowcaseCarousel)
