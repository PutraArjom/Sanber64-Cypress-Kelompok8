class loginPage {
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
    }
    inputUser(){
      cy.get('#email').type("Sukri@gmail.com");
    }
    inputPassword(){
      cy.get('#pass').type("SukriPeod1");
    }
    buttonSigIn(){
      cy.get('#send2').click();
    }
    forgotPass(){
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > .secondary > .action > span').click();
    }
    buttonResetPassword(){
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    }
    
}

export default new loginPage();








