import { IAuthUser } from 'src/commons/interfaces/context';

export interface IPaymentCreate {
  impUid: string;
  amount: number;
  user: IAuthUser['user'];
}
