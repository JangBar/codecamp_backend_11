// users.resolver.ts

import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { IContext } from 'src/commons/interfaces/context';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  @Query(() => User)
  fetchUser(@Args('id') id: string): Promise<User> {
    return this.usersService.findOne({ id });
  }

  @UseGuards(GqlAuthGuard('access'))
  @Query(() => User)
  fetchLoginUser(
    @Context() context: IContext, //
  ): Promise<User> {
    const id = context.req.user.id;
    return this.usersService.findOne({ id });
  }

  @Query(() => [User])
  fetchUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }
  @Query(() => [User])
  fetchProductsWithDeleted(): Promise<User[]> {
    return this.usersService.findAllWithDeleted();
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.usersService.update({ id, updateUserInput });
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => User)
  updateUserPwd(
    @Context() context: IContext,
    @Args('password') password: string,
  ): Promise<User> {
    const id = context.req.user.id;
    return this.usersService.loginupdate({ id, password });
  }

  @Mutation(() => Boolean)
  deleteUser(
    @Context() context: IContext, //
  ): Promise<boolean> {
    const id = context.req.user.id;
    return this.usersService.delete({ id });
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Boolean)
  deleteLoginUser(
    @Args('id') id: string, //
  ): Promise<boolean> {
    return this.usersService.delete({ id });
  }

  @Mutation(() => Boolean)
  restoreUser(
    @Args('id') id: string, //
  ): Promise<boolean> {
    return this.usersService.restore({ id });
  }

  @Mutation(() => User)
  async createUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Args('phone') phone: string,
  ): Promise<User> {
    return this.usersService.create({
      email,
      password,
      name,
      phone,
    });
  }
}
