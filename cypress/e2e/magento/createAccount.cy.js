import registrationPage from '../../support/page-object/registrationPage';

describe('Verification of access points in the account registration process', () => {
  it('Visit Create Account Page and Verify Elements', () => { 
    registrationPage.visit();
    cy.contains('Create an Account').should('be.visible').click();
    cy.url().should('include', 'customer/account/create');
    cy.get('input#firstname').should('be.visible'); 
    cy.get('input#lastname').should('be.visible');
    cy.get('input#email_address').should('be.visible');
    cy.get('input#password').should('be.visible');
    cy.get('input#password-confirmation').should('be.visible');
    cy.get('button[type="submit"]').contains('Create an Account').should('be.visible');
  });
});

describe('Success to create an account', () => {
  it('Registration with valid data', () => {
    registrationPage.visit();
    registrationPage.fillregistrationForm('Bunga', 'Mawar', 'SecureP@ss1');
    registrationPage.submitForm();
    registrationPage.registrationSuccess();
  });
});

describe('Failed to create an account', () => {
  beforeEach(() => { 
    registrationPage.visit();
  });
  it('Did not fill in all fields', () => {
    registrationPage.submitForm();
    cy.get('#firstname-error').should('be.visible');
    cy.get('#lastname-error').should('be.visible');
    cy.get('#email_address-error').should('be.visible');
    cy.get('#password-error').should('be.visible');
    cy.get('#password-confirmation-error').should('be.visible');
  });
  it('Input invalid email format', function () {
    cy.fixture('users').then((users) => {
      cy.registerWithInvalidEmail(
        users.invalidEmailUser.firstName,
        users.invalidEmailUser.lastName,
        users.invalidEmailUser.email,
        users.invalidEmailUser.password
      );
      cy.get('#email_address-error').should('be.visible').should('contain', 'Please enter a valid email address');
  });
});
it('Input weak password', function () {
  cy.fixture('users').then((users) => {
    registrationPage.fillregistrationForm(
      users.weakPasswordUser.firstName,
      users.weakPasswordUser.lastName,
      users.weakPasswordUser.password
    );
    registrationPage.submitForm();
    cy.contains('Password Strength').should('be.visible').should('contain', 'Weak');
    cy.contains('Minimum length of this field must be equal or greater than 8 symbols').should('be.visible');
  });
});
it('Unmatched password value', function () {
  cy.fixture('users').then((users) => {
    cy.get('input#firstname').type(users.unmatchedPasswordUser.firstName);
    cy.get('input#lastname').type(users.unmatchedPasswordUser.lastName);
    cy.get('input#email_address').type(registrationPage.generateUniqueEmail());
    cy.get('input#password').type(users.unmatchedPasswordUser.password);
    cy.get('input#password-confirmation').type(users.unmatchedPasswordUser.confirmPassword);
    registrationPage.submitForm();
    cy.get('#password-confirmation-error').should('be.visible').should('contain', 'Please enter the same value again.');
  });
});
it('Input existing email', () => {
  cy.registerWithExistingEmail('Bunga', 'Mawar', 'Babakan@gmail.com', 'SecureP@ss1');
  cy.get('.message-error').should('be.visible')
    .should('contain', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.');
});
it('Verification "Click Here" to redirect to the reset password page.', () => {
  cy.registerWithExistingEmail('Bunga', 'Mawar', 'Babakan@gmail.com', 'SecureP@ss1');
  cy.contains('a', 'click here').should('be.visible').click();
  cy.url().should('include', '/customer/account/forgotpassword/');
  cy.contains('Forgot Your Password?').should('be.visible');
});
});
