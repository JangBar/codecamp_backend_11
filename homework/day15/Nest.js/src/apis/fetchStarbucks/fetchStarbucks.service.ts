// boards.service.ts

import { Injectable, Scope } from '@nestjs/common';
import { Starbucks } from '../boards/entities/fetchStarbucks.entity';
import { IBoardsServiceCreate } from '../boards/interfaces/fetchStarbucks-service.interface';

@Injectable({ scope: Scope.DEFAULT })
export class FetchStarbucksService {
  findAll(): Starbucks[] {
    const result = [
      {
        name: '아메리카노',
        price: 10,
        kcal: 10,
        fat: 10,
        protein: 10,
        salt: 10,
        sugar: 10,
        caffeine: 10,
      },
      {
        name: '에스프레소',
        price: 20,
        kcal: 20,
        fat: 20,
        protein: 20,
        salt: 20,
        sugar: 20,
        caffeine: 20,
      },
      {
        name: '카페라떼',
        price: 30,
        kcal: 30,
        fat: 30,
        protein: 30,
        salt: 30,
        sugar: 30,
        caffeine: 30,
      },
      {
        name: '카푸치노',
        price: 40,
        kcal: 40,
        fat: 40,
        protein: 40,
        salt: 40,
        sugar: 40,
        caffeine: 40,
      },
      {
        name: '카페모카',
        price: 50,
        kcal: 50,
        fat: 50,
        protein: 50,
        salt: 50,
        sugar: 50,
        caffeine: 50,
      },
    ];
    return result;
  }

  create({ createBoardInput }: IBoardsServiceCreate): string {
    // 1. 브라우저에서 보내준 데이터 확인하기
    // console.log(createBoardInput.name);
    // console.log(createBoardInput.price);
    // console.log(createBoardInput.kcal);
    // console.log(createBoardInput.fat);
    // console.log(createBoardInput.protein);
    // console.log(createBoardInput.salt);
    // console.log(createBoardInput.sugar);
    // console.log(createBoardInput.caffeine);
    console.log({ createBoardInput });

    // 2. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
    //

    // 3. DB에 저장이 잘 됐으면, 결과를 브라우저에 응답(response) 주기
    return '게시물 등록에 성공하였습니다!!';
  }
}
