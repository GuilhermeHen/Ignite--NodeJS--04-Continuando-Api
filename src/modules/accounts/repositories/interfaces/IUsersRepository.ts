import ICreateUserDTO from "./ICreateUserDTO";

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>;
}

export { IUserRepository };
