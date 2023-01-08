import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function ShowcaseCarousel(props) {
    return (
        <OwlCarousel items={4}
            className="owl-theme"
            loop
            autoplay
            dots={false}
            smartSpeed={3000}
            autoplaySpeed={3000}
            autoplayTimeout={3000}
            autoplayHoverPause={true}
            style={{justifyContent:'center', marginTop:'3%'}}
             >
            <div><img className="carouselImage" src={props.ImagePath1} /></div>
            <div><img className="carouselImage" src={props.ImagePath2} /></div>
            <div><img className="carouselImage" src={props.ImagePath3} /></div>
            <div><img className="carouselImage" src={props.ImagePath4} /></div>
            <div><img className="carouselImage" src={props.ImagePath5} /></div>
            <div><img className="carouselImage" src={props.ImagePath6} /></div>
            <div><img className="carouselImage" src={props.ImagePath7} /></div>
            <div><img className="carouselImage" src={props.ImagePath8} /></div>
            <div>
                <video loop autoPlay muted className="carouselVideo" >
                    <source src={props.ImagePath17} type="video/mp4" />
                </video>
            </div>
            <div><img className="carouselImage" src={props.ImagePath9} /></div>
            {/* <div>
                <video loop autoPlay muted className="carouselVideo" >
                    <source src={props.ImagePath18} type="video/mp4" />
                </video>
            </div> */}
            <div><img className="carouselImage" src={props.ImagePath10} /></div>
            <div><img className="carouselImage" src={props.ImagePath11} /></div>
            <div><img className="carouselImage" src={props.ImagePath12} /></div>
            <div><img className="carouselImage" src={props.ImagePath13} /></div>
            <div><img className="carouselImage" src={props.ImagePath14} /></div>
            <div>
                <video loop autoPlay muted className="carouselVideo" >
                    <source src={props.ImagePath16} type="video/mp4" />
                </video>
            </div>
            <div><img className="carouselImage" src={props.ImagePath15} /></div>
        </OwlCarousel>
        // <Carousel>
        //     <Carousel.Item interval={3000}>
        //         <img
        //             className="carouselImage"
        //             src={props.ImagePath1}
        //             alt="First slide"
        //         />
        //     </Carousel.Item>
        //     <Carousel.Item interval={3000}>
        //         <img
        //             className="carouselImage"
        //             src={props.ImagePath2}
        //             alt="Second slide"
        //         />
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="carouselImage"
        //             src={props.ImagePath3}
        //             alt="Third slide"
        //         />
        //     </Carousel.Item>
        // </Carousel>
    )
}
