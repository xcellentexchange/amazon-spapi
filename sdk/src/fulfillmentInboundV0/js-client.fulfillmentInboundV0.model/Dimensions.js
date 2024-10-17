/*
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
import {BigDecimalType} from './BigDecimalType.js';
import {UnitOfMeasurement} from './UnitOfMeasurement.js';

/**
 * The Dimensions model module.
 * @module fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Dimensions
 * @version v0
 */
export class Dimensions {
  /**
   * Constructs a new <code>Dimensions</code>.
   * The dimension values and unit of measurement.
   * @alias module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Dimensions
   * @class
   * @param length {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/BigDecimalType} The length dimension.
   * @param width {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/BigDecimalType} The width dimension.
   * @param height {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/BigDecimalType} The height dimension.
   * @param unit {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/UnitOfMeasurement} The unit of measurement for the dimensions.
   */
  constructor(length, width, height, unit) {
    this.length = length;
    this.width = width;
    this.height = height;
    this.unit = unit;
  }

  /**
   * Constructs a <code>Dimensions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Dimensions} obj Optional instance to populate.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Dimensions} The populated <code>Dimensions</code> instance.
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
      obj = obj || new Dimensions();
      if (data.hasOwnProperty('Length'))
        obj.length = BigDecimalType.constructFromObject(data['Length']);
      if (data.hasOwnProperty('Width'))
        obj.width = BigDecimalType.constructFromObject(data['Width']);
      if (data.hasOwnProperty('Height'))
        obj.height = BigDecimalType.constructFromObject(data['Height']);
      if (data.hasOwnProperty('Unit'))
        obj.unit = UnitOfMeasurement.constructFromObject(data['Unit']);
    }
    return obj;
  }
}

/**
 * The length dimension.
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/BigDecimalType} length
 */
Dimensions.prototype.length = undefined;

/**
 * The width dimension.
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/BigDecimalType} width
 */
Dimensions.prototype.width = undefined;

/**
 * The height dimension.
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/BigDecimalType} height
 */
Dimensions.prototype.height = undefined;

/**
 * The unit of measurement for the dimensions.
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/UnitOfMeasurement} unit
 */
Dimensions.prototype.unit = undefined;


