/// <reference types="cypress" />

describe('Status API', function() {

    beforeEach(function() {
        // cy.task('db:seed');
        // Instead the data is seeded in npm run test:db:init
    });

    it('Reports status', function() {
        cy.request('GET', '/api/status').then((response) => {
            cy.log(response.body);
            expect(response.status).to.eq(200);
        });
    });
});
