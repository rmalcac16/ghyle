import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Link from 'next/link';

export default class Navigation extends Component {
    _isMounted = false;

    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    componentDidMount() {
        this._isMounted = true;
        let elementId = document.getElementById('navbar');

        let mainNavLinks = document.querySelectorAll('nav ul li a');
        window.addEventListener('scroll', () => {
            let fromTop = window.scrollY;
            mainNavLinks.forEach((link) => {
                let section = document.querySelector(link.hash);
                if (section) {
                    if (
                        section.offsetTop <= fromTop &&
                        section.offsetTop + section.offsetHeight > fromTop
                    ) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                }
            });
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    renderMenus = () => {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <AnchorLink
                        onClick={this.toggleNavbar}
                        offset={() => 100}
                        className="nav-link active"
                        href="#home"
                    >
                        Inicio
                    </AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink
                        onClick={this.toggleNavbar}
                        offset={() => -10}
                        className="nav-link"
                        href="#about"
                    >
                        Nosotros
                    </AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink
                        onClick={this.toggleNavbar}
                        offset={() => -10}
                        className="nav-link"
                        href="#features"
                    >
                        Servicios
                    </AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink
                        onClick={this.toggleNavbar}
                        offset={() => -10}
                        className="nav-link"
                        href="#screenshots"
                    >
                        Galería
                    </AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink
                        onClick={this.toggleNavbar}
                        offset={() => -10}
                        className="nav-link"
                        href="#contact"
                    >
                        Contáctanos
                    </AnchorLink>
                </li>
            </ul>
        );
    };

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed
            ? 'collapse navbar-collapse'
            : 'collapse navbar-collapse show';
        const classTwo = collapsed
            ? 'navbar-toggler navbar-toggler-right collapsed'
            : 'navbar-toggler navbar-toggler-right';

        return (
            <div>
                <nav
                    id="navbar"
                    className="navbar fixed-top navbar-expand-md navbar-light top-menu menu-shrink"
                >
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            W G & L E
                        </a>

                        <button
                            onClick={this.toggleNavbar}
                            className={classTwo}
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            {this.renderMenus()}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
