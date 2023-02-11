import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsCategoriesService } from '../category/productsCategories.service';
import { Product } from './entities/product.entity';
import {
  IProductsServiceCreate,
  IProductsServiceFindOne,
  IProductServiceUpdate,
  IProductServiceCheckUpdate,
  IProductsServiceDelete,
} from './interfaces/products-service.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,

    private readonly productsCategoriesService: ProductsCategoriesService,
  ) {}

  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({
      where: { id: productId },
      relations: ['category'],
    });
  }

  findAll(): Promise<Product[]> {
    return this.productsRepository.find({
      relations: ['category'],
    });
  }

  findAllWithDeleted(): Promise<Product[]> {
    return this.productsRepository.find({
      withDeleted: true,
      relations: ['category'],
    });
  }

  async delerestoreProductte({
    productId,
  }: IProductsServiceDelete): Promise<boolean> {
    const result2 = await this.productsRepository.softDelete({
      id: productId,
    });
    return result2.affected ? true : false; //
  }

  // async update({
  //   productId,
  //   updateProductInput,
  // }: IProductServiceUpdate): Promise<Product> {
  //   const product = await this.findOne({ productId });
  //   this.checkUpdate({ product });
  //   const result = this.productsRepository.save({
  //     ...product,
  //     ...updateProductInput,
  //   });
  //   return result;
  // }

  checkUpdate({ product }: IProductServiceCheckUpdate): void {
    // if ('검증할 조건 아직 없음') {
    //   throw new UnprocessableEntityException('판매 불가 상품입니다.');
    // }
    console.log(product, '검증 완료되었습니다.');
  }

  async restore({ productId }: IProductsServiceDelete): Promise<boolean> {
    const result2 = await this.productsRepository.restore({
      id: productId,
    });
    return result2.affected ? true : false; //
  }

  async delete({ productId }: IProductsServiceDelete): Promise<boolean> {
    const result2 = await this.productsRepository.softDelete({
      id: productId,
    });
    return result2.affected ? true : false; //
  }

  async create({
    createProductInput,
  }: IProductsServiceCreate): Promise<Product> {
    const { productCategory, ...Product } = createProductInput;

    const findCategory = await this.productsCategoriesService.findOne({
      productCategory,
    });

    const result = await this.productsRepository.save({
      ...Product,
      category: findCategory,
    });
    return result;
  }
}
