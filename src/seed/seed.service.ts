import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
// import { CreateSeedDto } from './dto/create-seed.dto';
// import { UpdateSeedDto } from './dto/update-seed.dto';
import * as fs from 'fs';
import { OrdersService } from 'src/orders/orders.service';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
  // inject ordersService
  constructor(private readonly ordersService: OrdersService) {}
  onApplicationBootstrap() {
    // console.log('App bootstrap complete, now migrating data...');
    this.migrate();
  }

  migrate() {
    const orderData = fs.readFileSync(
      '/Users/thanhlongb/projects_yang/nailzy-interview/nailzy-backend/src/sample_orders.json',
      'utf-8',
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const orders = JSON.parse(orderData);

    this.ordersService.create(orders);
  }
}
