import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <p className="copyright">
                                    Copyright @2021 Jibo. all rights by{' '}
                                    <a
                                        href="http://envytheme.com/"
                                        target="_blank"
                                    >
                                        EnvyTheme
                                    </a>
                                </p>
                            </div>

                            <div className="col-md-6 col-lg-6">
                                <ul className="social-links">
                                    <li>Follow us :</li>
                                    <li>
                                        <a
                                            href="https://facebook.com/"
                                            target="_blank"
                                        >
                                            <i className="icofont-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://twitter.com/"
                                            target="_blank"
                                        >
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.instagram.com/"
                                            target="_blank"
                                        >
                                            <i className="icofont-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.pinterest.com/"
                                            target="_blank"
                                        >
                                            <i className="icofont-pinterest"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
