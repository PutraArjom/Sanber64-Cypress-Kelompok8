import EditAddressPage from '../../support/page-object/editAddressPage';

describe('Edit Address Information', () => {
    const addressPage = new EditAddressPage();

    beforeEach(() => {
        cy.login('Sukri@gmail.com', 'SukriPeod1'); // Asumsi login function sudah dibuat
        addressPage.visit();
    });

    it('Edit Address Successfully', () => {
        addressPage.fillFirstName('Budi');
        addressPage.fillLastName('Santoso');
        addressPage.fillCompany('Tech Corp');
        addressPage.fillPhone('08123456789');
        addressPage.fillStreetAddress('Jalan Merdeka No. 45');
        addressPage.fillCity('Jakarta');
        addressPage.selectState('DKI Jakarta');
        addressPage.fillZipCode('12345');
        addressPage.selectCountry('Indonesia');
        addressPage.submit();
        addressPage.verifySuccessMessage('You saved the address.');
    });

    it('Validation Error - Empty Required Fields', () => {
        addressPage.fillFirstName('');
        addressPage.fillLastName('');
        addressPage.fillPhone('');
        addressPage.fillStreetAddress('');
        addressPage.fillCity('');
        addressPage.fillZipCode('');
        addressPage.submit();

        cy.get('#firstname-error').should('be.visible').should('contain.text', 'This is a required field.');
        cy.get('#lastname-error').should('be.visible').should('contain.text', 'This is a required field.');
        cy.get('#telephone-error').should('be.visible').should('contain.text', 'This is a required field.');
        cy.get('#street_1-error').should('be.visible').should('contain.text', 'This is a required field.');
        cy.get('#city-error').should('be.visible').should('contain.text', 'This is a required field.');
        cy.get('#zip-error').should('be.visible').should('contain.text', 'This is a required field.');
    });
});
