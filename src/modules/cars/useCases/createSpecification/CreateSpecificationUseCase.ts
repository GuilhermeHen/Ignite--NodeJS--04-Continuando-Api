import { inject, injectable } from "tsyringe";

import { ISpecificationRepository } from "../../repositories/interfaces/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExist = await this.specificationRepository.findByName(
      name
    );

    if (specificationAlreadyExist) {
      throw new Error("Specification already exists.");
    }

    await this.specificationRepository.create({ name, description });
  }
}

export default CreateSpecificationUseCase;
