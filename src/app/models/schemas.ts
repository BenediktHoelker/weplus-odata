import { schema } from 'normalizr';

export const filterSchema = new schema.Entity('filters');
export const yardSchema = new schema.Entity('yards');
export const yardDeliverySchema = new schema.Entity('yardDeliveries');
export const deviationTypeSchema = new schema.Entity('deviationTypes');
export const customerSchema = new schema.Entity('customers');
export const materialPositionSchema = new schema.Entity('materialPositions');

export const deviationSchema = new schema.Entity('deviations', {
  type: deviationTypeSchema
});

export const deliverySchema = new schema.Entity('deliveries');
// export const deliverySchema = new schema.Entity('deliveries', {
//   deviations: [deviationSchema],
//   materialPositions: [materialPositionSchema],
//   customer: customerSchema
// });

// deliverySchema.define({
//   yardDeliveries: [yardDeliverySchema]
// });