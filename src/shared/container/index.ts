import { container } from "tsyringe";

import UsersRepository from "../../modules/accounts/repositories/implementations/UserRepository";
import { IUserRepository } from "../../modules/accounts/repositories/interfaces/IUsersRepository";
import CategoriesRepository from "../../modules/cars/repositories/implementations/CategoriesRepository";
import SpecificationRepository from "../../modules/cars/repositories/implementations/SpecificationRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/interfaces/ICategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/interfaces/ISpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);
