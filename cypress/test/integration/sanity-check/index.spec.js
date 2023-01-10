/// <reference types="cypress" />

context('Sanity checks', () => {

    it('Landing page contains all the sections', () => {
        cy.visit('/');
        cy.contains('Site').should('be.visible');
        cy.contains('template');
        cy.contains('Features');
        cy.contains('MySQL');
        cy.contains('GitHub Actions');
        cy.get('footer span.text-muted').should('contain.text', '(version:');
    });

    it('Has login button', () => {
        cy.visit('/');
        cy.get('a.nav-link[href="/api/auth/signin"]').should('be.visible').click();
        cy.get('.card')
            .should('contain.text', 'GitHub')
            .should('contain.text', 'Google');
    });
});
