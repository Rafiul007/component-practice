import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Swipper.css'
import b01 from '../../assets/01.jpg'
import b02 from '../../assets/02.jpg'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <FaArrowRight className="arrow-icon" style={style} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <FaArrowLeft className="arrow-icon" style={style} />
        </div>
    );
}

function Swipper() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
        pauseOnHover: false, 
        prevArrow: <SamplePrevArrow />, 
        nextArrow: <SampleNextArrow />, 
    };

    return (
        <div>
            <Slider {...settings}>
                <div >
                    <div className='swiper-slide-img'>
                        <img src={b01} alt="" />
                    </div>
                </div>
                <div>
                    <div className='swiper-slide-img'>
                        <img src={b02} alt="" />
                    </div>
                </div>
                <div>
                    <div className='swiper-slide-img'>
                        <img src={b01} alt="" />
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Swipper
