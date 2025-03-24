import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = "https://advantageonlineshopping.com/#/";

Given("O usuário acessa o site", function () {
  cy.visit(baseUrl);
  cy.url().should("include", "/#/");
});

When("o usuário busca o produto {string}", (produto) => {
  cy.get("#mobileSearch").click().type(produto).type("{enter}");
  cy.get(
    '[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > li.ng-scope'
  ).click();
  cy.get('button[name="save_to_cart"]').click();
});

/*When("seleciona o produto desejado", () => {
  // Essa etapa já está incluída no passo anterior (clicando no autocomplete)
});

When("adiciona o produto ao carrinho", () => {
  cy.get("button[name='save_to_cart']").click(); // clica no botão de adicionar ao carrinho
});

Then("o produto deve aparecer no carrinho", () => {
  cy.get("#shoppingCart").click(); // abre o carrinho
  cy.get(".productName").should("exist"); // verifica se o produto está visível
});*/
