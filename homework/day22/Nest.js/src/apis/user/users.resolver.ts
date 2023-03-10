import { UseGuards } from '@nestjs/common';
import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthAccessGuard } from '../auth/guards/gql-auth.guard';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UpdateUserInput } from './users/dto/update-user.input';
import { IContext } from '../../commons/interfaces/context';
import { updatePasswordInput } from './users/dto/update-user.password.input';

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

  @Query(() => User)
  fetchUser(
    @Args('email') email: string, //
  ): Promise<User> {
    return this.usersService.findOneByEmail({ email });
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
    @Args('password') password: string,
  ): Promise<User> {
    console.log('==================');
    console.log(context);
    console.log('==================');
    const id = context.req.user.id;
    return this.usersService.loginupdate({ id, password });
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
    // ?????? ?????? ????????????
    console.log('================');
    console.log(context.req.user);
    console.log('================');
    return '????????? ?????????????????????.';
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
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Args('phone') phone: string,
    @Args('gender') gender: boolean,
    @Args({ name: 'age', type: () => Int }) age: number,
  ): Promise<User> {
    return this.usersService.create({
      email,
      password,
      name,
      age,
      phone,
      gender,
    });
  }
}
