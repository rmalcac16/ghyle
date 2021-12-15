import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false,
});

class HowItWorks extends React.Component {
    state = {
        isOpen: false,
    };

    openModal = () => {
        this.setState({ isOpen: true });
    };

    render() {
        return (
            <>
                <section id="how-it-works" className="how-it-works gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    delay={30}
                                    animateOnce={true}
                                >
                                    <div className="section-title">
                                        <h2>Valores</h2>
                                        <p>
                                            POLÍTICA DEL SISTEMA INTEGRADO DE
                                            GESTIÓN SGC-SGSST-SGA
                                            <br />
                                            VERSIÓN: 01 - Noviembre 2021
                                        </p>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="hiw-feature-content">
                                    <ScrollAnimation
                                        animateIn="fadeInUp"
                                        delay={50}
                                        animateOnce={true}
                                    >
                                        <div className="single-hiw-feature">
                                            <i className="icofont icofont-architecture-alt"></i>
                                            <h4>Compromiso</h4>
                                            <p>
                                                Trabajamos al 100% para brindar
                                                un servicio de excelencia,
                                                cumpliendo de manera eficiente y
                                                proactiva cada uno de nuestros
                                                proyectos, en los tiempos
                                                estipulados.
                                            </p>
                                        </div>
                                    </ScrollAnimation>

                                    <ScrollAnimation
                                        animateIn="fadeInUp"
                                        delay={100}
                                        animateOnce={true}
                                    >
                                        <div className="single-hiw-feature">
                                            <i className="icofont icofont-certificate"></i>
                                            <h4>Excelencia</h4>
                                            <p>
                                                Tenemos pasión por las cosas
                                                bien hechas, con disciplina,
                                                innovación, creatividad,
                                                talento, eficacia y eficiencia
                                                en el desarrollo de nuestras
                                                actividades.
                                            </p>
                                        </div>
                                    </ScrollAnimation>

                                    <ScrollAnimation
                                        animateIn="fadeInUp"
                                        delay={150}
                                        animateOnce={true}
                                    >
                                        <div className="single-hiw-feature">
                                            <i className="icofont icofont-handshake-deal"></i>
                                            <h4>Lealtad</h4>
                                            <p>
                                                Trabajamos con honestidad,
                                                honradez y fidelidad a través
                                                del cumplimiento a cabalidad de
                                                todos nuestros proyectos,
                                                satisfaciendo a nuestros
                                                clientes.
                                            </p>
                                        </div>
                                    </ScrollAnimation>

                                    <ScrollAnimation
                                        animateIn="fadeInUp"
                                        delay={200}
                                        animateOnce={true}
                                    >
                                        <div className="single-hiw-feature">
                                            <i className="icofont icofont-group"></i>
                                            <h4>Respeto</h4>
                                            <p>
                                                Trabajamos priorizando el
                                                respeto mutuo entre nuestros
                                                colaboradores, Reflejado en
                                                nuestros clientes para brindar
                                                un servicio agradable.
                                            </p>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>

                            <div className="col-lg-5 offset-lg-1 mt-2">
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    delay={200}
                                    animateOnce={true}
                                >
                                    <div className="single-hiw-feature">
                                        <i class="icofont-workers-group"></i>
                                        <h4>Trabajo en Equipo</h4>
                                        <p>
                                            Trabajamos conjuntamente fijando
                                            metas elevadas y nos esforzamos para
                                            conseguirlas. El trabajo en equipo
                                            multiplica nuestra productividad,
                                            crea valor al efectuar tareas que se
                                            complementan entre sí y contribuye
                                            al desarrollo de la empresa.
                                        </p>
                                    </div>
                                </ScrollAnimation>

                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    delay={200}
                                    animateOnce={true}
                                >
                                    <div className="single-hiw-feature">
                                        <i class="icofont-help-robot"></i>
                                        <h4>Innovación</h4>
                                        <p>
                                            Trabajamos contantemente en mejorar,
                                            crear y revolucionar el mercado con
                                            nuevos procedimientos, utilizando
                                            tecnología, automatizando
                                            procedimientos, mejorando la
                                            calidad, definiendo nuevas formas de
                                            satisfacer al cliente. Buscando
                                            Crecer y ser más competitivos en
                                            nuestros procedimientos.
                                        </p>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </section>

                <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="szuchBiLrEM"
                    onClose={() => this.setState({ isOpen: false })}
                />
            </>
        );
    }
}

export default HowItWorks;
