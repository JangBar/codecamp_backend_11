// products.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryService } from '../category/category.service';
import { Product } from './entities/products.entity';
import {
  IProductsServiceCreate,
  IProductsServiceDelete1,
  IProductsServiceDelete2,
  IProductsServiceFindOne,
  IProductsServiceUpdate,
} from './interfaces/products-service.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,

    private readonly categoriesService: CategoryService,
  ) {}

  findOne({ id }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({
      where: { id },
      relations: ['category'],
    });
  }

  findAll(): Promise<Product[]> {
    return this.productsRepository.find({ relations: ['category'] });
  }

  findAllWithDeleted(): Promise<Product[]> {
    return this.productsRepository.find({
      withDeleted: true,
      relations: ['category'],
    });
  }

  async create({
    createProductInput,
  }: IProductsServiceCreate): Promise<Product> {
    const { categoryId, ...Product } = createProductInput;

    const findCategory =
      await this.categoriesService.createProductCategoryfindOne({
        categoryId,
      });

    const result = await this.productsRepository.save({
      ...Product,
      category: findCategory,
    });
    return result;
  }

  async update({
    id,
    updateProductInput,
  }: IProductsServiceUpdate): Promise<Product> {
    const product = await this.findOne({ id });

    const result = this.productsRepository.save({
      ...product,
      ...updateProductInput,
    });
    return result;
  }

  async delete({ name }: IProductsServiceDelete1): Promise<boolean> {
    const result = await this.productsRepository.softDelete({ name });
    return result.affected ? true : false; //
  }

  async restore({ id }: IProductsServiceDelete2): Promise<boolean> {
    const result2 = await this.productsRepository.restore({
      id,
    });
    return result2.affected ? true : false; //
  }
}
