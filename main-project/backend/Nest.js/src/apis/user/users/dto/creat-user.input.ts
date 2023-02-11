import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  userName: string;

  @Field(() => String)
  userPassword: string;

  @Field(() => String)
  userEmail: string;

  @Field(() => String)
  userPhone: string;

  @Field(() => Int)
  userAge: number;

  @Field(() => Boolean)
  userGender: boolean;
}
