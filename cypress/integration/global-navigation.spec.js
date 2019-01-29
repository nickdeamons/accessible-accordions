describe('It contains classes for global navigation and mobile menus', () => {
  it('Toggles the mobile menu', () => {
    cy.viewport('iphone-6');
    // visit portal page
    cy.visit('/portal/BB.2.1-dashboard.html');

    // When mobile nav is clicked in portal, open portal menu
    cy.get('.toggle-navigation').click();
    cy.get('#portal-navigation').should('be.visible');

    // Toggle portal menu closed
    cy.get('.MobileNav__portal-back').click();
    cy.get('#portal-navigation').should('not.be.visible');

    // visit marketing page (marketing site doesn't have portal menu)
    cy.visit('/marketing-base/F.1-contractor-search.html');

    // When mobile nav is clicked in portal, open portal menu
    cy.get('.toggle-navigation').click();
    cy.get('#portal-navigation').should('not.be.visible');
  });
});
