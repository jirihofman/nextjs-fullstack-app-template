/* eslint react/prop-types: 0 */
import { SessionProvider } from 'next-auth/react';
import '../style/index.css';
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }) {
    return (
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
            <Analytics/>
        </SessionProvider>
    );
}
