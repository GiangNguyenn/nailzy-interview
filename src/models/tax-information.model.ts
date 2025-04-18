import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Document } from 'mongoose';
import { Breakdown, BreakdownSchema } from './breakdown.model';
import { Jurisdiction, JurisdictionSchema } from './jurisdiction.model';

@Schema({ _id: false }) // Use _id: false if it's embedded, change if standalone
export class TaxInformation {
  @Prop() amount_to_collect: number;

  @Prop({ type: BreakdownSchema })
  @ValidateNested()
  @Type(() => Breakdown)
  breakdown: Breakdown;

  @Prop() freight_taxable: boolean;
  @Prop() has_nexus: boolean;

  @Prop({ type: JurisdictionSchema })
  @ValidateNested()
  @Type(() => Jurisdiction)
  jurisdictions: Jurisdiction;

  @Prop() order_total_amount: number;
  @Prop() rate: number;
  @Prop() shipping: number;
  @Prop() tax_source: string;
  @Prop() taxable_amount: number;
}

export type TaxInformationDocument = TaxInformation & Document;
export const TaxInformationSchema =
  SchemaFactory.createForClass(TaxInformation);
