import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { Box } from '@mui/material';

export default function ShowcaseCarousel(props) {
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
        arrows:false,
        infinite: true,
        speed: props.Speed ? props.Speed : 30000,
        slidesToShow: props.SlidesToShow ? props.SlidesToShow :  4,
        slidesToScroll: props.ImageArray.length,
        autoplay: true,
        autoplaySpeed: 0,
        pauseOnHover: false,
        initialSlide: 0,
        cssEase: "linear",
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    speed: 10000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0,
                    speed: 5000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 5000,
                }
            }
        ]
    };
    return (
        // <OwlCarousel items={props.items}
        //     className="owl-theme"
        //     loop
        //     autoplay
        //     dots={false}
        //     smartSpeed={3000}
        //     autoplaySpeed={3000}
        //     autoplayTimeout={3000}
        //     autoplayHoverPause={true}
        //     style={{ justifyContent: 'center', marginTop: '3%' }}
        // >
        //     <div><img className="carouselImage" src={props.ImagePath1} /></div>
        //     {props.ImagePath2 && <div><img className="carouselImage" src={props.ImagePath2} /></div>}
        //     {props.ImagePath3 && <div><img className="carouselImage" src={props.ImagePath3} /></div>}
        //     {props.ImagePath4 && <div><img className="carouselImage" src={props.ImagePath4} /></div>}
        //     {props.ImagePath5 && <div><img className="carouselImage" src={props.ImagePath5} /></div>}
        //     {props.ImagePath6 && <div><img className="carouselImage" src={props.ImagePath6} /></div>}
        //     {props.ImagePath7 && <div><img className="carouselImage" src={props.ImagePath7} /></div>}
        //     {props.ImagePath8 && <div><img className="carouselImage" src={props.ImagePath8} /></div>}
        //     {props.ImagePath17 && <div>
        //         <video loop autoPlay muted className="carouselVideo" >
        //             <source src={props.ImagePath17} type="video/mp4" />
        //         </video>
        //     </div>}
        //     {props.ImagePath9 && <div><img className="carouselImage" src={props.ImagePath9} /></div>}
        //     {/* <div>
        //         <video loop autoPlay muted className="carouselVideo" >
        //             <source src={props.ImagePath18} type="video/mp4" />
        //         </video>
        //     </div> */}
        //     {props.ImagePath10 && <div><img className="carouselImage" src={props.ImagePath10} /></div>}
        //     {props.ImagePath11 && <div><img className="carouselImage" src={props.ImagePath11} /></div>}
        //     {props.ImagePath12 && <div><img className="carouselImage" src={props.ImagePath12} /></div>}
        //     {props.ImagePath13 && <div><img className="carouselImage" src={props.ImagePath13} /></div>}
        //     {props.ImagePath14 && <div><img className="carouselImage" src={props.ImagePath14} /></div>}
        //     {props.ImagePath16 &&
        //         <div>
        //             <video loop autoPlay muted className="carouselVideo" >
        //                 <source src={props.ImagePath16} type="video/mp4" />
        //             </video>
        //         </div>}
        //     {props.ImagePath15 && <div><img className="carouselImage" src={props.ImagePath15} /></div>}
        // </OwlCarousel>
        <div className={props.CarouselWrapperStyle} >
            <Slider {...settings} >
                {props.ImageArray && props.ImageArray.map((item) => {
                    return (
                        <div>
                            {item.includes('.mp4') ?
                                <video loop autoPlay muted className={props.VideoStyleName} >
                                    <source src={item} type="video/mp4" />
                                </video> :
                                <img className={props.ImageStyleName} src={item} />}
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
