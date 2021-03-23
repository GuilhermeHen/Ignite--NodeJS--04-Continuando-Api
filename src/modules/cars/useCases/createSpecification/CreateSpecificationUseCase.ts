import { inject, injectable } from "tsyringe";

import { ISpecificationRepository } from "../../repositories/interfaces/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExist = this.specificationRepository.findByName(
      name
    );

    if (specificationAlreadyExist) {
      throw new Error("Specification already exists.");
    }

    this.specificationRepository.create({ name, description });
  }
}

export default CreateSpecificationUseCase;
