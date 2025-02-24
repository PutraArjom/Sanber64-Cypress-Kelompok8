import loginPage from "../../support/page-object/loginPage";

describe("template spec", () => {
  beforeEach(() => {
    loginPage.visit('')
  });

  it("Success Login", () => {
    cy.login('Sukri@gmail.com','SukriPeod1') //File pemanggilan ada di command.js
    cy.get('.base').should('have.text','My Account')
  });

  it("Failed Login - The user did not enter email and password", () => {
    loginPage.buttonSigIn()
    cy.get('#email-error').should('contain.text','This is a required field')
    cy.get('#pass-error').should('contain.text','This is a required field')
  });

  it("Failed Login - The user did not enter email", () => {
    loginPage.inputPassword()
    loginPage.buttonSigIn()
    cy.get('#email-error').should('contain.text','This is a required field')
  });
  
  it("Failed Login - The user did not enter password", () => {
    loginPage.inputUser()
    loginPage.buttonSigIn()
    cy.get('#pass-error').should('contain.text','This is a required field')
  });

  it("Try Forgot password", () => {
    loginPage.forgotPass()
    loginPage.inputUser()
    loginPage.buttonResetPassword()
    cy.url().should('include','/account/login') 
    cy.get('.message-success > div').should('be.visible')
  });

  it("Try Forgot password - No input Email", () => {
    loginPage.forgotPass()
    loginPage.buttonResetPassword()
    cy.get('.message-error > div').should('be.visible')
    //cy.get('#email_address-error').should('be.visible')
  });
});
