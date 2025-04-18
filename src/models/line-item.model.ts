import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// {
//   "city_amount": 0.32,
//   "city_tax_rate": 0.01,
//   "city_taxable_amount": 31.99,
//   "combined_tax_rate": 0.0825,
//   "county_amount": 0,
//   "county_tax_rate": 0,
//   "county_taxable_amount": 0,
//   "id": "67736c3af79f891bea22feef",
//   "special_district_amount": 0.32,
//   "special_district_taxable_amount": 31.99,
//   "special_tax_rate": 0.01,
//   "state_amount": 2,
//   "state_sales_tax_rate": 0.0625,
//   "state_taxable_amount": 31.99,
//   "tax_collectable": 2.64,
//   "taxable_amount": 31.99
// }
@Schema({
  collection: 'line_items',
  timestamps: true,
})
export class LineItem {
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
  id: string;

  @Prop({ required: true })
  special_district_amount: number;

  @Prop({ required: true })
  special_district_taxable_amount: number;

  @Prop({ required: true })
  special_tax_rate: number;

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

export type LineItemDocument = LineItem & Document;
export const LineItemSchema = SchemaFactory.createForClass(LineItem);
