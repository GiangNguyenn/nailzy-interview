import { Connection } from 'mongoose';
import { OrderSchema } from 'src/models/order.model';

export const orderModel = [
  {
    provide: 'ORDER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Orders', OrderSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
