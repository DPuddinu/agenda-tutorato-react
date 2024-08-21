
describe('Page should change', () => {
  it('should navigate from Landing page to Register page', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Register').click()
    cy.url().should('include', '/register');
  })
})

describe('Page should change', () => {
  it('should navigate from Landing page to Login page', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Login').click()
    cy.url().should('include', '/login');
  })
})

describe('Authentication Test', () => {
  before(() => {
    cy.window().then((window) => {
      expect(window.sessionStorage.length).to.equal(0);
    });
  });

  it('should redirect to login page if user is not logged in', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('Dashboard').click();
    cy.url().should('include', '/login');
    cy.contains('Login').should('be.visible');
  });
});

