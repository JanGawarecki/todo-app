describe("todo App", () => {
  it("should allow to enter text", () => {
    cy.visit("/");
    cy.get("#todo").type("learn cypress").should("have.value", "learn cypress");
  });

  it("should add li elements", () => {
    cy.visit("/");
    cy.get("#todo").type("learn cypress");

    cy.get("#add").click();

    cy.get("#todo-list").get("li").should("have.length", 1);
  });
});

describe("todo App", () => {
  it("should allow to click checkbox", () => {
    cy.visit("/");
    cy.get("#todo").type("learn cypress");

    cy.get("#add").click();

    cy.get("#todo-list").get("li").should("have.length", 1);

    cy.get("[data-cy='todo-item']").click().should("have.checked", true);
  });
});

describe("todo App", () => {
  it.only("should allow to remove item", () => {
    cy.visit("/");
    cy.get("#todo").type("learn cypress");

    cy.get("#add").click();

    cy.get("#todo-list").get("li").should("have.length", 1);

    cy.get("[data-cy='todo-item']").click().should("have.checked", true);

    cy.get("#remove").click();

    cy.get("#todo-list").get("li").should("have.length", 0);
  });
});
