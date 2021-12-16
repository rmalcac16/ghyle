import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import OwlCarousel from 'react-owl-carousel3';
import Modal from '../Modal/Modal';

const options = {
    nav: true,
    margin: 30,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 500,
    loop: false,
    navText: [
        "<i class='icofont-swoosh-left'></i>",
        "<i class='icofont-swoosh-right'></i>",
    ],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1200: {
            items: 4,
        },
    },
};

export default class Screenshots extends React.Component {
    state = {
        modalOpen: false,
        modalImage: '',
    };

    openModal = () => {
        this.setState({ modalOpen: true });
    };

    closeModal = () => {
        this.setState({ modalOpen: false });
    };

    handleImage = (image) => {
        this.setState({ modalImage: image });
    };

    render() {
        const { modalOpen } = this.state;
        return (
            <section id="screenshots" className="app-screenshots-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                delay={50}
                                animateOnce={true}
                            >
                                <div className="section-title">
                                    <h2>Galería</h2>
                                    <p>
                                        Capacitamos, entrenamos y comprometemos
                                        a nuestros colaboradores a desarrollar
                                        una cultura de calidad, medio ambiente y
                                        sst.
                                    </p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <ScrollAnimation
                        animateIn="fadeInUp"
                        delay={100}
                        animateOnce={true}
                    >
                        <div className="row">
                            <div className="col-lg-12">
                                <OwlCarousel
                                    className="screenshot-carousel owl-carousel owl-theme"
                                    {...options}
                                >
                                    <div className="screenshot-item">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.openModal();
                                                this.handleImage(
                                                    '/images/screenshot/1.jpeg'
                                                );
                                            }}
                                            href="#"
                                            className="screenshot-image"
                                        >
                                            <img
                                                src="/images/screenshot/1.jpeg"
                                                alt="Screenshot Image"
                                            />
                                        </a>
                                    </div>

                                    <div className="screenshot-item">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.openModal();
                                                this.handleImage(
                                                    '/images/screenshot/2.jpeg'
                                                );
                                            }}
                                            href="#"
                                            className="screenshot-image"
                                        >
                                            <img
                                                src="/images/screenshot/2.jpeg"
                                                alt="Screenshot Image"
                                            />
                                        </a>
                                    </div>

                                    <div className="screenshot-item">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.openModal();
                                                this.handleImage(
                                                    '/images/screenshot/3.jpeg'
                                                );
                                            }}
                                            href="#"
                                            className="screenshot-image"
                                        >
                                            <img
                                                src="/images/screenshot/3.jpeg"
                                                alt="Screenshot Image"
                                            />
                                        </a>
                                    </div>

                                    <div className="screenshot-item">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.openModal();
                                                this.handleImage(
                                                    '/images/screenshot/4.jpeg'
                                                );
                                            }}
                                            href="#"
                                            className="screenshot-image"
                                        >
                                            <img
                                                src="/images/screenshot/4.jpeg"
                                                alt="Screenshot Image"
                                            />
                                        </a>
                                    </div>

                                    <div className="screenshot-item">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.openModal();
                                                this.handleImage(
                                                    '/images/screenshot/5.jpeg'
                                                );
                                            }}
                                            href="#"
                                            className="screenshot-image"
                                        >
                                            <img
                                                src="/images/screenshot/5.jpeg"
                                                alt="Screenshot Image"
                                            />
                                        </a>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>

                {/* {modalOpen ? (
                    <Modal
                        closeModal={this.closeModal}
                        image={this.state.modalImage}
                    />
                ) : (
                    ''
                )} */}
            </section>
        );
    }
}
