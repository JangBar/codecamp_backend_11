import { Request, Response } from 'express';
import { User } from 'src/apis/user/entities/user.entity';
import { IAuthUser, IContext } from 'src/commons/interfaces/context';
import { IOAuthUser } from '../auth.controller';

export interface IAuthServiceLogin {
  email: string;
  password: string;
  res: IContext['res'];
}
export interface IAuthServiceGetAccessToken {
  user: User | IAuthUser['user'];
}

export interface IAuthServiceSetRefreshToken {
  user: User;
  res: IContext['res'];
}

export interface IAuthServiceRestoreAccessToken {
  user: IAuthUser['user'];
}

export interface IAuthServiceSocialLogin {
  req: Request & IOAuthUser;
  res: Response;
}
