import { Injectable } from '@angular/core';
import { BaseApi } from '@shared/apis/base.api';
import { iPrice } from '../interfaces/price.interface';

@Injectable({
  providedIn: 'root',
})
export class PricesApi extends BaseApi<iPrice> {
  constructor() {
    super('prices');
  }

  //   async getAll() {}
}
