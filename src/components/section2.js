import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../images/burekas.png';


const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 80px;

    > div {
        max-width: 50%;
    }

    ul.slick-dots {
        bottom: -40px;
    }
    
    .slick-dots li button:before{
        color: #c6c5c4;
    }

    .slick-dots li.slick-active button:before {
        color: #fff;
    }
`;


const Img = styled.img`
    margin: 0 auto;
    width: 330px;
    @media(max-width: 768px) {
        width: 190px;
    }
`;


class section extends Component {
    render() {

        var settings = {
            rtl: true,
            autoplay: true,
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <Section>
                <Slider {...settings}>
                    <div>
                        {/* <h3>1</h3> */}
                        <Img src={img1} />
                    </div>
                    <div>
                        {/* <h3>2</h3> */}
                        <Img src={img1} />
                    </div>
                    <div>
                        {/* <h3>3</h3> */}
                        <Img src={img1} />
                    </div>
                    <div>
                        {/* <h3>4</h3> */}
                        <Img src={img1} />
                    </div>
                    <div>
                        {/* <h3>5</h3> */}
                        <Img src={img1} />
                    </div>
                    <div>
                        {/* <h3>6</h3> */}
                        <Img src={img1} />
                    </div>
                </Slider>
            </Section>
        );
    }
}

export default section;


