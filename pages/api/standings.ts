import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch("http://api.cup2022.ir/api/v1/standings", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzgxZjJkN2Y5YzMyYjNmNjM0YjMxMTIiLCJpYXQiOjE2Njk0NjA2OTYsImV4cCI6MTY2OTU0NzA5Nn0.J-sxxxOLYi80SY6ACUWS1S5SPivWOwtgQYoXd9lW3aQ",
    },
  });
  const data = await response.json();

  res.status(200).json(data);
}
