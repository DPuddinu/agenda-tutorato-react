import { BASE_URL } from '../contants';

const LOGIN_URL = BASE_URL + 'login';

beforeEach(() => {
  cy.visit(LOGIN_URL);
});

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

describe('email input field should be required', () => {
  it('is required', () => {
    cy.get('#email').should('have.attr', 'required');
  });
});

describe('password input field should be required', () => {
  it('is required', () => {
    cy.get('#password').should('have.attr', 'required');
  });
});

describe('verify if user account exist', () => {
  it('user not exist', () => {
    cy.get('#email').type('prova@email.com');
    cy.get('#password').type('Cipolla1?');
    cy.contains('Sign in').click();
    cy.contains(`Failed to fetch`).should('be.visible');
  });
});
