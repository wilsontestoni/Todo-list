import { todoRepository } from "@ui/repository/todo";
import { Todo } from "@ui/schema/todo";

interface todoControllerGetParams {
  page: number;
}

async function get(params: todoControllerGetParams) {
  return todoRepository.get({
    page: params.page,
    limit: 1,
  });
}

function filterTodosByContent<Todo>(
  search: string,
  todos: Array<Todo & { content: string }>
): Todo[] {
  const homeTodos = todos.filter((todo) => {
    const searchNormalized = search.toLowerCase();
    const contentNormalized = todo.content.toLowerCase();
    return contentNormalized.includes(searchNormalized);
  });

  return homeTodos;
}

interface TodoControllerCreateParams {
  content: string;
  onError: () => void;
  onSucess: (todo: Todo) => void;
}
function create({ content, onError, onSucess }: TodoControllerCreateParams) {
  if (!content) {
    onError();
    return;
  }

  // Vai vir do repository
  const todo = {
    id: "12345",
    content,
    date: new Date().toISOString(),
    done: false,
  };

  onSucess(todo);
}

export const todoController = {
  get,
  filterTodosByContent,
  create,
};
