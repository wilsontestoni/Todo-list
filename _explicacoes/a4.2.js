// Praticar com o QuokkaJS
// Algoritmo de Paginação
const page = 1;
const limit = 3;
const ALL_TODOS = [
  {
    content: "Primeira TODO",
  },
  {
    content: "Segunda TODO!",
  },
  {
    content: "Terceira!",
  },
  {
    content: "Quarta!",
  },
];

const startIndex = (page - 1) * limit;
console.log(startIndex);

const endIndex = page * limit;
console.log(endIndex);

const paginatedTodos = ALL_TODOS.slice(startIndex, endIndex);
console.log(paginatedTodos);

const totalPages = Math.ceil(ALL_TODOS.length / limit);
console.log(totalPages);
