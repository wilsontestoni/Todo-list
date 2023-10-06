import { todoRepository } from "@ui/repository/todo";

interface todoControllerGetParams {
  page?: number;
}

async function get(params: todoControllerGetParams = {}) {
  console.log(params);
  return todoRepository.get({
    page: 1,
    limit: 1,
  });
}

export const todoController = {
  get,
};
