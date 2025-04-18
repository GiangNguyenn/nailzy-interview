import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// "shipping_rate": {
//       "_id": {
//         "$oid": "66ccb98e7309d93d11732247"
//       },
//       "name": "Free Shipping",
//       "amount": 0,
//       "estimated_days": 4,
//       "conditions": {
//         "is_turn_on": false,
//         "type": "order_price",
//         "min_price": 120,
//         "max_price": 10000,
//         "_id": {
//           "$oid": "6708132c87952301f32f988c"
//         }
//       },
//       "status": "active",
//       "created_on": 1724692878,
//       "updated_on": 1728582444,
//       "__v": 0,
//       "is_free_ship": true,
//       "id": {
//         "$oid": "66ccb98e7309d93d11732247"
//       },
//       "servicelevel_name": "Free Shipping",
//       "is_flat_rate": true,
//       "provider": "nailzy"
//     },

@Schema({
  collection: 'shipping_rates',
  timestamps: true,
})
export class ShippingRate {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  estimated_days: number;

  @Prop({ required: true, type: Object })
  conditions: any;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  created_on: number;

  @Prop({ required: true })
  updated_on: number;

  @Prop({ required: true })
  is_free_ship: boolean;

  @Prop({ required: true })
  servicelevel_name: string;

  @Prop({ required: true })
  is_flat_rate: boolean;

  @Prop({ required: true })
  provider: string;
}
