import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// {
//   //       "id": "66e046c5798c36d31e74ba76",
//   //       "amount": 32.49,
//   //       "discount_amount": 25,
//   //       "provider": "nailzy",
//   //       "code": "WELCOME50"
//   //     }

@Schema({
  collection: 'coupons',
  timestamps: true,
})
export class Coupon {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  discount_amount: number;

  @Prop({ required: true })
  provider: string;

  @Prop({ required: true })
  code: string;
}

export type CouponDocument = Coupon & Document;
export const CouponSchema = SchemaFactory.createForClass(Coupon);
