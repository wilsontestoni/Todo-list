import { todoRepository } from "@ui/repository/todo";

interface todoControllerGetParams {
  page: number;
}

async function get(params: todoControllerGetParams) {
  return todoRepository.get({
    page: params.page,
    limit: 1,
  });
}

export const todoController = {
  get,
};
