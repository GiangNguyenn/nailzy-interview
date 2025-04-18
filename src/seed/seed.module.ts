import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { OrdersService } from 'src/orders/orders.service';
import { OrdersModule } from 'src/orders/orders.module';

@Module({
  imports: [OrdersModule],
  providers: [SeedService, OrdersService],
})
export class SeedModule {}
