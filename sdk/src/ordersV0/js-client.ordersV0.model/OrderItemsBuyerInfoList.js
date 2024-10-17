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
import {OrderItemBuyerInfoList} from './OrderItemBuyerInfoList.js';

/**
 * The OrderItemsBuyerInfoList model module.
 * @module ordersV0/js-client.ordersV0.model/OrderItemsBuyerInfoList
 * @version v0
 */
export class OrderItemsBuyerInfoList {
  /**
   * Constructs a new <code>OrderItemsBuyerInfoList</code>.
   * A single order item's buyer information list with the order ID.
   * @alias module:ordersV0/js-client.ordersV0.model/OrderItemsBuyerInfoList
   * @class
   * @param orderItems {module:ordersV0/js-client.ordersV0.model/OrderItemBuyerInfoList} 
   * @param amazonOrderId {String} An Amazon-defined order identifier, in 3-7-7 format.
   */
  constructor(orderItems, amazonOrderId) {
    this.orderItems = orderItems;
    this.amazonOrderId = amazonOrderId;
  }

  /**
   * Constructs a <code>OrderItemsBuyerInfoList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ordersV0/js-client.ordersV0.model/OrderItemsBuyerInfoList} obj Optional instance to populate.
   * @return {module:ordersV0/js-client.ordersV0.model/OrderItemsBuyerInfoList} The populated <code>OrderItemsBuyerInfoList</code> instance.
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
      obj = obj || new OrderItemsBuyerInfoList();
      if (data.hasOwnProperty('OrderItems'))
        obj.orderItems = OrderItemBuyerInfoList.constructFromObject(data['OrderItems']);
      if (data.hasOwnProperty('NextToken'))
        obj.nextToken = ApiClient.convertToType(data['NextToken'], 'String');
      if (data.hasOwnProperty('AmazonOrderId'))
        obj.amazonOrderId = ApiClient.convertToType(data['AmazonOrderId'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:ordersV0/js-client.ordersV0.model/OrderItemBuyerInfoList} orderItems
 */
OrderItemsBuyerInfoList.prototype.orderItems = undefined;

/**
 * When present and not empty, pass this string token in the next request to return the next response page.
 * @member {String} nextToken
 */
OrderItemsBuyerInfoList.prototype.nextToken = undefined;

/**
 * An Amazon-defined order identifier, in 3-7-7 format.
 * @member {String} amazonOrderId
 */
OrderItemsBuyerInfoList.prototype.amazonOrderId = undefined;


