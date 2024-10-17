/*
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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
 * The OrderItemsInner model module.
 * @module ordersV0/js-client.ordersV0.model/OrderItemsInner
 * @version v0
 */
export class OrderItemsInner {
  /**
   * Constructs a new <code>OrderItemsInner</code>.
   * @alias module:ordersV0/js-client.ordersV0.model/OrderItemsInner
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OrderItemsInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ordersV0/js-client.ordersV0.model/OrderItemsInner} obj Optional instance to populate.
   * @return {module:ordersV0/js-client.ordersV0.model/OrderItemsInner} The populated <code>OrderItemsInner</code> instance.
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
      obj = obj || new OrderItemsInner();
      if (data.hasOwnProperty('orderItemId'))
        obj.orderItemId = ApiClient.convertToType(data['orderItemId'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
    }
    return obj;
  }
}

/**
 * The order item's unique identifier.
 * @member {String} orderItemId
 */
OrderItemsInner.prototype.orderItemId = undefined;

/**
 * The quantity for which to update the shipment status.
 * @member {Number} quantity
 */
OrderItemsInner.prototype.quantity = undefined;

