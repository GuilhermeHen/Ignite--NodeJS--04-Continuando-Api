import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../repositories/interfaces/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    try {
      const user = await this.userRepository.findByEmail(email);

      console.log("user findByEmail:>> ", user);
      console.log("password :>> ", password);

      if (!user) {
        throw new AppError("Email or Passworld incorrect!", 401);
      }

      const passwordMatch = await compare(password, user.password);

      console.log("passwordMatch :>> ", passwordMatch);

      if (!passwordMatch) {
        throw new AppError("Email or Passworld incorrect!", 401);
      }

      const token = sign({}, "a7e071b3de48cec1dd24de6cbe6c7bf1", {
        subject: user.id,
        expiresIn: "1d",
      });

      console.log("token :>> ", token);

      const tokenReturn: IResponse = {
        token,
        user: {
          name: user.name,
          email: user.email,
        },
      };

      return tokenReturn;
    } catch (err) {
      return err.message;
    }
  }
}

export default AuthenticateUserUseCase;
