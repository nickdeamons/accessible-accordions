describe('Toggling passwords', () => {
  it('Visits the reset password page', () => {
    cy.visit('/login-flow/04-password-reset.html');

    // Get an input, type into it and verify that the input type is 'password'
    cy.get('#password button')
      .click();

    cy.get('#password input[type="text"]').should('have.value', 'abc#!1234');

    cy.get('#password button')
      .click();

    cy.get('#password input[type="password"]').should('be.visible');
  });

  it('Visits the login page', () => {
    cy.visit('/login-flow/01-login-form.html');

    // Get an input, type into it and verify that the input type is 'password'
    cy.get('#password button')
      .click();

    cy.get('#password input[type="text"]').type('1234').should('be.visible');

    cy.get('#password button')
      .click();

    cy.get('#password input[type="password"]').should('be.visible');
  });
});
