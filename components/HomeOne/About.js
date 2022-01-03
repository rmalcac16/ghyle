import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends React.Component {
    render() {
        return (
            <section id="about" className="app-about-section ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                delay={50}
                                animateOnce={true}
                            >
                                <div className="section-title">
                                    <h2>Sobre Nosotros</h2>
                                    <p>
                                        Somos una empresa dedicada a trabajos de
                                        Metalmecánica, Geosintéticos y
                                        Eléctricos; tenemos el compromiso de
                                        satisfacer las necesidades de nuestros
                                        clientes y garantizar la seguridad y
                                        salud en el trabajo para nuestros
                                        colaboradores. Asi mismo, fomentamos una
                                        cultura de prevención de riesgos
                                        laborales, identificando y eliminando
                                        incidentes y accidentes de trabajo,
                                        promoviendo el cuidado del medio
                                        ambiente.
                                    </p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
                <div className="bg-green-r py-4">
                    <div className="container">
                        <div className="row align-items-center ">
                            <div className="col-lg-7">
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    delay={100}
                                    animateOnce={true}
                                >
                                    <div className="app-about-text">
                                        <h3>Misión</h3>
                                        <p>
                                            Empresa líder y reconocida a nivel
                                            nacional por los proyectos
                                            ejecutados, nos distinguimos en el
                                            mercado por la calidad y diversidad
                                            de nuestro servicio. Garantizamos la
                                            seguridad, cumplimos estándares de
                                            calidad, SST y cuidado del medio
                                            ambiente en nuestros proyectos.
                                        </p>
                                    </div>
                                </ScrollAnimation>
                            </div>

                            <div className="col-lg-5">
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    delay={150}
                                    animateOnce={true}
                                >
                                    <div className="text-center">
                                        <img
                                            src="/images/mision.png"
                                            alt="Nuestra misión"
                                        />
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-green-l py-4">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    delay={150}
                                    animateOnce={true}
                                >
                                    <div className="text-center">
                                        <img
                                            src="/images/vision.png"
                                            alt="Nuestra visión"
                                        />
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-lg-7">
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    delay={100}
                                    animateOnce={true}
                                >
                                    <div className="app-about-text mt-4">
                                        <h3>Visión</h3>
                                        <p>
                                            Desarrollar y ejecutar proyectos de
                                            inversión privada a nivel nacional,
                                            basados en nuestra amplia
                                            experiencia, calidad y servicio,
                                            contribuyendo al desarrollo social,
                                            económico y tecnológico de nuestro
                                            país, brindando las condiciones
                                            óptimas de seguridad y salud en el
                                            trabajo orientados a nuestros
                                            clientes, proveedores y valor
                                            humano, respetando los estándares de
                                            calidad, SST y medio ambiente.
                                        </p>

                                        {/* <ul>
                                        <li>
                                            <i className="icofont-verification-check"></i>{' '}
                                            Responsive design
                                        </li>
                                        <li>
                                            <i className="icofont-verification-check"></i>{' '}
                                            Easy to customize
                                        </li>
                                        <li>
                                            <i className="icofont-verification-check"></i>{' '}
                                            Modern design
                                        </li>
                                    </ul> */}
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
