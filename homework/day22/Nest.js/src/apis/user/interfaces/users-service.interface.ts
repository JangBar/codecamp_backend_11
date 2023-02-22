import { User } from '../entities/user.entity';
import { UpdateUserInput } from '../users/dto/update-user.input';
import { updatePasswordInput } from '../users/dto/update-user.password.input';

export interface IUsersServiceCreate {
  email: string;
  password: string;
  name: string;
  age: number;
  phone: string;
  gender: boolean;
}

export interface IUsersServiceFindOneByEmail {
  email: string;
}

export interface IUserServiceDelete {
  id: string;
}

export interface IUserServiceCheckUpdate {
  user: User;
}

export interface IUserServiceUpdate {
  id: string;
  updateUserInput: UpdateUserInput;
}

export interface IUserloginUpdate {
  id: string;
  password: string;
}

export interface IUserPasswordUpdate {
  id: string;
  updatePasswordInput: updatePasswordInput;
}

export interface IUserOneByUser {
  id: string;
}
