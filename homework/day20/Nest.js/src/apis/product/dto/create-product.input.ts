import { Field, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  productName: string;

  @Min(0)
  @Field(() => Int)
  productPrice: number;

  @Min(0)
  @Field(() => Int)
  productWeight: number;

  @Min(0)
  @Field(() => Int)
  productKcal: number;

  @Min(0)
  @Field(() => Int)
  productProtein: number;

  @Min(0)
  @Field(() => Int)
  productFat: number;

  @Min(0)
  @Field(() => Int)
  productMg: number;

  @Min(0)
  @Field(() => Int)
  productSugar: number;

  @Field(() => Boolean)
  premiumCheck: boolean;

  @Field(() => String)
  productCategoryId: string;

  // @Field(() => [String])
  // productBrands: string[];

  // @Field(() => [String])
  // productAllegies: string[];
}
