import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Features extends React.Component {
    render() {
        return (
            <section id="features" className="awsome-features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                delay={50}
                                animateOnce={true}
                            >
                                <div className="section-title">
                                    <h2>Nuestros Servicios</h2>
                                    <p>
                                        Lorem ipsum madolor sit amet,
                                        consectetur adipisicing elit, sed do
                                        eiusmod tempor coli incididunt ut labore
                                        Lorem ipsum madolor sit amet,
                                        consectetur adipisicing incididunt.
                                    </p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                delay={100}
                                animateOnce={true}
                            >
                                <div className="single-feature">
                                    <div className="feature-icon">
                                        <i className="icofont-sun"></i>
                                    </div>
                                    <h4>METALMECANICA</h4>
                                    <p>
                                        There are many variations of passages of
                                        Lorem Ipsum available,but the
                                        majorityhave suffered alteration.
                                    </p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                delay={150}
                                animateOnce={true}
                            >
                                <div className="single-feature">
                                    <div className="feature-icon">
                                        <i className="icofont-light-bulb"></i>
                                    </div>
                                    <h4>GEOSINTETICOS</h4>
                                    <p>
                                        There are many variations of passages of
                                        Lorem Ipsum available,but the
                                        majorityhave suffered alteration.
                                    </p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                delay={200}
                                animateOnce={true}
                            >
                                <div className="single-feature">
                                    <div className="feature-icon">
                                        <i className="icofont-imac"></i>
                                    </div>
                                    <h4>ELÉCTRICOS</h4>
                                    <p>
                                        There are many variations of passages of
                                        Lorem Ipsum available,but the
                                        majorityhave suffered alteration.
                                    </p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
