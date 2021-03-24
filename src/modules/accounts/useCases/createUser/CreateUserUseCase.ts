import { inject, injectable } from "tsyringe";

import ICreateUserDTO from "../../repositories/interfaces/ICreateUserDTO";
import { IUserRepository } from "../../repositories/interfaces/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      email,
      password,
      driver_license,
    });
  }
}

export default CreateUserUseCase;
