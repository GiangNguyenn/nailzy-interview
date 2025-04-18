import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { LineItem, LineItemSchema } from './line-item.model';
import { Shipping, ShippingSchema } from './shipping.model';

@Schema()
export class Breakdown {
  @Prop() city_tax_collectable: number;
  @Prop() city_tax_rate: number;
  @Prop() city_taxable_amount: number;
  @Prop() combined_tax_rate: number;
  @Prop() county_tax_collectable: number;
  @Prop() county_tax_rate: number;
  @Prop() county_taxable_amount: number;

  @Prop({ type: [LineItemSchema] })
  @ValidateNested({ each: true })
  @Type(() => LineItem)
  line_items: LineItem[];

  @Prop({ type: ShippingSchema })
  @ValidateNested()
  @Type(() => Shipping)
  shipping: Shipping;

  @Prop() special_district_tax_collectable: number;
  @Prop() special_district_taxable_amount: number;
  @Prop() special_tax_rate: number;
  @Prop() state_tax_collectable: number;
  @Prop() state_tax_rate: number;
  @Prop() state_taxable_amount: number;
  @Prop() tax_collectable: number;
  @Prop() taxable_amount: number;
}

export const BreakdownSchema = SchemaFactory.createForClass(Breakdown);
