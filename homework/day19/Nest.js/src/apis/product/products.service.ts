import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import {
  IProductsServiceCreate,
  IProductsServiceFindOne,
  IProductServiceUpdate,
  IProductServiceCheckUpdate,
} from './interfaces/products-service.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({ where: { productId: productId } });
  }

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  create({ createProductInput }: IProductsServiceCreate): Promise<Product> {
    const result = this.productsRepository.save({
      ...createProductInput,
    });
    return result;
  }

  async update({
    productId,
    updateProductInput,
  }: IProductServiceUpdate): Promise<Product> {
    const product = await this.findOne({ productId });
    this.checkUpdate({ product });
    const result = this.productsRepository.save({
      ...product,
      ...updateProductInput,
    });
    return result;
  }

  checkUpdate({ product }: IProductServiceCheckUpdate): void {
    if (product.premiumCheck) {
      throw new UnprocessableEntityException('판매 불가 상품입니다.');
    }
  }
}
