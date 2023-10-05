import { NextApiRequest, NextApiResponse } from "next";
import { todo } from "@server/controller/todo";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "GET") {
    todo.get(request, response);
    return;
  }

  response.status(405).json({
    message: "Method not allowed",
  });
}
