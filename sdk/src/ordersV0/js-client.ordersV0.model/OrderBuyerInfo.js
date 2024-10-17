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
import {BuyerTaxInfo} from './BuyerTaxInfo.js';

/**
 * The OrderBuyerInfo model module.
 * @module ordersV0/js-client.ordersV0.model/OrderBuyerInfo
 * @version v0
 */
export class OrderBuyerInfo {
  /**
   * Constructs a new <code>OrderBuyerInfo</code>.
   * Buyer information for an order.
   * @alias module:ordersV0/js-client.ordersV0.model/OrderBuyerInfo
   * @class
   * @param amazonOrderId {String} An Amazon-defined order identifier, in 3-7-7 format.
   */
  constructor(amazonOrderId) {
    this.amazonOrderId = amazonOrderId;
  }

  /**
   * Constructs a <code>OrderBuyerInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ordersV0/js-client.ordersV0.model/OrderBuyerInfo} obj Optional instance to populate.
   * @return {module:ordersV0/js-client.ordersV0.model/OrderBuyerInfo} The populated <code>OrderBuyerInfo</code> instance.
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
      obj = obj || new OrderBuyerInfo();
      if (data.hasOwnProperty('AmazonOrderId'))
        obj.amazonOrderId = ApiClient.convertToType(data['AmazonOrderId'], 'String');
      if (data.hasOwnProperty('BuyerEmail'))
        obj.buyerEmail = ApiClient.convertToType(data['BuyerEmail'], 'String');
      if (data.hasOwnProperty('BuyerName'))
        obj.buyerName = ApiClient.convertToType(data['BuyerName'], 'String');
      if (data.hasOwnProperty('BuyerCounty'))
        obj.buyerCounty = ApiClient.convertToType(data['BuyerCounty'], 'String');
      if (data.hasOwnProperty('BuyerTaxInfo'))
        obj.buyerTaxInfo = BuyerTaxInfo.constructFromObject(data['BuyerTaxInfo']);
      if (data.hasOwnProperty('PurchaseOrderNumber'))
        obj.purchaseOrderNumber = ApiClient.convertToType(data['PurchaseOrderNumber'], 'String');
    }
    return obj;
  }
}

/**
 * An Amazon-defined order identifier, in 3-7-7 format.
 * @member {String} amazonOrderId
 */
OrderBuyerInfo.prototype.amazonOrderId = undefined;

/**
 * The anonymized email address of the buyer.
 * @member {String} buyerEmail
 */
OrderBuyerInfo.prototype.buyerEmail = undefined;

/**
 * The buyer name or the recipient name.
 * @member {String} buyerName
 */
OrderBuyerInfo.prototype.buyerName = undefined;

/**
 * The county of the buyer.  **Note**: This attribute is only available in the Brazil marketplace.
 * @member {String} buyerCounty
 */
OrderBuyerInfo.prototype.buyerCounty = undefined;

/**
 * Tax information about the buyer. Sellers can use this data to issue electronic invoices for business orders.  **Note**: This attribute is only available for business orders in the Brazil, Mexico and India marketplaces.
 * @member {module:ordersV0/js-client.ordersV0.model/BuyerTaxInfo} buyerTaxInfo
 */
OrderBuyerInfo.prototype.buyerTaxInfo = undefined;

/**
 * The purchase order (PO) number entered by the buyer at checkout. Only returned for orders where the buyer entered a PO number at checkout.
 * @member {String} purchaseOrderNumber
 */
OrderBuyerInfo.prototype.purchaseOrderNumber = undefined;

