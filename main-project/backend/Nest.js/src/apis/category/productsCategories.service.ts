import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import {
  IProductsCategoriesServiceCreate,
  IProductsCategoriesServiceFindOne,
} from './interfaces/products-categories-service.interface';

@Injectable()
export class ProductsCategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly productsCategoriesRepository: Repository<Category>,
  ) {}

  findOne({
    productCategory,
  }: IProductsCategoriesServiceFindOne): Promise<Category> {
    return this.productsCategoriesRepository.findOne({
      where: { id: productCategory },
    });
  }

  create({
    categoryName,
  }: IProductsCategoriesServiceCreate): Promise<Category> {
    return this.productsCategoriesRepository.save({ categoryName });
  }
}
