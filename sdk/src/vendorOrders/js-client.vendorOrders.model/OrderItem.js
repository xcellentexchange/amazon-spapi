/*
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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
import {ItemQuantity} from './ItemQuantity.js';
import {Money} from './Money.js';

/**
 * The OrderItem model module.
 * @module vendorOrders/js-client.vendorOrders.model/OrderItem
 * @version v1
 */
export class OrderItem {
  /**
   * Constructs a new <code>OrderItem</code>.
   * @alias module:vendorOrders/js-client.vendorOrders.model/OrderItem
   * @class
   * @param itemSequenceNumber {String} Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on.
   * @param orderedQuantity {module:vendorOrders/js-client.vendorOrders.model/ItemQuantity} Item quantity ordered.
   * @param isBackOrderAllowed {Boolean} When true, we will accept backorder confirmations for this item.
   */
  constructor(itemSequenceNumber, orderedQuantity, isBackOrderAllowed) {
    this.itemSequenceNumber = itemSequenceNumber;
    this.orderedQuantity = orderedQuantity;
    this.isBackOrderAllowed = isBackOrderAllowed;
  }

  /**
   * Constructs a <code>OrderItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorOrders/js-client.vendorOrders.model/OrderItem} obj Optional instance to populate.
   * @return {module:vendorOrders/js-client.vendorOrders.model/OrderItem} The populated <code>OrderItem</code> instance.
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
      obj = obj || new OrderItem();
      if (data.hasOwnProperty('itemSequenceNumber'))
        obj.itemSequenceNumber = ApiClient.convertToType(data['itemSequenceNumber'], 'String');
      if (data.hasOwnProperty('amazonProductIdentifier'))
        obj.amazonProductIdentifier = ApiClient.convertToType(data['amazonProductIdentifier'], 'String');
      if (data.hasOwnProperty('vendorProductIdentifier'))
        obj.vendorProductIdentifier = ApiClient.convertToType(data['vendorProductIdentifier'], 'String');
      if (data.hasOwnProperty('orderedQuantity'))
        obj.orderedQuantity = ItemQuantity.constructFromObject(data['orderedQuantity']);
      if (data.hasOwnProperty('isBackOrderAllowed'))
        obj.isBackOrderAllowed = ApiClient.convertToType(data['isBackOrderAllowed'], 'Boolean');
      if (data.hasOwnProperty('netCost'))
        obj.netCost = Money.constructFromObject(data['netCost']);
      if (data.hasOwnProperty('listPrice'))
        obj.listPrice = Money.constructFromObject(data['listPrice']);
    }
    return obj;
  }
}

/**
 * Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on.
 * @member {String} itemSequenceNumber
 */
OrderItem.prototype.itemSequenceNumber = undefined;

/**
 * Amazon Standard Identification Number (ASIN) of an item.
 * @member {String} amazonProductIdentifier
 */
OrderItem.prototype.amazonProductIdentifier = undefined;

/**
 * The vendor selected product identification of the item.
 * @member {String} vendorProductIdentifier
 */
OrderItem.prototype.vendorProductIdentifier = undefined;

/**
 * Item quantity ordered.
 * @member {module:vendorOrders/js-client.vendorOrders.model/ItemQuantity} orderedQuantity
 */
OrderItem.prototype.orderedQuantity = undefined;

/**
 * When true, we will accept backorder confirmations for this item.
 * @member {Boolean} isBackOrderAllowed
 */
OrderItem.prototype.isBackOrderAllowed = undefined;

/**
 * The net cost of an item per each or weight unit.
 * @member {module:vendorOrders/js-client.vendorOrders.model/Money} netCost
 */
OrderItem.prototype.netCost = undefined;

/**
 * The list price of an item per each or weight unit.
 * @member {module:vendorOrders/js-client.vendorOrders.model/Money} listPrice
 */
OrderItem.prototype.listPrice = undefined;

