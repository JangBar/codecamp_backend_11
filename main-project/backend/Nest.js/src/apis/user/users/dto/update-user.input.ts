import { InputType, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './creat-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {}
