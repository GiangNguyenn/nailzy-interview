import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Coupon } from './coupon.model';
import { TaxInformation } from './tax-information.model';
import { ShippingRate } from './shipping-rate.model';

// "pricing": {
//   "items_total": 64.98,
//   "items_discount": 0,
//   "sub_total": 64.98,
//   "total": 45.34,
//   "affiliate_discount": 0,
//   "shipping": 0,
//   "shipping_rate": {
//     "_id": {
//       "$oid": "66ccb98e7309d93d11732247"
//     },
//     "name": "Free Shipping",
//     "amount": 0,
//     "estimated_days": 4,
//     "conditions": {
//       "is_turn_on": false,
//       "type": "order_price",
//       "min_price": 120,
//       "max_price": 10000,
//       "_id": {
//         "$oid": "6708132c87952301f32f988c"
//       }
//     },
//     "status": "active",
//     "created_on": 1724692878,
//     "updated_on": 1728582444,
//     "__v": 0,
//     "is_free_ship": true,
//     "id": {
//       "$oid": "66ccb98e7309d93d11732247"
//     },
//     "servicelevel_name": "Free Shipping",
//     "is_flat_rate": true,
//     "provider": "nailzy"
//   },
//   "sales_tax": 5.36,
//   "sales_tax_rates": 0.0825,
//   "coupons": [
//     {
//       "id": "66e046c5798c36d31e74ba76",
//       "amount": 32.49,
//       "discount_amount": 25,
//       "provider": "nailzy",
//       "code": "WELCOME50"
//     }
//   ],
//   "coupon_discount_amount": 25,
//   "tax_information": {
//     "amount_to_collect": 5.36,
//     "breakdown": {
//       "city_tax_collectable": 0.65,
//       "city_tax_rate": 0.01,
//       "city_taxable_amount": 64.98,
//       "combined_tax_rate": 0.0825,
//       "county_tax_collectable": 0,
//       "county_tax_rate": 0,
//       "county_taxable_amount": 0,
//       "line_items": [
//         {
//           "city_amount": 0.32,
//           "city_tax_rate": 0.01,
//           "city_taxable_amount": 31.99,
//           "combined_tax_rate": 0.0825,
//           "county_amount": 0,
//           "county_tax_rate": 0,
//           "county_taxable_amount": 0,
//           "id": "67736c3af79f891bea22feef",
//           "special_district_amount": 0.32,
//           "special_district_taxable_amount": 31.99,
//           "special_tax_rate": 0.01,
//           "state_amount": 2,
//           "state_sales_tax_rate": 0.0625,
//           "state_taxable_amount": 31.99,
//           "tax_collectable": 2.64,
//           "taxable_amount": 31.99
//         },
//         {
//           "city_amount": 0.33,
//           "city_tax_rate": 0.01,
//           "city_taxable_amount": 32.99,
//           "combined_tax_rate": 0.0825,
//           "county_amount": 0,
//           "county_tax_rate": 0,
//           "county_taxable_amount": 0,
//           "id": "67736c6cf79f891bea2305f7",
//           "special_district_amount": 0.33,
//           "special_district_taxable_amount": 32.99,
//           "special_tax_rate": 0.01,
//           "state_amount": 2.06,
//           "state_sales_tax_rate": 0.0625,
//           "state_taxable_amount": 32.99,
//           "tax_collectable": 2.72,
//           "taxable_amount": 32.99
//         }
//       ],
//       "shipping": {
//         "city_amount": 0,
//         "city_tax_rate": 0.01,
//         "city_taxable_amount": 0,
//         "combined_tax_rate": 0.0825,
//         "county_amount": 0,
//         "county_tax_rate": 0,
//         "county_taxable_amount": 0,
//         "special_district_amount": 0,
//         "special_tax_rate": 0.01,
//         "special_taxable_amount": 0,
//         "state_amount": 0,
//         "state_sales_tax_rate": 0.0625,
//         "state_taxable_amount": 0,
//         "tax_collectable": 0,
//         "taxable_amount": 0
//       },
//       "special_district_tax_collectable": 0.65,
//       "special_district_taxable_amount": 64.98,
//       "special_tax_rate": 0.01,
//       "state_tax_collectable": 4.06,
//       "state_tax_rate": 0.0625,
//       "state_taxable_amount": 64.98,
//       "tax_collectable": 5.36,
//       "taxable_amount": 64.98
//     },
//     "freight_taxable": true,
//     "has_nexus": true,
//     "jurisdictions": {
//       "city": "ROCKWALL",
//       "country": "US",
//       "county": "DALLAS",
//       "state": "TX"
//     },
//     "order_total_amount": 64.98,
//     "rate": 0.0725,
//     "shipping": 0,
//     "tax_source": "origin",
//     "taxable_amount": 64.98
//   }
// }

@Schema({ _id: false })
export class Pricing {
  @Prop({ type: Number, required: true })
  items_total: number;

  @Prop({ type: Number, required: true })
  items_discount: number;

  @Prop({ type: Number, required: true })
  sub_total: number;

  @Prop({ type: Number, required: true })
  total: number;

  @Prop({ type: Number, required: true })
  affiliate_discount: number;

  @Prop({ type: Number, required: true })
  shipping: number;

  @Prop({ type: Object, required: true })
  shipping_rate: ShippingRate;

  @Prop({ type: Number, required: true })
  sales_tax: number;

  @Prop({ type: Number, required: true })
  sales_tax_rates: number;

  @Prop({ type: Array, required: true })
  coupons?: Coupon[];

  @Prop({ type: Number, required: true })
  coupon_discount_amount?: number;

  @Prop({ type: Object, required: true })
  tax_information?: TaxInformation;
}

export type PricingDocument = Pricing & Document;
export const PricingSchema = SchemaFactory.createForClass(Pricing);
