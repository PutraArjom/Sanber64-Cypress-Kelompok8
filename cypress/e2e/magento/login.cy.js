
describe("template spec", () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
  });

  it("Success Login", () => {
    cy.get('#email').type("Sukri@gmail.com");
    cy.get('#pass').type("SukriPeod1");
    cy.get('#send2').click();
    cy.get('.base').should('have.text','My Account')
  });

  it("Failed Login - The user did not enter email and password", () => {
    cy.get('#send2').click();
    cy.get('.message-error').should('be.visible')
  });

  it("Failed Login - The user did not enter email", () => {
    cy.get('#pass').type("SukriPeod1");
    cy.get('#send2').click();
    cy.get('#email-error').should('contain.text','This is a required field')
  });
  
  it("Failed Login - The user did not enter password", () => {
    cy.get('#email').type("Sukri@gmail.com");
    cy.get('#send2').click();
    cy.get('#pass-error').should('contain.text','This is a required field')
  });
});
