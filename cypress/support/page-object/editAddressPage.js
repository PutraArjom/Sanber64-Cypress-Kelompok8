class EditAddressPage {
    visit() {
        cy.visit('https://magento.softwaretestingboard.com/customer/address/edit/');
    }

    fillFirstName(firstName) {
        cy.get('#firstname').clear().type(firstName);
    }

    fillLastName(lastName) {
        cy.get('#lastname').clear().type(lastName);
    }

    fillCompany(company) {
        cy.get('#company').clear().type(company);
    }

    fillPhone(phone) {
        cy.get('#telephone').clear().type(phone);
    }

    fillStreetAddress(street) {
        cy.get('#street_1').clear().type(street);
    }

    fillCity(city) {
        cy.get('#city').clear().type(city);
    }

    selectState(state) {
        cy.get('#region_id').select(state);
    }

    fillZipCode(zip) {
        cy.get('#zip').clear().type(zip);
    }

    selectCountry(country) {
        cy.get('#country').select(country);
    }

    submit() {
        cy.get('button[title="Save Address"]').click();
    }

    verifySuccessMessage(message) {
        cy.get('.message-success').should('contain.text', message);
    }
}

export default EditAddressPage;
