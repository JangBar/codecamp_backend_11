import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Allergy } from './entities/product_allergy.entity';
import {
  IProductAllergiesServiceBulkInsert,
  IProductAllergiesServiceFindBynames,
} from './interfaces/allergies-service.interface';

@Injectable()
export class ProductsAllergiesService {
  constructor(
    @InjectRepository(Allergy)
    private readonly productAllergiesRepository: Repository<Allergy>,
  ) {}

  findByNames({ allergies }: IProductAllergiesServiceFindBynames) {
    return this.productAllergiesRepository.find({
      where: { name: In(allergies) },
    });
  }

  bulkInsert({ names }: IProductAllergiesServiceBulkInsert) {
    console.log(names);
    return this.productAllergiesRepository.insert(names);
  }
}
