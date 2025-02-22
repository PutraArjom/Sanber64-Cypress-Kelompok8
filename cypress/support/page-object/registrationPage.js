class registrationPage {
    visit() {
      cy.visit('/customer/account/create/');
    }
  
    generateUniqueEmail() {
      return `test_${Date.now()}@example.com`;
    }
  
    fillregistrationForm(firstName, lastName, password) {
      const email = this.generateUniqueEmail();
      cy.get('input#firstname').type(firstName);
      cy.get('input#lastname').type(lastName);
      cy.get('input#email_address').type(email);
      cy.get('input#password').type(password);
      cy.get('input#password-confirmation').type(password);
      cy.wrap(email).as('uniqueEmail'); 
    }
    submitForm() {
      cy.get('button.action.submit.primary').click();
    }
    registrationSuccess() {
        cy.url().should('include', '/customer/account');
        cy.contains('Thank you for registering with Main Website Store.').should('be.visible');
        cy.log('Success: Account successfully created!');
    }   
  }
  
export default new registrationPage(); // Ekspor class supaya bisa digunakan di file lain
  