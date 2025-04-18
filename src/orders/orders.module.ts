import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from 'src/models/order.model';
import { orderModel } from './orders.provider';
import { DatabaseModule } from 'src/database.module';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService, ...orderModel],
  exports: [OrdersService, MongooseModule, ...orderModel],
})
export class OrdersModule {}
