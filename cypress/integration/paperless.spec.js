describe('Is the Vue app for paperless billing enrollment', () => {
  it('Enrolls the user in paperless billing', () => {
    cy.visit('/portal/BF.1.1-ebills-1.html');

    // Fill out the enrollment form
    cy.get('#paperless-email').type('test@test.com');
    cy.get('#paperless-agree').click();

    // Submit the form
    cy.get('.form-field button').should('not.be.disabled');
    cy.get('.form-field button').click();

    // Should no longer open a modal, should just enroll the user
    cy.get('.alert--success').should('be.visible');
  });

  it('Opens a modal to cancel enrollment', () => {
    cy.visit('/portal/BF.1.1-ebills-1.html');

    // Fill out the enrollment form
    cy.get('#paperless-email').type('test@test.com');
    cy.get('#paperless-agree').click();

    // Submit the form
    cy.get('.form-field button').should('not.be.disabled');
    cy.get('.form-field button').click();

    // Should no longer open a modal, should just enroll the user
    cy.get('.alert--success').should('be.visible');

    cy.wait(500);

    // Cancel enrollment should still open a modal
    cy.get('h2 .a11y-dialog-open-button').click();
    cy.get('.dialog--remove').should('be.visible');
  });
});
