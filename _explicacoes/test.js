// Praticar com o QuokkaJS
// Algoritmo de Paginação
const page = 2;
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
const endIndex = page * limit;
const paginatedTodos = ALL_TODOS.slice(startIndex, endIndex);
const totalPages = Math.ceil(ALL_TODOS.length / limit);

console.log(startIndex);
console.log(endIndex)
console.log(paginatedTodos)
console.log(ALL_TODOS.length)
console.log(totalPages);
