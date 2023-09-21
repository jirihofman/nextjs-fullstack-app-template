import React from 'react';
import Feature from './feature';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../messages/cs.json';

describe('<Feature />', () => {
    it('renders', () => {
    // see: https://on.cypress.io/mounting-react
        cy.mount(
            <NextIntlClientProvider locale='cs' messages={messages}>
                <Feature />
            </NextIntlClientProvider>
        );
    });
});
