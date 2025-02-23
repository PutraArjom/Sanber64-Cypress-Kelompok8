class registrationPage {
    visit() {
      cy.visit('https://magento.softwaretestingboard');
      cy.get('authorization-link').click()
    }
    
}










