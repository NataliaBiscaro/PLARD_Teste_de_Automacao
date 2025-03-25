Feature: Busca, adição e verificação de produto no carrinho

  Scenario: Buscar um produto, adicioná-lo ao carrinho e verificar se foi adicionado
    Given o usuário acessa o site
    When o usuário busca o produto "HP H2310 IN-EAR HEADSET"
    And o usuário seleciona o produto desejado
    And o usuário adiciona o produto ao carrinho
    And o usuário clica no carrinho de compras
    Then o produto selecionado deve estar no carrinho
