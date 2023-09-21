/* eslint react/prop-types: 0 */
import { ClerkProvider } from '@clerk/nextjs';
import '../style/index.css';
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }) {
    return (
        <ClerkProvider {...pageProps}>
            <Component {...pageProps} />
            <Analytics/>
        </ClerkProvider>
    );
}
