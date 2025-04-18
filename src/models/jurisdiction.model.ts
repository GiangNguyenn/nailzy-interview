import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// "jurisdictions": {
//   "city": "ROCKWALL",
//   "country": "US",
//   "county": "DALLAS",
//   "state": "TX"
// }

@Schema({ _id: false })
export class Jurisdiction {
  @Prop({ type: String, required: true })
  city: string;

  @Prop({ type: String, required: true })
  country: string;

  @Prop({ type: String, required: true })
  county: string;

  @Prop({ type: String, required: true })
  state: string;
}
export type JurisdictionDocument = Jurisdiction & Document;
export const JurisdictionSchema = SchemaFactory.createForClass(Jurisdiction);
