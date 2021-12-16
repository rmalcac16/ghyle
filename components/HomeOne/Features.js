import Image from 'next/image';
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
                                        Satisfacemos las necesidades de nuestros
                                        clientes con servicios de calidad en
                                        plazos establecidos. Promoviendo y
                                        promocionando un espacio de trabajo
                                        seguro y saludable.
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
                                    <h4>METALMECÁNICA</h4>
                                    <img
                                        style={{
                                            marginTop: 10,
                                            marginBottom: 20,
                                        }}
                                        src={
                                            '/images/slider/metalmecanica.jpeg'
                                        }
                                        width="100%"
                                        height="100%"
                                        layout="responsive"
                                        objectFit="contain"
                                    />
                                    {/* <p>
                                        There are many variations of passages of
                                        Lorem Ipsum available,but the
                                        majorityhave suffered alteration.
                                    </p> */}

                                    <button className="btn btn-outline-success">
                                        <strong className="text-weight text-sm text-uppercase">
                                            Más información
                                        </strong>
                                    </button>
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
                                    <h4>GEOSINTÉTICOS</h4>
                                    <img
                                        style={{
                                            marginTop: 10,
                                            marginBottom: 20,
                                        }}
                                        src={
                                            '/images/slider/geosinteticos.jpeg'
                                        }
                                        width="100%"
                                        height="100%"
                                        layout="responsive"
                                        objectFit="contain"
                                    />
                                    {/* <p>
                                        There are many variations of passages of
                                        Lorem Ipsum available,but the
                                        majorityhave suffered alteration.
                                    </p> */}
                                    <button className="btn btn-outline-success">
                                        <strong className="text-weight text-sm text-uppercase">
                                            Más información
                                        </strong>
                                    </button>
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
                                    <h4>ELÉCTRICOS</h4>
                                    <img
                                        style={{
                                            marginTop: 10,
                                            marginBottom: 20,
                                        }}
                                        src={'/images/slider/electricos.jpeg'}
                                        width="100%"
                                        height="100%"
                                        layout="responsive"
                                        objectFit="contain"
                                    />
                                    {/* <p>
                                        There are many variations of passages of
                                        Lorem Ipsum available,but the
                                        majorityhave suffered alteration.
                                    </p> */}
                                    <button className="btn btn-outline-success">
                                        <strong className="text-weight text-sm text-uppercase">
                                            Más información
                                        </strong>
                                    </button>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
