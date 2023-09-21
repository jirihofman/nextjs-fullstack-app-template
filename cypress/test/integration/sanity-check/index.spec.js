/// <reference types="cypress" />

context('Sanity checks', () => {

    it.skip('Landing page contains all the sections', () => {
        cy.visit('/', {
            failOnStatusCode: false,
        });
        cy.contains('Site').should('be.visible');
        cy.contains('template');
        cy.contains('Features');
        cy.contains('Clerk');
        cy.contains('GitHub Actions');
        cy.get('footer span.text-muted').should('contain.text', '(version:');
    });

    // Clerk is not enabled by default?
    it.skip('Has login button', () => {
        cy.visit('/');
        cy.get('.d-none.d-sm-flex.navbar-nav').should('be.visible').click();
        cy.get('.card')
            .should('contain.text', 'GitHub')
            .should('contain.text', 'Google');
    });
});
