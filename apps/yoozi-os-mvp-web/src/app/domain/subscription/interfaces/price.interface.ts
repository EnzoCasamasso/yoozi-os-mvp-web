export interface iPrice {
  id: string;
  currency: string;
  description: string;
  interval: string;
  interval_count: number;
  product_id: string;
  trial_period_days: number;
  type: string;
  unit_amount: number;
  metadata: object;
}
