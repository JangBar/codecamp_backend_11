import { Field, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  @Min(0)
  @Field(() => Int)
  price: number;

  @Min(0)
  @Field(() => Int)
  weight: number;

  @Min(0)
  @Field(() => Int)
  kcal: number;

  @Min(0)
  @Field(() => Int)
  protein: number;

  @Min(0)
  @Field(() => Int)
  fat: number;

  @Min(0)
  @Field(() => Int)
  mg: number;

  @Min(0)
  @Field(() => Int)
  sugar: number;

  @Field(() => Boolean)
  check: boolean;

  @Field(() => Int)
  categoryId: number;

  @Field(() => [String], { nullable: true })
  allergies: string[];
}
