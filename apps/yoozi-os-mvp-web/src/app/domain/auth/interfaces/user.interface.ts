import { eUserStatus } from '../enums/user-status.enum';

export interface iUser {
  id: number;
  name: string;
  email: string;
  status: eUserStatus;
  createdAt: string;
  updatedAt: string;
}
