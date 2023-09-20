import PropTypes from 'prop-types';
import Head from 'next/head';
import Script from 'next/script';
import pjson from '../../package.json';
import Footer from './footer';
import Header from './header';

export default function Main({ children, title }) {
    return (
        <div className='container-xxl'>
            <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js' integrity='sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf' crossOrigin='anonymous' defer />
            <Head>
                <title>{[title, pjson.displayName].join(' - ')}</title>
                <link rel="icon" href="/favicon-32x32.png" />
            </Head>

            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

Main.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    title: PropTypes.string
};
