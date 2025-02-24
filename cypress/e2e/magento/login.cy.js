import loginPage from "../../support/page-object/loginPage";

describe("template spec", () => {
  beforeEach(() => {
    loginPage.visit('')
  });

  it("Success Login", () => {
    cy.login('Sukri@gmail.com','SukriPeod1') //File pemanggilan ada di command.js
    cy.get('.base').should('have.text','My Account')
  });

  it("Fail Login - Forgot @gmail", () => {
    cy.login('Sukri','SukriPeod1')
    cy.get('#email-error').should('be.visible')
  });

  it("Fail Login - Wrong Email True Pass", () => {
    cy.login('Ahi@gmail.com','SukriPeod1')
    cy.get('.message-error > div').should('have.text',"The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.")
  });
    it("Fail Login - True Email Fail Pass", () => {
    cy.login('Skuri@gmail.com','Peod1')
    cy.get('.message-error > div').should('have.text',"The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.")
  });

  it("Failed Login - The user did not enter email and password", () => {
    loginPage.buttonSigIn()
    cy.get('#email-error').should('contain.text','This is a required field')
    cy.get('#pass-error').should('contain.text','This is a required field')
  });

  it.only("Failed Login - The user did not enter email", () => {
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
    cy.get('#email_address').type("Sukri@gmail.com")
    loginPage.buttonResetPassword()
    cy.url().should('include','/account/login') 
    cy.get('.message-success > div').should('have.text','If there is an account associated with Sukri@gmail.com you will receive an email with a link to reset your password.')
  });

  it("Try Forgot password - No input Email", () => {
    loginPage.forgotPass()
    loginPage.buttonResetPassword()
    //cy.get('.message-error > div').should('be.visible')
    cy.get('#email_address-error').should('be.visible')
  });
});
