import { UseGuards } from '@nestjs/common';
import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthAccessGuard } from '../auth/guards/gql-auth.guard';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UpdateUserInput } from './users/dto/update-user.input';
import { IContext } from '../../commons/interfaces/context';
import { GqlAuthGuard } from '../auth/gql-auth.guard';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  @Query(() => [User])
  fetchUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @UseGuards(GqlAuthAccessGuard)
  @Query(() => User)
  fetchLoginUser(
    @Context() context: IContext, //
  ): Promise<User> {
    const id = context.req.user.id;
    return this.usersService.findOneByUser({ id });
  }

  @UseGuards(GqlAuthGuard('access')) // 수정
  @Query(() => String)
  fetchUser(
    @Context() context: IContext, //
  ): string {
    // 유저 정보 꺼내오기
    console.log('================');
    console.log(context.req.user);
    console.log('================');
    return '인가에 성공하였습니다.';
  }

  @Query(() => [User])
  fetchUserWithDeleted(): Promise<User[]> {
    return this.usersService.findAllWithDeleted();
  }

  @Mutation(() => Boolean)
  userdelete(
    @Args('id') id: string, //
  ): Promise<boolean> {
    return this.usersService.userdelete({ id });
  }

  @Mutation(() => User)
  updateUser(
    @Args('id') id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.usersService.update({ id, updateUserInput });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => User)
  updateUserPwd(
    @Context() context: IContext,
    @Args('userPassword') userPassword: string,
  ): Promise<User> {
    console.log('==================');
    console.log(context);
    console.log('==================');
    const id = context.req.user.id;
    return this.usersService.loginupdate({ id, userPassword });
  }

  @Mutation(() => Boolean)
  restoreUser(
    @Args('id') id: string, //
  ): Promise<boolean> {
    return this.usersService.restore({ id });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Query(() => String)
  fetchUserCheck(
    @Context() context: IContext, //
  ): string {
    // 유저 정보 꺼내오기
    console.log('================');
    console.log(context.req.user);
    console.log('================');
    return '인가에 성공하였습니다.';
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => Boolean)
  loginUserDelete(
    @Context() context: IContext, //
  ): Promise<boolean> {
    const id = context.req.user.id;
    return this.usersService.userdelete({ id });
  }

  @Mutation(() => User)
  createUser(
    @Args('email') userEmail: string,
    @Args('password') userPassword: string,
    @Args('name') userName: string,
    @Args('phone') userPhone: string,
    @Args('gender') userGender: boolean,
    @Args({ name: 'age', type: () => Int }) userAge: number,
  ): Promise<User> {
    return this.usersService.create({
      userEmail,
      userPassword,
      userName,
      userAge,
      userPhone,
      userGender,
    });
  }
}
