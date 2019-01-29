describe('Forgot password', () => {
  it('Searches for an account by account number', () => {
    // visit the page
    cy.visit('/login-flow/03-forgot-password.html');

    // Make sure the button is disabled without an acct # value
    cy.get('#search-by-account-number').should('be.disabled');

    // Type into the field
    cy.get('#account-number-input').type('1234-5678-90');

    // If there's a value in the field, make sure the button is enabled, clicked,
    // and verification fields are shown
    cy.get('#search-by-account-number').should('not.be.disabled');
    cy.get('#search-by-account-number').click();
  });

  it('Searches for an account by phone number', () => {
    // visit the page
    cy.visit('/login-flow/03-forgot-password.html');

    // Click "I don't know my account number" to enable phone lookup
    cy.get('.forgot-password__account-number-lookup .form-field__help-link').click();

    // make sure the phone lookup shows
    cy.get('.forgot-password__alternate-lookup').should('have.class', 'js-show');

    // Make sure the button is disabled without a phone # value
    cy.get('#search-by-phone').should('be.disabled');

    // Type into the field
    cy.get('#phone-input').type('(123) 456-7890');

    // If there's a value in the field, make sure the button is enabled, clicked,
    // and verification fields are shown
    cy.get('#search-by-phone').should('not.be.disabled');
    cy.get('#search-by-phone').click();
  });

  it('Toggles between account and phone lookup', () => {
    // visit the page
    cy.visit('/login-flow/03-forgot-password.html');

    // Make sure fields are cleared each time the lookup is toggled
    // Type number into acct #
    cy.get('#account-number-input').type('1234-5678-90');

    // Click phone lookup
    cy.get('.forgot-password__account-number-lookup .form-field__help-link').click();

    // Toggle back to acct lookup and make sure the value has reset
    cy.get('.forgot-password__alternate-lookup .form-field__help-link').click();
    cy.get('#account-number-input').should('not.have.value');

    // Toggle to phone number
    cy.get('.forgot-password__account-number-lookup .form-field__help-link').click();

    // Type number into phone number
    cy.get('#phone-input').type('(123) 456-7890');

    // Toggle to account number lookup
    cy.get('.forgot-password__alternate-lookup .form-field__help-link').click();

    // Toggle back to phone lookup and make sure the value has reset
    cy.get('.forgot-password__account-number-lookup .form-field__help-link').click();
    cy.get('#phone-input').should('not.have.value');
  });

  it('Validates on the front end to make sure required fields are present for account verification', () => {
    // visit the page
    cy.visit('/login-flow/03-forgot-password.html');

    // Fill out the email field
    cy.get('#email-for-password').type('test@testcom');

    // Fill out the account number field
    cy.get('#account-number-input').type('12');

    // Click to search for account
    cy.get('#search-by-account-number').click();

    // email should have error because we typed it wrong
    cy.get('#email-for-password-error').should('have.class', 'js-has-error');

    // Fix the email
    cy.get('#email-for-password').clear().type('test@test.com');

    // Enter verification into field
    cy.get('#dob-input').type('10/23/1991');

    // Remove value from the acct # field
    cy.get('#account-number-input').type('{backspace}{backspace}');
    cy.get('#account-number-input').should('not.have.value');

    // Hit Confirm to check you can't submit without it
    // by verifying an error message is showing
    cy.get('.forgot-password__verify + .form-field button').click();
    cy.get('#account-number-error').should('have.class', 'js-has-error');

    // Enter the acct #
    cy.get('#account-number-input').type('12');

    // Check email validation too
    cy.get('#email-for-password').clear();
    cy.get('.forgot-password__verify + .form-field button').click();
    // email should have error because it's empty
    cy.get('#email-for-password-error').should('have.class', 'js-has-error');

    // Fix the email
    cy.get('#email-for-password').clear().type('test@test.com');

    // Request password form should submit
    cy.get('.forgot-password__verify + .form-field button').click();
    cy.get('form').should('not.be.visible');
  });
});
