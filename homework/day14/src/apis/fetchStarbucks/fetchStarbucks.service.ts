// boards.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class fetchStarbucksService {
  fetchStarbucks(): string {
    return '스타벅스 커피 목록을 조회합니다 ☕️';
  }
}
