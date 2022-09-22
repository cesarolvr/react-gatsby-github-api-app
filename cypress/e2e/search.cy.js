/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("http://localhost:8000/");
});

it("focus on search field", () => {
  cy.findByTestId("search").focus();
  expect(true).to.equal(true);
});
