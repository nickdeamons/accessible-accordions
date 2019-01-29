describe('Is the Vue app for NIPSCO subscriptions', () => {
  it('Adds and deletes alerts', () => {
    cy.visit('/portal/BN.1.1-alerts-list.html');

    // Switch to email contact method
    cy.get('#bill-contact').select('Email');
    cy.get('#bill-email').should('be.visible');

    // Select text field so phone value is expected in contact info
    cy.get('#bill-contact').select('Text');
    cy.get('#bill-phone').should('be.visible');

    cy.get('#bill-phone').type('12');

    cy.get('#bill-agree').check();

    cy.get('[data-vue-app="bill-alerts"] .form-actions button[type="submit"]').click();

    // expect validation error to show
    cy.get('#bill-phone-error').should('be.visible');
  });
});
