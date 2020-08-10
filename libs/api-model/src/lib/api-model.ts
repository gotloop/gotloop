import { JsonConvert, OperationMode, ValueCheckingMode } from 'json2typescript';

export const JSON_CONVERTER = new JsonConvert(
  OperationMode.ENABLE,
  ValueCheckingMode.DISALLOW_NULL,
  /**ignorePrimitiveChecks */ false,
);
