// boards.module.ts

import { Module } from '@nestjs/common';
import { FetchStarbucksResolver } from './fetchStarbucks.resolver.js';
import { FetchStarbucksService } from './fetchStarbucks.service.js';

@Module({
  imports: [],
  providers: [FetchStarbucksResolver, FetchStarbucksService],
})
export class fetchStarbucksModule {}
