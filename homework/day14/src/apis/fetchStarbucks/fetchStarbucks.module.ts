// boards.module.ts

import { Module } from '@nestjs/common';
import { fetchStarbucksResolver } from './fetchStarbucks.resolver';
import { fetchStarbucksService } from './fetchStarbucks.service';

@Module({
  providers: [fetchStarbucksResolver, fetchStarbucksService],
})
export class fetchStarbucksModule {}
