import { Injectable } from '@nestjs/common';
import { OrdersService } from 'src/orders/orders.service';

@Injectable()
export class ReportsService {
  constructor(private readonly ordersService: OrdersService) {}

  async getSalesTax() {
    const orders = await this.ordersService.findAll();

    const salesTax: {
      [key: string]: {
        city: string;
        county: string;
        state: string;
        country: string;
        rate: number;
        amount_to_collect: number;
      };
    } = {};

    for (const order of orders) {
      if (!order.pricing.tax_information?.jurisdictions) {
        continue;
      }

      const jurisdiction = order.pricing.tax_information.jurisdictions;
      const taxRate = order.pricing.tax_information.rate;
      const amountToCollect = order.pricing.tax_information.amount_to_collect;

      const jurisdictionKey = [
        jurisdiction.county,
        jurisdiction.city,
        jurisdiction.state,
        jurisdiction.country,
      ].join('-');

      if (!salesTax[jurisdictionKey]) {
        salesTax[jurisdictionKey] = {
          city: jurisdiction.city,
          county: jurisdiction.county,
          state: jurisdiction.state,
          country: jurisdiction.country,
          rate: taxRate,
          amount_to_collect: amountToCollect,
        };
      } else {
        salesTax[jurisdictionKey].amount_to_collect += amountToCollect;
      }
    }

    return Object.values(salesTax);
  }
}
