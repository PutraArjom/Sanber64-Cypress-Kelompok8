class myAccountPage {
    visit() {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/');
    }

    fillFirstName(firstName) {
        cy.get('#firstname').clear().type(firstName);
    }

    fillLastName(lastName) {
        cy.get('#lastname').clear().type(lastName);
    }

    checkChangeEmail() {
        cy.get('#change-email').check();
    }

    fillEmail(email) {
        cy.get('#email').clear().type(email);
    }

    fillCurrentPassword(password) {
        cy.get('#current-password').type(password);
    }

    checkChangePassword() {
        cy.get('#change-password').check();
    }

    fillNewPassword(newPassword) {
        cy.get('#password').type(newPassword);
        cy.get('#password-confirmation').type(newPassword);
    }

    submit() {
        cy.get('button[title="Save"]').click();
    }

    verifySuccessMessage(message) {
        cy.get('.message-success').should('contain.text', message);
    }
}

export default myAccountPage; 