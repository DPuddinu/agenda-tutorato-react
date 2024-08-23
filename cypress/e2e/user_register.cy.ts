import { BASE_URL } from '../contants';

const REGISTER_URL = BASE_URL + 'register';

beforeEach(() => {
  cy.visit(REGISTER_URL);
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

describe('confirm password input field should be required', () => {
  it('is required', () => {
    cy.get('#confirmPassword').should('have.attr', 'required');
  });
});

describe('password should match its regex', () => {
  it('regex test passes', () => {
    cy.get('#email').type('prova@email.com');
    cy.get('#password').type('Cipollaaa');
    cy.get('#confirmPassword').type('Cipollaaa');
    cy.contains('Sign up').click();
    cy.contains(`Password must contain at least one letter, one number, one special character`).should('be.visible');
  });
});

describe('confirm password input field and password input field should have the same value', () => {
  it('matches', () => {
    cy.get('#email').type('prova@email.com');
    cy.get('#password').type('Cipolla1?');
    cy.get('#confirmPassword').type('?1allopiC');
    cy.contains('Sign up').click();
    cy.contains(`Passwords don't match`).should('be.visible');
  });
});
