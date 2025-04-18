import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Type } from 'class-transformer';
import { Pricing, PricingSchema } from './pricing.model';

@Schema({
  collection: 'orders',
  timestamps: false,
})
export class Order {
  @Prop({ required: true }) order_status: string;
  @Prop({ required: true }) payment_status: string;
  @Prop({ required: true }) payment_method: string;

  @Prop({ type: PricingSchema })
  @Type(() => Pricing)
  pricing: Pricing;

  @Prop() timezone: string;
  @Prop() source_from: string;
  @Prop() created_on: number;
  @Prop() updated_on: number;
  @Prop() code: string;
}

export type OrderDocument = Order & Document;
export const OrderSchema = SchemaFactory.createForClass(Order);
