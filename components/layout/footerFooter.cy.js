import React from 'react';
import Footer from './footer';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../messages/cs.json';

describe('<Footer />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(
            <NextIntlClientProvider locale='cs' messages={messages}>
                <Footer />
            </NextIntlClientProvider>
        );
    });
});
