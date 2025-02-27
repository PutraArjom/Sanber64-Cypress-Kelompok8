import loginPage from "../../support/page-object/loginPage"

describe('Proceed to checkout', () => {
  beforeEach(() => {
    loginPage.visit('')
  })

  it('successfully checkout', () => {
    // Verify the product has been added to the cart
    cy.get('.minicart-items').should('contain', '1 item(s)')

    // Click on the cart to view it
    cy.get('.action.showcart').click()

    // Proceed to checkout
    cy.get('.checkout').click()

    // Fill in customer information
    cy.get('#customer-email').type('Sukri@gmail.com')
    cy.get('#customer-firstname').type('Sukri')
    cy.get('#customer-lastname').type('Peod')
    cy.get('#customer-password').type('SukriPeod1')
    cy.get('#confirmation-password').type('SukriPeod1')
    cy.get('#is_subscribed').check()  // Subscribe to newsletter if needed
    cy.get('.action.submit.primary').click() // Submit customer information form

    // Wait for the shipping page to load
    cy.url().should('include', '/checkout/#shipping')

    // Fill in shipping details
    cy.get('#shipping-address-same-as-billing').check() // If shipping and billing are the same
    cy.get('#shipping-methods').find('input[type="radio"]').first().check() // Select shipping method
    cy.get('.action.checkout').click() // Click next to proceed to payment

    // Fill in payment information
    cy.get('input[name="payment[method]"]').check('checkmo') // Choose payment method (Check/Money Order)
    cy.get('.action.checkout').click() // Proceed to confirm

    // Verify if the order confirmation page appears
    cy.url().should('include', '/checkout/onepage/success/')
    cy.contains('Thank you for your purchase!')
  })
})
