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
import {CurrencyCode} from './CurrencyCode.js';

/**
 * The Amount model module.
 * @module fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Amount
 * @version v0
 */
export class Amount {
  /**
   * Constructs a new <code>Amount</code>.
   * The monetary value.
   * @alias module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Amount
   * @class
   * @param currencyCode {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/CurrencyCode} 
   * @param value {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/BigDecimalType} The amount.
   */
  constructor(currencyCode, value) {
    this.currencyCode = currencyCode;
    this.value = value;
  }

  /**
   * Constructs a <code>Amount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Amount} obj Optional instance to populate.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Amount} The populated <code>Amount</code> instance.
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
      obj = obj || new Amount();
      if (data.hasOwnProperty('CurrencyCode'))
        obj.currencyCode = CurrencyCode.constructFromObject(data['CurrencyCode']);
      if (data.hasOwnProperty('Value'))
        obj.value = BigDecimalType.constructFromObject(data['Value']);
    }
    return obj;
  }
}

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/CurrencyCode} currencyCode
 */
Amount.prototype.currencyCode = undefined;

/**
 * The amount.
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/BigDecimalType} value
 */
Amount.prototype.value = undefined;

