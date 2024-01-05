import { todoController } from "@server/controller/todo";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  // eslint-disable-next-line no-console

  if (request.method === "PUT") {
    await todoController.toggleDone(request, response);
    return;
  }

  response.status(405).json({
    error: {
      message: "Method not allowed",
    },
  });

  // console.log(request.headers);
  // response.status(200).json({ message: "Toggle DONE!" });
}
