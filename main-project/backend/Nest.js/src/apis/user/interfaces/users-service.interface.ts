import { User } from '../entities/user.entity';
import { UpdateUserInput } from '../users/dto/update-user.input';
import { updatePasswordInput } from '../users/dto/update-user.password.input';

export interface IUsersServiceCreate {
  userEmail: string;
  userPassword: string;
  userName: string;
  userAge: number;
  userPhone: string;
  userGender: boolean;
}

export interface IUsersServiceFindOneByEmail {
  userEmail: string;
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
  userPassword: string;
}

export interface IUserPasswordUpdate {
  id: string;
  updatePasswordInput: updatePasswordInput;
}

export interface IUserOneByUser {
  id: string;
}
