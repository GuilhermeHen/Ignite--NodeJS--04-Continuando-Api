import { getRepository, Repository } from "typeorm";

import User from "../../entities/User";
import ICreateUserDTO from "../interfaces/ICreateUserDTO";
import { IUserRepository } from "../interfaces/IUsersRepository";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
    });

    await this.repository.save(user);
  }
}

export default UserRepository;
