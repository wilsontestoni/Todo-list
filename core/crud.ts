/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
// nodemon(package.json) é uma biblioteca que ajuda no desenvolvimento de sistemas com o Node.js reiniciando automaticamente o servidor.

// Lib do node parar salvar o content no sistema (PESQUISAR MAIS DEPOIS)
// const fs = require("fs"); // CommonJS
import fs from "fs"; // ES6 - Padrão atual
import { v4 as uuid } from "uuid";
const DB_FILE_PATH = "./core/db";

//  

type UUID = string;

interface Todo {
  id: UUID;
  date: string;
  content: string;
  done: boolean;
}

function create(content: string): Todo {
  //Precisamos salvar o content no sistema
  const todo: Todo = {
    id: uuid(),
    date: new Date().toISOString(),
    content: content,
    done: false,
  };

  const todos: Array<Todo> = [...read(), todo];

  fs.writeFileSync(
    DB_FILE_PATH,
    JSON.stringify(
      {
        todos,
      },
      null,
      2
    )
  );

  return todo;
}

export function read(): Array<Todo> {
const dbString = fs.readFileSync(DB_FILE_PATH, "utf-8");
const db = JSON.parse(dbString || "{}");
if (!db.todos) {
  // Fail Fast Validation
  return [];
}
return db.todos;
}

// Partial Todo significa que você vai/pode receber alguma coisa/parte do todo
function update(id: UUID, partialTodo: Partial<Todo>): Todo {
let updatedTodo;
const todos = read();
todos.forEach((currentTodo) => {
  const isToUpdate = currentTodo.id === id;
  if (isToUpdate) {
    // Object.assign sobreescreve o primeiro objeto escolhido pelo segundo objeto escolhido.
    updatedTodo = Object.assign(currentTodo, partialTodo);
  }
});

fs.writeFileSync(
  DB_FILE_PATH,
  JSON.stringify(
    {
      todos,
    },
    null,
    2
  )
);

if (!updatedTodo) {
  throw new Error("Please, provide another id");
}

return updatedTodo;
}

// Função que possívelmente você vera com mais frequência.
function updateContentById(id: UUID, content: string): Todo {
return update(id, {
  content,
});
}

function deleteById(id: UUID) {
const todos = read();

const todosWithOutOne = todos.filter((todo) => {
  if (todo.id === id) {
    return false;
  }
  return true;
});

fs.writeFileSync(
  DB_FILE_PATH,
  JSON.stringify(
    {
      todos: todosWithOutOne,
    },
    null,
    2
  )
);
}

function CLEAR_DB() {
fs.writeFileSync(DB_FILE_PATH, "");
}

// [Simulation]
// CLEAR_DB();
// create("Primeira TODO!");
// const secondTodo = create("Segunda TODO!");
// deleteById(secondTodo.id);
// const thirdTodo = create("Terceira TODO!");
// // Provavelmte você vera mais uma alteração especifica do que essa abaixo
// // update(thirdTodo.id, {
// //   content: "Conteudo da terceira todo alterada",
// //   done: true,
// // });
// // Função de alteração de contéudo mais especifica
// updateContentById(thirdTodo.id, "Atualizado");
// const todos = read();
// console.log(todos);
// console.log(todos.length);
