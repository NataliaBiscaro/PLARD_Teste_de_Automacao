import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = "https://advantageonlineshopping.com/#/";

Given("o usuário acessa o site", function () {
  cy.visit(baseUrl);
  cy.url().should("include", "/#/");
});

When("o usuário busca o produto {string}", (produto) => {
  cy.get("#mobileSearch").click().type(produto).type("{enter}");
});

When("o usuário seleciona o produto desejado", () => {
  cy.get(
    '[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > li.ng-scope'
  ).click();
});

When("o usuário adiciona o produto ao carrinho", () => {
  cy.get('button[name="save_to_cart"]').click();
});
When("o usuário clica no carrinho de compras", () => {
  cy.get("#shoppingCartLink").click();
});

Then("o produto selecionado deve estar no carrinho", () => {
  cy.get("label.productName").should("contain.text", "HP H2310 IN-EAR HEADSET");
});
