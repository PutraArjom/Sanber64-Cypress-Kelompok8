import registrationPage from '../support/page-object/registrationPage';

Cypress.Commands.add('registerWithInvalidEmail', (firstName, lastName, email, password) => {
    cy.get('input#firstname').type(firstName);
    cy.get('input#lastname').type(lastName);
    cy.get('input#email_address').type(email);
    cy.get('input#password').type(password);
    cy.get('input#password-confirmation').type(password);
    registrationPage.submitForm();
});

Cypress.Commands.add('registerWithExistingEmail', (firstName, lastName, email, password) => {
    cy.get('input#firstname').type(firstName);
    cy.get('input#lastname').type(lastName);
    cy.get('input#email_address').type(email);
    cy.get('input#password').type(password);
    cy.get('input#password-confirmation').type(password);
    registrationPage.submitForm();
});