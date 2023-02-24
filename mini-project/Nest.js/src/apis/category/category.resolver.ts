// products.resolver.ts

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';

@Resolver()
export class CategoryResolver {
  constructor(
    private readonly categoryService: CategoryService, //
  ) {}

  // 카테고리 하나만 조회
  @Query(() => Category)
  fetchCategory(@Args('id') id: number): Promise<Category> {
    return this.categoryService.findOne({ id });
  }

  // 카테고리 모두 조회
  @Query(() => [Category])
  fetchCategorys(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  // 카테고리 등록
  @Mutation(() => Category)
  createCategory(@Args('name') name: string): Promise<Category> {
    return this.categoryService.create({ name });
  }

  // 카테고리 물리삭제
  @Mutation(() => String)
  async deleteCategory(
    @Args('id') id: number, //
  ): Promise<string> {
    return await this.categoryService.delete({ id });
  }
}
