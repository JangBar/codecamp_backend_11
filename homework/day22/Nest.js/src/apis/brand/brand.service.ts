import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';
import { IBrandServiceCreate } from './interface/brand-service.interface';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  create({ brandName }: IBrandServiceCreate): Promise<Brand> {
    return this.brandRepository.save({ brandName });
  }
}
