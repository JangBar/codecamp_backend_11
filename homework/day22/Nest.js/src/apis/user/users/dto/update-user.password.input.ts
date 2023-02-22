import { InputType, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './creat-user.input';

@InputType()
export class updatePasswordInput extends PartialType(CreateUserInput) {}
