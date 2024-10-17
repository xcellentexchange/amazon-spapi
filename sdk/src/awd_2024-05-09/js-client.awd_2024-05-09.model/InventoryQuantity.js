/*
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory. 
 *
 * OpenAPI spec version: 2024-05-09
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.29
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {InventoryUnitOfMeasurement} from './InventoryUnitOfMeasurement.js';

/**
 * The InventoryQuantity model module.
 * @module awd_2024-05-09/js-client.awd_2024-05-09.model/InventoryQuantity
 * @version 2024-05-09
 */
export class InventoryQuantity {
  /**
   * Constructs a new <code>InventoryQuantity</code>.
   * Quantity of inventory with an associated measurement unit context.
   * @alias module:awd_2024-05-09/js-client.awd_2024-05-09.model/InventoryQuantity
   * @class
   * @param quantity {Number} Quantity of the respective inventory.
   * @param unitOfMeasurement {module:awd_2024-05-09/js-client.awd_2024-05-09.model/InventoryUnitOfMeasurement} Unit of measurement for the inventory.
   */
  constructor(quantity, unitOfMeasurement) {
    this.quantity = quantity;
    this.unitOfMeasurement = unitOfMeasurement;
  }

  /**
   * Constructs a <code>InventoryQuantity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:awd_2024-05-09/js-client.awd_2024-05-09.model/InventoryQuantity} obj Optional instance to populate.
   * @return {module:awd_2024-05-09/js-client.awd_2024-05-09.model/InventoryQuantity} The populated <code>InventoryQuantity</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      switch(typeof data) {
        case 'string':
          obj = String(data);
          break;
        case 'number':
          obj = Number(data);
          break;
        case 'boolean':
          obj = Boolean(data);
          break;
      }
      obj = obj || new InventoryQuantity();
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('unitOfMeasurement'))
        obj.unitOfMeasurement = InventoryUnitOfMeasurement.constructFromObject(data['unitOfMeasurement']);
    }
    return obj;
  }
}

/**
 * Quantity of the respective inventory.
 * @member {Number} quantity
 */
InventoryQuantity.prototype.quantity = undefined;

/**
 * Unit of measurement for the inventory.
 * @member {module:awd_2024-05-09/js-client.awd_2024-05-09.model/InventoryUnitOfMeasurement} unitOfMeasurement
 */
InventoryQuantity.prototype.unitOfMeasurement = undefined;

