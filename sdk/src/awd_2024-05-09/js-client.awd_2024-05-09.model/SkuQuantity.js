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
import {InventoryQuantity} from './InventoryQuantity.js';

/**
 * The SkuQuantity model module.
 * @module awd_2024-05-09/js-client.awd_2024-05-09.model/SkuQuantity
 * @version 2024-05-09
 */
export class SkuQuantity {
  /**
   * Constructs a new <code>SkuQuantity</code>.
   * Quantity details for a SKU as part of a shipment
   * @alias module:awd_2024-05-09/js-client.awd_2024-05-09.model/SkuQuantity
   * @class
   * @param expectedQuantity {module:awd_2024-05-09/js-client.awd_2024-05-09.model/InventoryQuantity} 
   * @param sku {String} The merchant stock keeping unit
   */
  constructor(expectedQuantity, sku) {
    this.expectedQuantity = expectedQuantity;
    this.sku = sku;
  }

  /**
   * Constructs a <code>SkuQuantity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:awd_2024-05-09/js-client.awd_2024-05-09.model/SkuQuantity} obj Optional instance to populate.
   * @return {module:awd_2024-05-09/js-client.awd_2024-05-09.model/SkuQuantity} The populated <code>SkuQuantity</code> instance.
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
      obj = obj || new SkuQuantity();
      if (data.hasOwnProperty('expectedQuantity'))
        obj.expectedQuantity = InventoryQuantity.constructFromObject(data['expectedQuantity']);
      if (data.hasOwnProperty('receivedQuantity'))
        obj.receivedQuantity = InventoryQuantity.constructFromObject(data['receivedQuantity']);
      if (data.hasOwnProperty('sku'))
        obj.sku = ApiClient.convertToType(data['sku'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:awd_2024-05-09/js-client.awd_2024-05-09.model/InventoryQuantity} expectedQuantity
 */
SkuQuantity.prototype.expectedQuantity = undefined;

/**
 * @member {module:awd_2024-05-09/js-client.awd_2024-05-09.model/InventoryQuantity} receivedQuantity
 */
SkuQuantity.prototype.receivedQuantity = undefined;

/**
 * The merchant stock keeping unit
 * @member {String} sku
 */
SkuQuantity.prototype.sku = undefined;


