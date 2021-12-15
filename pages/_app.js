import '../public/css/bootstrap.min.css';
import '../public/css/animate.css';
import '../public/css/icofont.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import '../public/css/style.css';

// Default Color
import '../public/color/color-default.css';
// import '../public/color/gradient-color-one.css';
// import '../public/color/gradient-color-two.css';
// import '../public/color/gradient-color-three.css';
// import '../public/color/gradient-color-four.css';
// import '../public/color/gradient-color-five.css';
// import '../public/color/gradient-color-six.css';
// import '../public/color/gradient-color-seven.css';
// import '../public/color/gradient-color-eight.css';
// import '../public/color/gradient-color-nine.css';
// import '../public/color/gradient-color-ten.css';
// import '../public/color/gradient-color-eleven.css';
// import '../public/color/gradient-color-eight.css';

import '../public/css/responsive.css';
import '../public/css/rtl.css';

import App from 'next/app';
import Head from 'next/head';
import React from 'react';

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <React.Fragment>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <title>Servicios Generales GH&LE S.R.L.</title>
                </Head>

                <Component {...pageProps} />
            </React.Fragment>
        );
    }
}
