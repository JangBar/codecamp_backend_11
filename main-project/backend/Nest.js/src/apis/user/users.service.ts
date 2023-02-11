import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import {
  IUserloginUpdate,
  IUserOneByUser,
  IUserPasswordUpdate,
  IUserServiceCheckUpdate,
  IUserServiceDelete,
  IUserServiceUpdate,
  IUsersServiceCreate,
  IUsersServiceFindOneByEmail,
} from './interfaces/users-service.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async userdelete({ id }: IUserServiceDelete): Promise<boolean> {
    const result2 = await this.usersRepository.softDelete({
      id,
    });
    return result2.affected ? true : false; //
  }

  findOneByEmail({ userEmail }: IUsersServiceFindOneByEmail): Promise<User> {
    return this.usersRepository.findOne({ where: { userEmail } });
  }

  findOneByUser({ id }: IUserOneByUser): Promise<User> {
    return this.usersRepository.findOne({ where: { id } });
  }

  findAllWithDeleted(): Promise<User[]> {
    return this.usersRepository.find({
      withDeleted: true,
    });
  }

  async restore({ id }: IUserServiceDelete): Promise<boolean> {
    const result2 = await this.usersRepository.restore({
      id,
    });
    return result2.affected ? true : false; //
  }

  async update({ id, updateUserInput }: IUserServiceUpdate): Promise<User> {
    const user = await this.findOneByUser({ id });

    if (!user) throw new ConflictException('없는 회원');
    return this.usersRepository.save({
      ...user,
      ...updateUserInput,
    });
  }

  async loginupdate({ id, userPassword }: IUserloginUpdate): Promise<User> {
    const user = await this.findOneByUser({ id });
    const hashPw = await bcrypt.hash(userPassword, 10);

    if (!user) throw new ConflictException('없는 회원');
    return this.usersRepository.save({
      ...user,
      userPassword: hashPw,
    });
  }

  checkUpdate({ user }: IUserServiceCheckUpdate): void {
    // if ('검증할 조건 아직 없음') {
    //   throw new UnprocessableEntityException('판매 불가 상품입니다.');
    // }
    console.log(user, '검증 완료되었습니다.');
  }

  async create({
    userEmail,
    userPassword,
    userName,
    userAge,
    userGender,
    userPhone,
  }: IUsersServiceCreate): Promise<User> {
    const user = await this.findOneByEmail({ userEmail });
    if (user) throw new ConflictException('이미 등록된 이메일입니다.');

    const hashedPassword = await bcrypt.hash(userPassword, 10);
    return this.usersRepository.save({
      userEmail,
      userPassword: hashedPassword,
      userName,
      userAge,
      userGender,
      userPhone,
    });
  }
}
