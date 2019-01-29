describe('Vue component for edit profile', () => {
  it('Opens a current password modal when editing the user password', () => {
    cy.visit('account/profile/');

    // login
    cy.get('#Username').type('ec1000ky@test.com');
    cy.get('#Password').type('Test1234');
    cy.get('input[value="Sign In"]').click();

    // edit password and expect error on both fields
    cy.get('#edit-password').type('Test');
    cy.get('.form-actions .btn').click();
    cy.get('#edit-password-error').should('be.visible');
    cy.get('#confirm-password-error').should('be.visible');

    // reload page and try only editing confirm password field
    cy.reload();
    cy.get('#confirm-password').type('Test');
    cy.get('.form-actions .btn').click();
    cy.get('#edit-password-error').should('be.visible');
    cy.get('#confirm-password-error').should('be.visible');

    // reload page and try mismatched passwords
    cy.reload();
    cy.get('#edit-password').type('Test');
    cy.get('#confirm-password').type('Test');
    cy.get('.form-actions .btn').click();
    // but password doesn't meet requirements
    cy.get('#edit-password-error').should('be.visible');

    // reload page and do it right this time
    cy.reload();
    cy.get('#edit-password').type('Test1234');
    cy.get('#confirm-password').type('Test1234');
    cy.get('.form-actions .btn').click();
    cy.get('#verify-password-dialog').should('be.visible');
  });
});
