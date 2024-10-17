/*
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.   **Note:** If you are new to the Amazon Shipping API, refer to the latest version of <a href=\"https://developer-docs.amazon.com/amazon-shipping/docs/shipping-api-v2-reference\">Amazon Shipping API (v2)</a> on the <a href=\"https://developer-docs.amazon.com/amazon-shipping/\">Amazon Shipping Developer Documentation</a> site.
 *
 * OpenAPI spec version: v1
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
import {Currency} from './Currency.js';
import {ServiceType} from './ServiceType.js';
import {ShippingPromiseSet} from './ShippingPromiseSet.js';
import {Weight} from './Weight.js';

/**
 * The ServiceRate model module.
 * @module shipping/js-client.shipping.model/ServiceRate
 * @version v1
 */
export class ServiceRate {
  /**
   * Constructs a new <code>ServiceRate</code>.
   * The specific rate for a shipping service, or null if no service available.
   * @alias module:shipping/js-client.shipping.model/ServiceRate
   * @class
   * @param totalCharge {module:shipping/js-client.shipping.model/Currency} The total charge that will be billed for the rate.
   * @param billableWeight {module:shipping/js-client.shipping.model/Weight} The weight that was used to calculate the totalCharge.
   * @param serviceType {module:shipping/js-client.shipping.model/ServiceType} 
   * @param promise {module:shipping/js-client.shipping.model/ShippingPromiseSet} 
   */
  constructor(totalCharge, billableWeight, serviceType, promise) {
    this.totalCharge = totalCharge;
    this.billableWeight = billableWeight;
    this.serviceType = serviceType;
    this.promise = promise;
  }

  /**
   * Constructs a <code>ServiceRate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping/js-client.shipping.model/ServiceRate} obj Optional instance to populate.
   * @return {module:shipping/js-client.shipping.model/ServiceRate} The populated <code>ServiceRate</code> instance.
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
      obj = obj || new ServiceRate();
      if (data.hasOwnProperty('totalCharge'))
        obj.totalCharge = Currency.constructFromObject(data['totalCharge']);
      if (data.hasOwnProperty('billableWeight'))
        obj.billableWeight = Weight.constructFromObject(data['billableWeight']);
      if (data.hasOwnProperty('serviceType'))
        obj.serviceType = ServiceType.constructFromObject(data['serviceType']);
      if (data.hasOwnProperty('promise'))
        obj.promise = ShippingPromiseSet.constructFromObject(data['promise']);
    }
    return obj;
  }
}

/**
 * The total charge that will be billed for the rate.
 * @member {module:shipping/js-client.shipping.model/Currency} totalCharge
 */
ServiceRate.prototype.totalCharge = undefined;

/**
 * The weight that was used to calculate the totalCharge.
 * @member {module:shipping/js-client.shipping.model/Weight} billableWeight
 */
ServiceRate.prototype.billableWeight = undefined;

/**
 * @member {module:shipping/js-client.shipping.model/ServiceType} serviceType
 */
ServiceRate.prototype.serviceType = undefined;

/**
 * @member {module:shipping/js-client.shipping.model/ShippingPromiseSet} promise
 */
ServiceRate.prototype.promise = undefined;

