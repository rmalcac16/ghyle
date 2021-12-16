import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        const { locale } = this.props.__NEXT_DATA__;
        const dir = locale === 'pe' ? 'es' : 'es';
        return (
            <Html lang="es" dir={dir} lang={locale}>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Open+Sans:400,600"
                        rel="stylesheet"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="/images/favicon.ico"
                    ></link>
                    <script
                        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
                        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
                        crossorigin="anonymous"
                    ></script>

                    <link
                        rel="stylesheet"
                        href="https://rawcdn.githack.com/jerfeson/floating-whatsapp/0310b4cd88e9e55dc637d1466670da26b645ae49/floating-wpp.min.css"
                    ></link>
                    <script
                        type="text/javascript"
                        src="https://rawcdn.githack.com/jerfeson/floating-whatsapp/0310b4cd88e9e55dc637d1466670da26b645ae49/floating-wpp.min.js"
                    ></script>
                    <script type="text/javascript" src="/js/wpChat.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <div id="WABoton"></div>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
