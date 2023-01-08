import React from 'react';
import Footer from './footer';

describe('<Footer />', () => {
    it('renders', () => {
    // see: https://on.cypress.io/mounting-react
        cy.mount(<Footer />);
    });
});
