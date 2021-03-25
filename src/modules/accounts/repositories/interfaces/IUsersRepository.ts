import User from "../../entities/User";
import ICreateUserDTO from "./ICreateUserDTO";

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUserRepository };
