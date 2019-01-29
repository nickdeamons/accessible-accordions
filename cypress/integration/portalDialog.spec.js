describe('Vue component that shows dialogs (modal) on a page', () => {
  it('Opens and closes modals', () => {
    // make sure we're testing on desktop since the emergency modal isn't a modal on mobile
    cy.viewport(1300, 750);

    cy.visit('/portal/BD.1.2-make-a-payment-1.html');

    // clicking on the dialog open button in the header should open the emergency contact dialog
    cy.get('.MainNav__auxiliary .a11y-dialog-open-button').click();
    cy.get('#emergency-contact-dialog').should('be.visible');

    // let's double check the aria attributes on the parent app are correct for accessibility
    cy.get('#emergency-contact-dialog').parent().should('not.have.attr', 'aria-hidden', 'true');
    // but other DOM elements should have aria-hidden attr

    cy.get('#emergency-contact-dialog').parent().siblings().should('have.attr', 'aria-hidden', 'true');

    // let's close the modal now!
    cy.get('#emergency-contact-dialog button').click();
    cy.get('#emergency-contact-dialog').should('not.be.visible');

    // and double check aria attributes are taken off DOM elements
    cy.get('body').children().should('have.attr', 'aria-hidden', 'false');

    // now let's try the check modal
    cy.get('#pay-from-input').select('new');
    cy.get('#account-number-input + button').click();
    cy.get('#how-to-read-check-dialog').should('be.visible');

    // let's double check the aria attributes on the parent app are correct for accessibility
    cy.get('#how-to-read-check-dialog').parent().should('not.have.attr', 'aria-hidden', 'true');
    // but other DOM elements should have aria-hidden attr

    cy.get('#how-to-read-check-dialog').parent().siblings().should('have.attr', 'aria-hidden', 'true');

    // let's close the modal now (by clicking outside of modal)!
    cy.get('body').click('topLeft');
    cy.get('#how-to-read-check-dialog').should('not.be.visible');

    // and double check aria attributes are taken off DOM elements
    cy.get('body').children().should('have.attr', 'aria-hidden', 'false');
  });

  it('Opens the terms and conditions dialog for autopay', () => {
    cy.visit('/portal/BE.1.2-autopay.html');

    // Fill out the enrollment
    cy.get('#pay-from-input').select('2775');
    cy.get('.form-actions button:nth-child(2)').click();

    // click on terms and conditions
    cy.get('.terms-and-conditions-button').click();
    cy.get('#terms-and-conditions-dialog').should('be.visible');

    // let's double check the aria attributes on the parent app are correct for accessibility
    cy.get('#terms-and-conditions-dialog').parent().should('not.have.attr', 'aria-hidden', 'true');
    cy.get('#terms-and-conditions-dialog').parent().siblings().should('have.attr', 'aria-hidden', 'true');
  });

  it('Opens the terms and conditions dialog for autopay', () => {
    cy.visit('/portal/BE.1.2-autopay.html');

    // Fill out the enrollment
    cy.get('#pay-from-input').select('2775');
    cy.get('.form-actions button:nth-child(2)').click();

    // click on terms and conditions
    cy.get('.terms-and-conditions-button').click();
    cy.get('#terms-and-conditions-dialog').should('be.visible');

    // let's double check the aria attributes on the parent app are correct for accessibility
    cy.get('#terms-and-conditions-dialog').parent().should('not.have.attr', 'aria-hidden', 'true');
    cy.get('#terms-and-conditions-dialog').parent().siblings().should('have.attr', 'aria-hidden', 'true');
  });

  it('Opens the terms and conditions dialog for alerts', () => {
    cy.visit('/portal/BN.1.1-alerts-list.html');

    // click on terms and conditions
    cy.get('.terms-and-conditions-button').click({ multiple: true });
    cy.get('#terms-and-conditions-dialog').should('be.visible');

    // let's double check the aria attributes on the parent app are correct for accessibility
    cy.get('#terms-and-conditions-dialog').parent().should('not.have.attr', 'aria-hidden', 'true');
    cy.get('#terms-and-conditions-dialog').parent().siblings().should('have.attr', 'aria-hidden', 'true');
  });

  it('Opens the terms and conditions dialog for paperless', () => {
    cy.visit('/portal/BF.1.1-ebills-1.html');

    // click on terms and conditions
    cy.get('.terms-and-conditions-button').click();
    cy.get('#terms-and-conditions-dialog').should('be.visible');

    // let's double check the aria attributes on the parent app are correct for accessibility
    cy.get('#terms-and-conditions-dialog').parent().should('not.have.attr', 'aria-hidden', 'true');
    cy.get('#terms-and-conditions-dialog').parent().siblings().should('have.attr', 'aria-hidden', 'true');
  });

  it('Opens the terms and conditions dialog for OTP', () => {
    cy.visit('/portal/BD.1.2-make-a-payment-1.html');

    // Fill out the form
    cy.get('#pay-from-input').select('5789');
    cy.get('#specify-amount-input').select('38.49');
    cy.get('.form-actions button:nth-child(2)').click();

    // click on terms and conditions
    cy.get('.terms-and-conditions-button').click();
    cy.get('#terms-and-conditions-dialog').should('be.visible');

    // let's double check the aria attributes on the parent app are correct for accessibility
    cy.get('#terms-and-conditions-dialog').parent().should('not.have.attr', 'aria-hidden', 'true');
    cy.get('#terms-and-conditions-dialog').parent().siblings().should('have.attr', 'aria-hidden', 'true');
  });

  it('Opens the current password validation for edit profile', () => {
    cy.visit('/portal/BJ.1.1-profile-edit.html');

    // Fill out the form
    cy.get('#edit-first-name').type('test');
    cy.get('#edit-last-name').type('test');
    cy.get('#edit-email').type('test@test.co');
    cy.get('#confirm-email').type('test@test.co');
    cy.get('#edit-password').type('test1234');
    cy.get('#confirm-password').type('test1234');

    // click on terms and conditions
    cy.get('.form-actions .btn').click();
    cy.get('#verify-password-dialog').should('be.visible');

    // let's double check the aria attributes on the parent app are correct for accessibility
    cy.get('#verify-password-dialog').parent().should('not.have.attr', 'aria-hidden', 'true');
    cy.get('#verify-password-dialog').parent().siblings().should('have.attr', 'aria-hidden', 'true');
  });

  it('Opens the terms and conditions dialog for create account', () => {
    cy.visit('/account/create');

    cy.get('#account-number-input').type('89454700-36');
    cy.get('#search-by-account-number').click();
    cy.get('#ssn-input').type('4433');
    cy.get('#step-1-button').click();

    // click on terms and conditions
    cy.get('.terms-and-conditions-button').click();
    cy.get('#termsDialog_register_terms_01').should('be.visible');

    // let's double check the aria attributes on the parent app are correct for accessibility
    cy.get('#termsDialog_register_terms_01').parent().should('not.have.attr', 'aria-hidden', 'true');
    cy.get('#termsDialog_register_terms_01').parent().siblings().should('have.attr', 'aria-hidden', 'true');
  });
});
