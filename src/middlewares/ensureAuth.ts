import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import UserRepository from "../modules/accounts/repositories/implementations/UserRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuth(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new Error("Token missing");
    } else {
      const [, token] = authHeader.split(" ");

      const { sub: user_id } = verify(
        token,
        "a7e071b3de48cec1dd24de6cbe6c7bf1"
      ) as IPayload;

      const usersRepository = new UserRepository();
      const user = usersRepository.findById(user_id);

      if (!user) {
        throw new Error("User does not exists!");
      }

      next();
    }
  } catch (err) {
    throw new Error("Invalid token!");
  }
}
