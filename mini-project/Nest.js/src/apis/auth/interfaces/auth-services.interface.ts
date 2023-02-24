import { User } from 'src/apis/user/entities/user.entity';

export interface IAuthServiceLogin {
  email: string;
  password: string;
}
export interface IAuthServiceGetAccessToken {
  user: User;
}
