import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

export default class Faq extends React.Component {
    render() {
        return (
            <section id="faqs" className="faqs-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                delay={50}
                                animateOnce={true}
                            >
                                <div className="section-title">
                                    <h2>
                                        POLÍTICA DEL SISTEMA INTEGRADO DE
                                        GESTIÓN SGC-SGSST-SGA
                                    </h2>
                                    <p>Estamos comprometidos a:</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                delay={100}
                                animateOnce={true}
                            >
                                <div className="text-center">
                                    <img
                                        src="/images/faq-img.png"
                                        alt="Faq Image"
                                    />
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-7">
                            <div className="faq-content">
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    delay={150}
                                    animateOnce={true}
                                >
                                    <Accordion
                                        allowZeroExpanded
                                        preExpanded={['a']}
                                    >
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>1.</span> Satisfacer a
                                                    cabalidad las necesidades de
                                                    nuestros clientes
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Entregamos un servicio de
                                                    calidad en plazos
                                                    establecidos.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>2.</span> Capacitar,
                                                    entrenar y comprometer a
                                                    nuestros colaboradores.
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Desarrollamos una cultura de
                                                    calidad, medio ambiente y
                                                    SST, enfocados en la mejora
                                                    continua.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>3.</span> Garantizar
                                                    la participación y consulta
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Fomentamos el trabajo en
                                                    equipo para cumplir los
                                                    objetivos y compromisos de
                                                    la empresa.{' '}
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>4.</span> Promover y
                                                    proporcionar actividades y
                                                    acciones en un lugar de
                                                    trabajo seguro.
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Trabajo seguro y saludable
                                                    enmarcado en la prevensión
                                                    de lesiones y enfermedades
                                                    ocupacionales, elimando
                                                    peligros y reduciendo
                                                    reisgos.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>5.</span> Demostrar un
                                                    comportamiento seguro,
                                                    sostenible y responsable con
                                                    el medio ambiente
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Nuestras actividades
                                                    protegen y conservan los
                                                    recursos, además prevenimos
                                                    la contaminacioón del medio
                                                    ambiente.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="f">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>6.</span> Cumplir los
                                                    requisitos legales
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    la empresa se adiere al SST,
                                                    medio ambiente y otras
                                                    prescripciones que suscriba
                                                    la empresa.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
