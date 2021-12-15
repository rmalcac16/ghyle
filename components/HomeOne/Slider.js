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
                                                        <div className="welcome-phone">
                                                            <img
                                                                src="/images/app-mockup-1.png"
                                                                alt="App Mockup image"
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
            heading: 'Manage all of your Stuff Using a Jibo',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            heading: 'Awesome Jibo Mobile App',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ],
};

export default Slider;
