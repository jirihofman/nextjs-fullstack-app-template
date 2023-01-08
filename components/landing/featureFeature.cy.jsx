import React from 'react';
import Feature from './feature';

describe('<Feature />', () => {
    it('renders', () => {
    // see: https://on.cypress.io/mounting-react
        cy.mount(<Feature />);
    });
});
