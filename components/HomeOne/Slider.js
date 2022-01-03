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
                                                <div className="slider-text" >
                                                    <h1>{data.heading}</h1>
                                                    <p>{data.text}</p>
                                                </div>
                                            </div>
                                            <VisibilitySensor>
                                                {({ isVisible }) => (
                                                    <div className="col-md-6 col-lg-8">
                                                        <div className="welcome-phone image-slider">
                                                            <img 
                                                                src={data.image}
                                                                alt={
                                                                    data.heaing
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
            heading: 'Talento Humano',
            text: 'Reconocemos el trabajo de nuestros profesionales y agradecemos su compromiso.',
            image: '/images/slider/talentos.jpeg',
        },
        {
            heading: 'Gestión de calidad',

            text: 'Contamos con un conjunto de acciones y procedimientos para garantizar nuestros servicios.',

            text: 'Capacitamos, entrenamos y comprometemos a nuestros colaboradores a desarrollar una cultura de calidad, medio ambiente y sst.',

            image: '/images/slider/geosinteticos.jpeg',
        },
        {
            heading: 'Seguridad y Salud',

            text: 'Somos una organización comprometida con el bienestar físico, emocional y social de sus colaboradores. ',

            text: 'Capacitamos, entrenamos y comprometemos a nuestros colaboradores a desarrollar una cultura de calidad, medio ambiente y sst.',
            image: '/images/slider/electricos.jpeg',
        },
        {
            heading: 'Seguridad y Salud 2',
            text: 'Capacitamos, entrenamos y comprometemos a nuestros colaboradores a desarrollar una cultura de calidad, medio ambiente y sst.',

            image: '/images/slider/electricos.jpeg',
        },
        
    ],
};

export default Slider;
