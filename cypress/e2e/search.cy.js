/// <reference types="cypress" />

describe("test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000/");
  });

  it("sub task", () => {
    expect(true).to.equal(true);
  });
});
