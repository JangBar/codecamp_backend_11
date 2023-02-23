// users.service.ts

import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import {
  IUserloginUpdate,
  IUsersServiceCreate,
  IUsersServiceDelete,
  IUsersServiceFindOne,
  IUsersServiceFindOneByEmail,
  IUsersServiceUpdate,
} from './interfaces/users-service.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  findOne({ id }: IUsersServiceFindOne): Promise<User> {
    return this.usersRepository.findOne({
      where: { id },
    });
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  findAllWithDeleted(): Promise<User[]> {
    return this.usersRepository.find({
      withDeleted: true,
    });
  }

  findOneByEmail({ email }: IUsersServiceFindOneByEmail) {
    return this.usersRepository.findOne({ where: { email } });
  }

  async create({
    email,
    password,
    name,
    phone,
  }: IUsersServiceCreate): Promise<User> {
    const user = await this.findOneByEmail({ email });
    if (user) throw new ConflictException('이미 등록된 이메일입니다.');
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.usersRepository.save({
      email,
      password: hashedPassword,
      name,
      phone,
    });
  }

  async update({ id, updateUserInput }: IUsersServiceUpdate): Promise<User> {
    const user = await this.findOne({ id });

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const result = this.usersRepository.save({
      ...user,
      ...updateUserInput,
      password: hashedPassword,
    });
    return result;
  }

  async loginupdate({ id, password }: IUserloginUpdate): Promise<User> {
    const user = await this.findOne({ id });
    const hashPw = await bcrypt.hash(password, 10);

    return this.usersRepository.save({
      ...user,
      password: hashPw,
    });
  }

  async delete({ id }: IUsersServiceDelete): Promise<boolean> {
    const result = await this.usersRepository.softDelete({ id });
    return result.affected ? true : false; //
  }

  async restore({ id }: IUsersServiceDelete): Promise<boolean> {
    const result2 = await this.usersRepository.restore({
      id,
    });
    return result2.affected ? true : false; //
  }
}
