import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Category } from './entities/category.entity';
import { CategoriesService } from './categories.service';

@Resolver()
export class CategoriesResolver {
  constructor(
    private readonly categoriesService: CategoriesService, //
  ) {}

  @Mutation(() => Category)
  createCategory(
    @Args('name') name: string, //
  ): Promise<Category> {
    return this.categoriesService.create({ name });
  }
}
