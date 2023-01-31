// boards.resolver.ts

import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { Starbucks } from '../boards/entities/fetchStarbucks.entity';
import { FetchStarbucksService } from './fetchStarbucks.service';
import { CreateBoardInput } from '../boards/dto/create-fetchStarbucks.input';

@Resolver()
export class FetchStarbucksResolver {
  constructor(private readonly fetchStarbucksService: FetchStarbucksService) {}

  @Query(() => [Starbucks], { nullable: true })
  LookupFetchStarbucks(): Starbucks[] {
    return this.fetchStarbucksService.findAll();
  }

  @Mutation(() => String)
  createFetchStarbucks(
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ): string {
    return this.fetchStarbucksService.create({ createBoardInput });
  }
}
