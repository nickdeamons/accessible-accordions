describe('Displays the recent history table', () => {
  it('Displays the table on the dashboard', () => {
    cy.visit('/portal/BB.2.1-dashboard.html');

    // Check the window data
    cy.window().then((win) => {
      const historyData = win.VueTables.historyData;

      historyData.forEach((entry) => {
        // if the CanBeCancelled value is true, show the cancel link
        if (entry.CanBeCancelled) {
          cy.get('a[href="/payment/paynow"]').should('be.visible');
        }
      });
    });
  });

  it('Displays the table on the bills/history page', () => {
    cy.visit('/portal/bills.html');

    // Check the window data
    cy.window().then((win) => {
      const historyData = win.VueTables.historyData;

      historyData.forEach((entry) => {
        // if the CanBeCancelled value is false, hide the cancel link
        if (!entry.CanBeCancelled) {
          cy.get('a[href="/payment/paynow"]').should('not.be.visible');
        }
      });
    });
  });
});
