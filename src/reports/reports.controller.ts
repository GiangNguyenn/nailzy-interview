import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { OrdersService } from 'src/orders/orders.service';

@Controller('reports')
export class ReportsController {
  constructor(
    private readonly reportsService: ReportsService,
    private readonly orderService: OrdersService,
  ) {}

  @Get('sales-tax')
  findAll() {
    return this.reportsService.getSalesTax();
  }
}
