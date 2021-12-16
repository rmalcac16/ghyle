import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import VisibilitySensor from 'react-visibility-sensor';

const options = {
    items: 1,
    nav: true,
    dots: false,
    touchDrag: false,
    mouseDrag: false,
    autoplay: false,
    autoplayHoverPause: true,
    loop: true,
    navText: [
        "<i class='icofont-long-arrow-left'></i>",
        "<i class='icofont-long-arrow-right'></i>",
    ],
};

class Slider extends React.Component {
    render() {
        return (
            <div id="home" className="hompage-slides-wrapper">
                <OwlCarousel
                    className="homepage-slides owl-carousel owl-theme"
                    {...options}
                >
                    {this.props.slideData.map((data, idx) => (
                        <div
                            className="single-slider-item gradient-bg"
                            key={idx}
                        >
                            <div className="slide-item-table">
                                <div className="slide-item-tablecell">
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col-md-12 col-lg-4">
                                                <div className="slider-text">
                                                    <h1>{data.heading}</h1>
                                                    <p>{data.text}</p>
                                                </div>
                                            </div>
                                            <VisibilitySensor>
                                                {({ isVisible }) => (
                                                    <div className="col-md-12 col-lg-8">
                                                        <div className="welcome-phone image-slider">
                                                            <img
                                                                src={data.image}
                                                                alt={
                                                                    data.heading
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </VisibilitySensor>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        );
    }
}

Slider.defaultProps = {
    slideData: [
        {
            heading: 'Gestión de calidad',
            text: '',
            image: '/images/slider/geosinteticos.jpeg',
        },
        {
            heading: 'Seguridad y Salud',
            text: '',
            image: '/images/slider/electricos.jpeg',
        },
    ],
};

export default Slider;
