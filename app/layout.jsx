import Script from 'next/script';
import PropTypes from 'prop-types';
import { ClerkProvider } from '@clerk/nextjs';
import Main from '../components/layout/main';
import pjson from '../package.json';
/* ensure all pages have Bootstrap CSS */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/index.css';

export default function RootLayout({
    children,
    params: { lang },
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
}) {

    return (
        <html lang={lang || 'en'}>
            <head>
                <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3' crossOrigin='anonymous' defer />
            </head>
            <body>
                <ClerkProvider>
                    <Main>
                        <main>{children}</main>
                    </Main>
                </ClerkProvider>
            </body>
        </html>
    );
}

export const metadata = {
    description: pjson.description,
    title: pjson.displayName,
};

RootLayout.propTypes = {
    children: PropTypes.array,
    params: PropTypes.object,
};
