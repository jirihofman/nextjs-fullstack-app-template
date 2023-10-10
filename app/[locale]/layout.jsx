import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import Script from 'next/script';
import { ClerkProvider } from '@clerk/nextjs';
import Main from '../../components/layout/main';
import pjson from '../../package.json';
/* ensure all pages have Bootstrap CSS */
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../style/index.css';

export default async function LocaleLayout({
    children,
    params: { locale }
}) {
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    // Use default theme for now
    const theme = 'light';

    return (
        <html lang={locale} data-bs-theme={theme}>
            <head>
                <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3' crossOrigin='anonymous' defer />
            </head>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <ClerkProvider>
                    <body suppressHydrationWarning={true}>
                        <Main>
                            <main>{children}</main>
                        </Main>
                    </body>
                </ClerkProvider>
            </NextIntlClientProvider>
        </html>
    );
}

export const metadata = {
    description: pjson.description,
    title: pjson.displayName,
};
