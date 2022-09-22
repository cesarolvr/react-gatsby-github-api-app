describe("searching some user", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("http://localhost:8000/");
    cy.wait(4000);
  });

  it("focus on search field", () => {
    cy.get(".input").type('cesar')
  });
});
