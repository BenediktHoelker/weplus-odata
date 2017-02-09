import { schema } from 'normalizr';

export const filterSchema = new schema.Entity('filters');
export const yardSchema = new schema.Entity('yards');
export const yardDeliverySchema = new schema.Entity('yardDeliveries');
export const deviationTypeSchema = new schema.Entity('deviationTypes');

export const deviationSchema = new schema.Entity('deviations', {
  type: deviationTypeSchema
});

export const deliverySchema = new schema.Entity('deliveries', {
  deviations: [deviationSchema],
  yardDeliveries: [yardDeliverySchema]
});
