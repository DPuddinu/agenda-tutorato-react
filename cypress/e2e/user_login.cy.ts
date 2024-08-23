import { BASE_URL } from "../contants";

describe('Page should change', () => {
  it('navigate from Landing page to Register page', () => {
    cy.visit(BASE_URL);
    cy.contains('Register').click();
    cy.url().should('include', '/register');
  });
});

describe('Page should change', () => {
  it('navigate from Landing page to Login page', () => {
    cy.visit(BASE_URL);
    cy.contains('Login').click();
    cy.url().should('include', '/login');
  });
});

describe('Authentication Test', () => {
  before(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
  });

  it('redirect to login page if user is not logged in', () => {
    cy.visit(BASE_URL);
    cy.contains('Dashboard').click();
    cy.url().should('include', '/login');
    cy.contains('Login').should('be.visible');
  });
});
