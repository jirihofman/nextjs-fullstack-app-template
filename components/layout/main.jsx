import PropTypes from 'prop-types';
import Head from 'next/head';
import pjson from '../../package.json';
import Footer from './footer';
import Header from './header';

export default function Main({ children, title }) {
    return (
        <div className='container-xxl'>
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
