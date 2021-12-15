import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Team extends React.Component {
    render() {
        return (
            <section id="team" className="team-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                delay={50}
                                animateOnce={true}
                            >
                                <div className="section-title">
                                    <h2>Colaboradores</h2>
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
                        <div className="col-md-4 col-lg-4">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                delay={100}
                                animateOnce={true}
                            >
                                <div className="single-member">
                                    <div className="member-img">
                                        <img
                                            src="/images/team/1.jpg"
                                            alt="Team Member Image"
                                        />
                                        <div className="overlay">
                                            <div className="member-info">
                                                <p>
                                                    Lorem ipsum madolor sit
                                                    amet, consectetur
                                                    adipisicing elit, sed do
                                                    eiusmod tempor.
                                                </p>
                                                <div className="social-links">
                                                    <a
                                                        href="https://www.facebook.com/"
                                                        target="_blank"
                                                    >
                                                        <i className="icofont-facebook"></i>
                                                    </a>

                                                    <a
                                                        href="https://twitter.com/"
                                                        target="_blank"
                                                    >
                                                        <i className="icofont-twitter"></i>
                                                    </a>

                                                    <a
                                                        href="https://www.linkedin.com/"
                                                        target="_blank"
                                                    >
                                                        <i className="icofont-linkedin"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="member-name">Persona 1</h4>
                                    <p className="designation">Cargo 1</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-md-4 col-lg-4">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                delay={150}
                                animateOnce={true}
                            >
                                <div className="single-member">
                                    <div className="member-img">
                                        <img
                                            src="/images/team/2.jpg"
                                            alt="Team Member Image"
                                        />
                                        <div className="overlay">
                                            <div className="member-info">
                                                <p>
                                                    Lorem ipsum madolor sit
                                                    amet, consectetur
                                                    adipisicing elit, sed do
                                                    eiusmod tempor.
                                                </p>
                                                <div className="social-links">
                                                    <a
                                                        href="https://www.facebook.com/"
                                                        target="_blank"
                                                    >
                                                        <i className="icofont-facebook"></i>
                                                    </a>

                                                    <a
                                                        href="https://twitter.com/"
                                                        target="_blank"
                                                    >
                                                        <i className="icofont-twitter"></i>
                                                    </a>

                                                    <a
                                                        href="https://www.linkedin.com/"
                                                        target="_blank"
                                                    >
                                                        <i className="icofont-linkedin"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="member-name">Persona 2</h4>
                                    <p className="designation">Cargo 2</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-md-4 col-lg-4">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                delay={200}
                                animateOnce={true}
                            >
                                <div className="single-member">
                                    <div className="member-img">
                                        <img
                                            src="/images/team/3.jpg"
                                            alt="Team Member Image"
                                        />
                                        <div className="overlay">
                                            <div className="member-info">
                                                <p>
                                                    Lorem ipsum madolor sit
                                                    amet, consectetur
                                                    adipisicing elit, sed do
                                                    eiusmod tempor.
                                                </p>
                                                <div className="social-links">
                                                    <a
                                                        href="https://www.facebook.com/"
                                                        target="_blank"
                                                    >
                                                        <i className="icofont-facebook"></i>
                                                    </a>

                                                    <a
                                                        href="https://twitter.com/"
                                                        target="_blank"
                                                    >
                                                        <i className="icofont-twitter"></i>
                                                    </a>

                                                    <a
                                                        href="https://www.linkedin.com/"
                                                        target="_blank"
                                                    >
                                                        <i className="icofont-linkedin"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="member-name">Persona 3</h4>
                                    <p className="designation">Cargo 3</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
