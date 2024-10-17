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

/**
 * The DateStringType model module.
 * @module fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/DateStringType
 * @version v0
 */
export class DateStringType {
  /**
   * Constructs a new <code>DateStringType</code>.
   * Type containing date in string format
   * @alias module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/DateStringType
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DateStringType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/DateStringType} obj Optional instance to populate.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/DateStringType} The populated <code>DateStringType</code> instance.
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
      obj = obj || new DateStringType();
    }
    return obj;
  }
}

