// products.resolver.ts

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/products.entity';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService, //
  ) {}

  // 상품 하나 조회
  @Query(() => Product)
  fetchProduct(@Args('id') id: string): Promise<Product> {
    return this.productsService.findOne({ id });
  }

  // 상품 모두 조회
  @Query(() => [Product])
  fetchProducts(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  // 삭제 상품 까지 모두 조회
  @Query(() => [Product])
  fetchProductsWithDeleted(): Promise<Product[]> {
    return this.productsService.findAllWithDeleted();
  }

  // 상품 등록
  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<Product> {
    return this.productsService.create({ createProductInput });
  }

  // 상품 정보 수정
  @Mutation(() => Product)
  async updateProduct(
    @Args('id') id: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    return this.productsService.update({ id, updateProductInput });
  }

  // 상품 논리삭제
  @Mutation(() => Boolean)
  deleteProduct(
    @Args('name') name: string, //
  ): Promise<boolean> {
    return this.productsService.delete({ name });
  }

  // 삭제 되었던 상품 복구
  @Mutation(() => Boolean)
  restoreProduct(
    @Args('id') id: string, //
  ): Promise<boolean> {
    return this.productsService.restore({ id });
  }
}
