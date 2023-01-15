import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Propane } from '@mui/icons-material';
export default function ShowcaseCarousel(props) {
    return (
        <OwlCarousel items={props.items}
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
            {props.ImagePath2 && <div><img className="carouselImage" src={props.ImagePath2} /></div>}
            {props.ImagePath3  && <div><img className="carouselImage" src={props.ImagePath3} /></div>}
            {props.ImagePath4 && <div><img className="carouselImage" src={props.ImagePath4} /></div>}
            {props.ImagePath5 && <div><img className="carouselImage" src={props.ImagePath5} /></div>}
            {props.ImagePath6 && <div><img className="carouselImage" src={props.ImagePath6} /></div>}
            {props.ImagePath7 && <div><img className="carouselImage" src={props.ImagePath7} /></div>}
            {props.ImagePath8 && <div><img className="carouselImage" src={props.ImagePath8} /></div>}
            {props.ImagePath17 && <div>
                <video loop autoPlay muted className="carouselVideo" >
                    <source src={props.ImagePath17} type="video/mp4" />
                </video>
            </div>}
            { props.ImagePath9 && <div><img className="carouselImage" src={props.ImagePath9} /></div>}
            {/* <div>
                <video loop autoPlay muted className="carouselVideo" >
                    <source src={props.ImagePath18} type="video/mp4" />
                </video>
            </div> */}
            { props.ImagePath10 && <div><img className="carouselImage" src={props.ImagePath10} /></div>}
            { props.ImagePath11 && <div><img className="carouselImage" src={props.ImagePath11} /></div>}
            { props.ImagePath12 && <div><img className="carouselImage" src={props.ImagePath12} /></div>}
            { props.ImagePath13 && <div><img className="carouselImage" src={props.ImagePath13} /></div>}
            { props.ImagePath14 && <div><img className="carouselImage" src={props.ImagePath14} /></div>}
            { props.ImagePath16 &&
             <div>
                <video loop autoPlay muted className="carouselVideo" >
                    <source src={props.ImagePath16} type="video/mp4" />
                </video>
            </div>}
            {props.ImagePath15 && <div><img className="carouselImage" src={props.ImagePath15} /></div>}
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
