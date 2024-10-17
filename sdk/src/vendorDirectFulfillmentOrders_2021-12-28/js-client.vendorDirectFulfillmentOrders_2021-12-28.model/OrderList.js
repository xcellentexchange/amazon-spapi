/*
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
 *
 * OpenAPI spec version: 2021-12-28
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
import {Order} from './Order.js';
import {Pagination} from './Pagination.js';

/**
 * The OrderList model module.
 * @module vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/OrderList
 * @version 2021-12-28
 */
export class OrderList {
  /**
   * Constructs a new <code>OrderList</code>.
   * A list of purchase orders.
   * @alias module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/OrderList
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OrderList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/OrderList} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/OrderList} The populated <code>OrderList</code> instance.
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
      obj = obj || new OrderList();
      if (data.hasOwnProperty('pagination'))
        obj.pagination = Pagination.constructFromObject(data['pagination']);
      if (data.hasOwnProperty('orders'))
        obj.orders = ApiClient.convertToType(data['orders'], [Order]);
    }
    return obj;
  }
}

/**
 * The pagination elements required to retrieve the remaining data.
 * @member {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/Pagination} pagination
 */
OrderList.prototype.pagination = undefined;

/**
 * Represents a purchase order within the OrderList.
 * @member {Array.<module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/Order>} orders
 */
OrderList.prototype.orders = undefined;

