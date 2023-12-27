const BASE_URL = "http://localhost:3000";

describe("/ - todos feed", () => {
  it("when load, render the page", () => {
    cy.visit(BASE_URL);
  });
  it("When create a new todo, it must appears in the screen", () => {
    // 0 - Interceptação
    cy.intercept("POST", `${BASE_URL}/api/todos`, (request) => {
      request.reply({
        statusCode: 201,
        body: {
          todo: {
            id: "4fa19787-23e4-44e6-b053-e61484fb16a9",
            date: "2023-12-27T19:36:28.027Z",
            content: "Testando pra valer parte 01",
            done: false,
          },
        },
      });
    }).as("createUser");

    // 1 - Abrir a página do site
    cy.visit(BASE_URL);
    // 2 e 3 - Selecionar o input e Digitar algo no input
    const inputAddTodo = "input[name='add-todo']";
    cy.get(inputAddTodo).type("Testando pra valer parte 01");

    // 4 - Clicar no botão de submit
    const btnAddTodo = "[aria-label='Adicionar novo item']";
    cy.get(btnAddTodo).click();

    // 5 - Checar se o novo  elemento apareceu na tela
    cy.get("table > tbody").contains("Testando pra valer parte 01");

    // Criar validações a partir de valores
    expect("texto").to.be.equal("texto");
  });
});
