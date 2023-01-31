// boards.resolver.ts

import { Query, Resolver } from '@nestjs/graphql';
import { fetchStarbucksService } from './fetchStarbucks.service';

@Resolver()
export class fetchStarbucksResolver {
  constructor(private readonly boardsService: fetchStarbucksService) {}

  @Query(() => String, { nullable: true })
  fetchStarbucks(): string {
    return this.boardsService.fetchStarbucks();
  }
}
