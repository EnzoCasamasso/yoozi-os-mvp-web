import { iBase } from '@shared/interfaces/base.interface';

export interface iUserCompany extends iBase {
  id: string;
  user_id: string;
  company_id: string;
  // roles: eUserRoles;
}

//It can be changed; I don't know if it's correct;
enum eUserRoles {
  GRATIS = 'gratis',
  ESSENCIAL = 'essnencial',
  PRO = 'pro',
  EMPESARIAL = 'empresarial',
}
