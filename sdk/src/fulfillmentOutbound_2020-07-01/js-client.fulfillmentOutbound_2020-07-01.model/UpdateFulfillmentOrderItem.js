/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
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
import {Money} from './Money.js';
import {Quantity} from './Quantity.js';

/**
 * The UpdateFulfillmentOrderItem model module.
 * @module fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/UpdateFulfillmentOrderItem
 * @version 2020-07-01
 */
export class UpdateFulfillmentOrderItem {
  /**
   * Constructs a new <code>UpdateFulfillmentOrderItem</code>.
   * Item information for updating a fulfillment order.
   * @alias module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/UpdateFulfillmentOrderItem
   * @class
   * @param sellerFulfillmentOrderItemId {String} Identifies the fulfillment order item to update. Created with a previous call to the `createFulfillmentOrder` operation.
   * @param quantity {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Quantity} 
   */
  constructor(sellerFulfillmentOrderItemId, quantity) {
    this.sellerFulfillmentOrderItemId = sellerFulfillmentOrderItemId;
    this.quantity = quantity;
  }

  /**
   * Constructs a <code>UpdateFulfillmentOrderItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/UpdateFulfillmentOrderItem} obj Optional instance to populate.
   * @return {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/UpdateFulfillmentOrderItem} The populated <code>UpdateFulfillmentOrderItem</code> instance.
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
      obj = obj || new UpdateFulfillmentOrderItem();
      if (data.hasOwnProperty('sellerSku'))
        obj.sellerSku = ApiClient.convertToType(data['sellerSku'], 'String');
      if (data.hasOwnProperty('sellerFulfillmentOrderItemId'))
        obj.sellerFulfillmentOrderItemId = ApiClient.convertToType(data['sellerFulfillmentOrderItemId'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = Quantity.constructFromObject(data['quantity']);
      if (data.hasOwnProperty('giftMessage'))
        obj.giftMessage = ApiClient.convertToType(data['giftMessage'], 'String');
      if (data.hasOwnProperty('displayableComment'))
        obj.displayableComment = ApiClient.convertToType(data['displayableComment'], 'String');
      if (data.hasOwnProperty('fulfillmentNetworkSku'))
        obj.fulfillmentNetworkSku = ApiClient.convertToType(data['fulfillmentNetworkSku'], 'String');
      if (data.hasOwnProperty('orderItemDisposition'))
        obj.orderItemDisposition = ApiClient.convertToType(data['orderItemDisposition'], 'String');
      if (data.hasOwnProperty('perUnitDeclaredValue'))
        obj.perUnitDeclaredValue = Money.constructFromObject(data['perUnitDeclaredValue']);
      if (data.hasOwnProperty('perUnitPrice'))
        obj.perUnitPrice = Money.constructFromObject(data['perUnitPrice']);
      if (data.hasOwnProperty('perUnitTax'))
        obj.perUnitTax = Money.constructFromObject(data['perUnitTax']);
    }
    return obj;
  }
}

/**
 * The seller SKU of the item.
 * @member {String} sellerSku
 */
UpdateFulfillmentOrderItem.prototype.sellerSku = undefined;

/**
 * Identifies the fulfillment order item to update. Created with a previous call to the `createFulfillmentOrder` operation.
 * @member {String} sellerFulfillmentOrderItemId
 */
UpdateFulfillmentOrderItem.prototype.sellerFulfillmentOrderItemId = undefined;

/**
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Quantity} quantity
 */
UpdateFulfillmentOrderItem.prototype.quantity = undefined;

/**
 * A message to the gift recipient, if applicable.
 * @member {String} giftMessage
 */
UpdateFulfillmentOrderItem.prototype.giftMessage = undefined;

/**
 * Item-specific text that displays in recipient-facing materials such as the outbound shipment packing slip.
 * @member {String} displayableComment
 */
UpdateFulfillmentOrderItem.prototype.displayableComment = undefined;

/**
 * Amazon's fulfillment network SKU of the item.
 * @member {String} fulfillmentNetworkSku
 */
UpdateFulfillmentOrderItem.prototype.fulfillmentNetworkSku = undefined;

/**
 * Indicates whether the item is sellable or unsellable.
 * @member {String} orderItemDisposition
 */
UpdateFulfillmentOrderItem.prototype.orderItemDisposition = undefined;

/**
 * The monetary value assigned by the seller to this item. This is a required field for India MCF orders.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Money} perUnitDeclaredValue
 */
UpdateFulfillmentOrderItem.prototype.perUnitDeclaredValue = undefined;

/**
 * The amount to be collected from the recipient for this item in a COD (Cash On Delivery) order.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Money} perUnitPrice
 */
UpdateFulfillmentOrderItem.prototype.perUnitPrice = undefined;

/**
 * The tax on the amount to be collected from the recipient for this item in a COD (Cash On Delivery) order.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Money} perUnitTax
 */
UpdateFulfillmentOrderItem.prototype.perUnitTax = undefined;


