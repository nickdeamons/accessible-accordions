describe('Is the Vue app for one time payment', () => {
  it('Shows a warning message if the payment date is after the due date', () => {
    cy.visit('/portal/BD.1.2-make-a-payment-1.html');

    // though date that is auto selected is after due date,
    // don't show warning until after the user has made a selection
    cy.get('.alert--warning').should('not.be.visible');

    // Fill out the payment form
    // data attributes are in place for valid dates and due date
    cy.get('#pay-from-input').select('5789');
    // select a date after the due date, expect a warning message
    cy.get('#paymentDate').click();
    cy.get('button[data-pika-day="23"]').click();
    cy.get('.alert--warning').should('be.visible');
  });

  it('Formats the currency the user selects for amount', () => {
    cy.visit('/dashboard');
    cy.get('#Username').type('ec1000ky@test.com');
    cy.get('#Password').type('Test1234');
    cy.get('.btn.btn-primary').click();

    cy.wait(2000);
    cy.get('.portal__account a').click();
    cy.get('.account-nickname').contains('128 S HANOVER AV').click({ force: true });
    cy.wait(4000);
    cy.get('.portal__sidebar .js-submenu a[href="/payment/paynow"]').click();
    cy.wait(2000);

    // fill out OTP form
    cy.get('#pay-from-input').select('new');
    cy.get('#routing-number-input').type('021000021');
    cy.get('#account-number-input').type('61666611');
    cy.get('#specify-amount-input').select('174');
    cy.get('.form-actions button').click();
    cy.get('.form-confirmation').contains('$174.00');

    // go back and try custom amount
    cy.get('.form-confirmation').contains('Edit Amount').click({ force: true });
    cy.get('#specify-amount-input').select('custom');
    cy.get('#customAmount').type('4');
    cy.get('.form-actions button').click();
    cy.get('.form-confirmation').contains('$4.00');
  });
});
