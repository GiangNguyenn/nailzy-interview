import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({})
export class Shipping {
  @Prop({ required: true })
  city_amount: number;

  @Prop({ required: true })
  city_tax_rate: number;

  @Prop({ required: true })
  city_taxable_amount: number;

  @Prop({ required: true })
  combined_tax_rate: number;

  @Prop({ required: true })
  county_amount: number;

  @Prop({ required: true })
  county_tax_rate: number;

  @Prop({ required: true })
  county_taxable_amount: number;

  @Prop({ required: true })
  special_district_amount: number;

  @Prop({ required: true })
  special_tax_rate: number;

  @Prop({ required: true })
  special_taxable_amount: number;

  @Prop({ required: true })
  state_amount: number;

  @Prop({ required: true })
  state_sales_tax_rate: number;

  @Prop({ required: true })
  state_taxable_amount: number;

  @Prop({ required: true })
  tax_collectable: number;

  @Prop({ required: true })
  taxable_amount: number;
}

export const ShippingSchema = SchemaFactory.createForClass(Shipping);
