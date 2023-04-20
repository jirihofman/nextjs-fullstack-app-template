/* eslint react/prop-types: 0 */
import { SessionProvider } from 'next-auth/react';
import '../style/index.css';
import { ToastProvider } from '../components/toast-manager';
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }) {
    return (
        <SessionProvider session={pageProps.session}>
            <ToastProvider>
                <Component {...pageProps} />
                <Analytics/>
            </ToastProvider>
        </SessionProvider>
    );
}
