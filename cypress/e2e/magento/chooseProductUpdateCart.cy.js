describe('Choose Product and Update Shopping Cart', () => {
  it('Choose Product Successfully', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
    cy.get('Sukri@gmail.com','SukriPeod1')
    cy.get('Sukri','SukriPeod1')
    cy.get('#send2').click()
  })

})