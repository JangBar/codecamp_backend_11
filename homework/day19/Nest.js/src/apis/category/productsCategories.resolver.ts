import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Category } from './entities/category.entity';
import { ProductsCategoriesService } from './productsCategories.service';

@Resolver()
export class ProductsCategoriesResolver {
  constructor(
    private readonly productsCategoriesService: ProductsCategoriesService, //
  ) {}

  @Mutation(() => Category)
  createProductCategory(
    @Args('categoryName') categoryName: string, //
  ): Promise<Category> {
    return this.productsCategoriesService.create({ categoryName });
  }
}
