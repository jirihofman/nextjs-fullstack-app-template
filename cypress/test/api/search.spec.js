/// <reference types="cypress" />

import { baseUrl } from '../../support/e2e';

describe('Search API', function() {

    beforeEach(function() {
        // cy.task('db:seed');
        // Instead the data is seeded in npm run test:db:init
    });

    describe('GET /search/q=:term', function() {
        it('No results', function() {
            cy.request('GET', `${baseUrl}/api/library/search?q=NameThatDoesNotExist`).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.length).to.eq(0);
            });
        });
        it('One result by title', function() {
            cy.request('GET', `${baseUrl}/api/library/search?q=box`).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.length).to.eq(1);
            });
        });
        it('One result by author', function() {
            cy.request('GET', `${baseUrl}/api/library/search?q=Edg`).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.length).to.eq(1);
            });
        });
        it('Three gamebooks with no search term', function() {
            cy.request('GET', `${baseUrl}/api/library/search?q=`).then((response) => {
                expect(response.status).to.eq(200);
                // Doesn't contain PIN protected gamebook.
                expect(response.body.length).to.eq(4);
            });
        });
    });
});
