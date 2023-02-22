import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import {
  ICategoriesServiceCreate,
  ICategoriesServiceFindOne,
} from './interfaces/categories-service.interface';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoriesRepository: Repository<Category>,
  ) {}

  findOne({ category }: ICategoriesServiceFindOne): Promise<Category> {
    return this.categoriesRepository.findOne({
      where: { id: category },
    });
  }

  create({ name }: ICategoriesServiceCreate): Promise<Category> {
    return this.categoriesRepository.save({ name });
  }
}
