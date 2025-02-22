describe("template spec", () => {
  beforeEach(() => {
    //Link langsung menuju ke Page Login
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/"
    );
  });

  it("Success Login", () => {
    cy.get("").type("");
    cy.get("").type("");
    cy.get("").click();
  });
  it("Failed Login ", () => {
    cy.get("").type("");
  });
  it("Failed Login - wrong username", () => {
    cy.get("").type("");
  });
  it("Failed Login - wrong password", () => {
    cy.get("").type("");
  });
});
