export async function GET(request: Request) {
  // eslint-disable-next-line no-console
  return new Response(JSON.stringify({ message: "Olá mundo!" }), {
    status: 200,
  });
}

// page

// import { NextApiRequest, NextApiResponse } from "next";

// export default function handler(
//   request: NextApiRequest,
//   response: NextApiResponse
// ) {
//   // eslint-disable-next-line no-console
//   console.log(request.headers);
//   response.status(200).json({ message: "Olá mundo!" });
// }
