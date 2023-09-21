import React from 'react';
import AccessDenied from './access-denied';
import { NextIntlClientProvider } from 'next-intl';

describe('<AccessDenied />', () => {
    it('renders', () => {
        cy.mount(
            <NextIntlClientProvider locale='en'>
                <AccessDenied />
            </NextIntlClientProvider>
        );
    });
});
