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
import {TimeRange} from './TimeRange.js';

/**
 * The ShippingPromiseSet model module.
 * @module shipping/js-client.shipping.model/ShippingPromiseSet
 * @version v1
 */
export class ShippingPromiseSet {
  /**
   * Constructs a new <code>ShippingPromiseSet</code>.
   * The promised delivery time and pickup time.
   * @alias module:shipping/js-client.shipping.model/ShippingPromiseSet
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ShippingPromiseSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping/js-client.shipping.model/ShippingPromiseSet} obj Optional instance to populate.
   * @return {module:shipping/js-client.shipping.model/ShippingPromiseSet} The populated <code>ShippingPromiseSet</code> instance.
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
      obj = obj || new ShippingPromiseSet();
      if (data.hasOwnProperty('deliveryWindow'))
        obj.deliveryWindow = TimeRange.constructFromObject(data['deliveryWindow']);
      if (data.hasOwnProperty('receiveWindow'))
        obj.receiveWindow = TimeRange.constructFromObject(data['receiveWindow']);
    }
    return obj;
  }
}

/**
 * The time window in which the shipment will be delivered.
 * @member {module:shipping/js-client.shipping.model/TimeRange} deliveryWindow
 */
ShippingPromiseSet.prototype.deliveryWindow = undefined;

/**
 * The time window in which Amazon Shipping will pick up the shipment.
 * @member {module:shipping/js-client.shipping.model/TimeRange} receiveWindow
 */
ShippingPromiseSet.prototype.receiveWindow = undefined;

