import { Inject, Injectable } from '@nestjs/common';
// import { CreateOrderDto } from './dto/create-order.dto';
// import { UpdateOrderDto } from './dto/update-order.dto';
import { Model } from 'mongoose';
import { OrderDocument } from 'src/models/order.model';

@Injectable()
export class OrdersService {
  [x: string]: any;
  constructor(
    @Inject('ORDER_MODEL')
    private orderModel: Model<OrderDocument>,
  ) {}
  // bulk create orders
  create(orders: object[]) {
    return this.orderModel.insertMany(orders);
  }

  findAll() {
    return this.orderModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
