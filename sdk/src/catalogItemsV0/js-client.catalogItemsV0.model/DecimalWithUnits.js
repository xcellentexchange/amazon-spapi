/*
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items helps you programmatically retrieve item details for items in the catalog.
 *
 * OpenAPI spec version: v0
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

/**
 * The DecimalWithUnits model module.
 * @module catalogItemsV0/js-client.catalogItemsV0.model/DecimalWithUnits
 * @version v0
 */
export class DecimalWithUnits {
  /**
   * Constructs a new <code>DecimalWithUnits</code>.
   * The decimal value and unit.
   * @alias module:catalogItemsV0/js-client.catalogItemsV0.model/DecimalWithUnits
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DecimalWithUnits</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItemsV0/js-client.catalogItemsV0.model/DecimalWithUnits} obj Optional instance to populate.
   * @return {module:catalogItemsV0/js-client.catalogItemsV0.model/DecimalWithUnits} The populated <code>DecimalWithUnits</code> instance.
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
      obj = obj || new DecimalWithUnits();
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
      if (data.hasOwnProperty('Units'))
        obj.units = ApiClient.convertToType(data['Units'], 'String');
    }
    return obj;
  }
}

/**
 * The decimal value.
 * @member {Number} value
 */
DecimalWithUnits.prototype.value = undefined;

/**
 * The unit of the decimal value.
 * @member {String} units
 */
DecimalWithUnits.prototype.units = undefined;

