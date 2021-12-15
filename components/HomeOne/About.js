import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends React.Component {
    render() {
        return (
            <section id="about" className="app-about-section">
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
                                        Eléctricos; ha asumido el compromiso de
                                        satisfacer las necesidades de nuestros
                                        clientes en todos los niveles de la
                                        empresa, del mismo modo, contribuyendo y
                                        garantizando la Seguridad y Salud en el
                                        trabajo para nuestros colaboradores en
                                        el desarrollo de cada una de nuestras
                                        actividades, fomentando una cultura de
                                        prevención de riesgos laborales,
                                        identificando y eliminar los incidentes
                                        y accidentes de trabajo, promoviendo el
                                        cuidado del medio ambiente.
                                    </p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                delay={100}
                                animateOnce={true}
                            >
                                <div className="app-about-text">
                                    <h3>Misión</h3>
                                    <p>
                                        Ser una empresa líder y reconocida a
                                        nivel nacional por los proyectos
                                        ejecutados, superando las expectativas
                                        de nuestros clientes, garantizando la
                                        seguridad y distinguiéndose en el
                                        mercado por la calidad y diversidad de
                                        nuestro servicio, cumpliendo estándares
                                        de Calidad, SST y cuidado del medio
                                        ambiente en cada uno de nuestros
                                        proyectos.
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
                    <div className="row align-items-center mt-4">
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
                                <div className="app-about-text">
                                    <h3>Visión</h3>
                                    <p>
                                        Desarrollar y ejecutar proyectos de
                                        inversión privada a nivel nacional,
                                        basadas en nuestra amplia experiencia,
                                        calidad y servicio, garantizando la
                                        satisfacción de nuestros clientes,
                                        contribuyendo de esta manera al
                                        desarrollo social, económico y
                                        tecnológico de nuestro país, brindando
                                        las condiciones óptimas de seguridad y
                                        salud en el trabajo orientados a
                                        nuestros clientes, proveedores y valor
                                        humano, respetando los estándares de
                                        Calidad, SST y medio ambiente.
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
            </section>
        );
    }
}

export default About;
