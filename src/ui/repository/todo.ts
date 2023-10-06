interface todoRepositoryGetParams {
  page: number;
  limit: number;
}

interface todoRepositoryGetOutput {
  todos: Todo[];
  total: number;
  pages: number;
}

function get({
  page,
  limit,
}: todoRepositoryGetParams): Promise<todoRepositoryGetOutput> {
  return fetch("/api/todos").then(async (todoss) => {
    const todosEmString = await todoss.text();
    const todosFromServer = JSON.parse(todosEmString).todos;

    const ALL_TODOS = todosFromServer;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedTodos = ALL_TODOS.slice(startIndex, endIndex);
    const totalPages = Math.ceil(ALL_TODOS.length / limit);

    return {
      todos: ALL_TODOS,
      total: ALL_TODOS.length,
      pages: totalPages,
    };
  });
}

export const todoRepository = {
  get,
};

interface Todo {
  id: string;
  content: string;
  date: Date;
  done: boolean;
}
