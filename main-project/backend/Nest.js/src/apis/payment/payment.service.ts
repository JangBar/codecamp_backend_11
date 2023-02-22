import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Payment, PAYMENT_ENUM } from './entities/payment.entity';
import { IPaymentCreate } from './interfaces/payment-service.interface';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create({
    impUid,
    amount,
    user: _user,
  }: IPaymentCreate): Promise<Payment> {
    // this.pointsTransactionsRepository.create(); // 등록을 위한 빈 객체 만들기
    // this.pointsTransactionsRepository.insert(); // 결과는 못 받는 등록 방법
    // this.pointsTransactionsRepository.update(); // 결과는 못 받는 수정 방법

    // 1. PointTransaction 테이블에 거래기록 1줄 생성
    const payment = this.paymentRepository.create({
      impUid,
      amount,
      user: _user,
      status: PAYMENT_ENUM.PAYMENT,
    });
    await this.paymentRepository.save(payment);

    // 2. 유저의 돈 찾아오기
    const user = await this.usersRepository.findOne({
      where: { id: _user.id },
    });

    // 3. 유저의 돈 업데이트
    await this.usersRepository.update(
      { id: _user.id },
      { amount: user.amount },
    );

    // 4. 최종결과 브라우저에 돌려주기
    return payment;
  }
}
