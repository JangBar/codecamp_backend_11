import { UpdateUserInput } from '../dto/update-user.input';

export interface IUsersServiceCreate {
  email: string;
  password: string;
  name: string;
  phone: string;
}

export interface IUsersServiceFindOneByEmail {
  email: string;
}

export interface IUsersServiceFindOne {
  id: string;
}

export interface IUsersServiceUpdate {
  id: string;
  updateUserInput: UpdateUserInput;
}

export interface IUsersServiceDelete {
  id: string;
}
