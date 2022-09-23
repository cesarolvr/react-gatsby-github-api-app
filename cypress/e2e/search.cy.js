/// <reference types="cypress" />

beforeEach(() => {
  cy.viewport(1920, 1080);
  cy.visit("http://localhost:8000/");
  cy.wait(4000);
});

it("search for some user", () => {
  cy.get(".loader").should("have.class", "loader--finished");
  cy.get(".search__input").type("cesar");
  cy.get(".search__button--submit").click();
  cy.wait(2000);
  cy.get(".search__select").should("not.be.disabled");
  cy.get(".search__button--sort").should("not.be.disabled");
  cy.get(".pagination__button--next").should("not.be.disabled");
  cy.get(".pagination__button--prev").should("be.disabled");
  expect(cy.get(".results__list").should("be.visible"));
});
