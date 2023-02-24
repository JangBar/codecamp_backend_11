// products.service.ts

import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import {
  ICategoriesServiceDelete,
  ICategoriesServiceCreate,
  ICategoriesServiceFindOne,
  ICategoriesServiceCheckSoldout,
  ICreateProductServiceFindOne,
} from './interfaces/category-service.interface';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}
  async createProductCategoryfindOne({
    categoryId,
  }: ICreateProductServiceFindOne): Promise<Category> {
    const category = await this.findOne({ id: categoryId });
    this.checkSoldout({ category });
    return this.categoryRepository.findOne({
      where: { id: categoryId },
    });
  }

  findOne({ id }: ICategoriesServiceFindOne): Promise<Category> {
    return this.categoryRepository.findOne({
      where: { id },
    });
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async create({ name }: ICategoriesServiceCreate): Promise<Category> {
    return this.categoryRepository.save({ name });
  }

  async delete({ id }: ICategoriesServiceDelete): Promise<string> {
    const category = await this.findOne({ id });
    this.checkSoldout({ category });

    await this.categoryRepository.delete({ id });

    return '카테고리가 삭제되었습니다';
  }

  checkSoldout({ category }: ICategoriesServiceCheckSoldout): void {
    console.log(category);
    if (category === null)
      throw new UnprocessableEntityException('존재하지 않는 카테고리입니다');
  }
}
