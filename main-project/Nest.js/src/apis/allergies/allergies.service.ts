import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Allergy } from './entities/allergy.entity';

import {
  IAllergiesServiceBulkInsert,
  IAllergiesServiceFindBynames,
} from './interfaces/allergies-service.interface';

@Injectable()
export class AllergiesService {
  constructor(
    @InjectRepository(Allergy)
    private readonly allergiesRepository: Repository<Allergy>,
  ) {}

  async findByNames({ allergies }: IAllergiesServiceFindBynames) {
    return await this.allergiesRepository.find({
      where: { name: In(allergies) },
    });
  }

  bulkInsert({ names }: IAllergiesServiceBulkInsert) {
    return this.allergiesRepository.insert([...names]);
  }
}
