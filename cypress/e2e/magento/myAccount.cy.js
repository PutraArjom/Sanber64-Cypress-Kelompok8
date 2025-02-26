import MyAccountPage from '../../support/page-object/myAccountPage';

describe('Edit Account Information', () => {
    const myAccount = new MyAccountPage();

    beforeEach(() => {
        cy.login('Sukri@gmail.com', 'SukriPeod1'); // Asumsi login function sudah dibuat
        myAccount.visit();
    });

    it('Edit First Name & Last Name', () => {
        myAccount.fillFirstName('Budi');
        myAccount.fillLastName('Santoso');
        myAccount.submit();
        myAccount.verifySuccessMessage('You saved the account information.');
    });

    it('Edit Email', () => {
        myAccount.checkChangeEmail();
        myAccount.fillEmail('budi.santoso@gmail.com');
        myAccount.fillCurrentPassword('SukriPeod1');
        myAccount.submit();
        myAccount.verifySuccessMessage('You saved the account information.');
    });

    it('Edit Password', () => {
        myAccount.checkChangePassword();
        myAccount.fillNewPassword('BudiPeod123');
        myAccount.fillCurrentPassword('SukriPeod1');
        myAccount.submit();
        myAccount.verifySuccessMessage('You saved the account information.');
    });

    it('Validation Error - Empty Required Fields', () => {
        myAccount.fillFirstName('');
        myAccount.fillLastName('');
        myAccount.submit();
        cy.get('#firstname-error').should('be.visible').should('contain.text', 'This is a required field.');
        cy.get('#lastname-error').should('be.visible').should('contain.text', 'This is a required field.');
    });
});
