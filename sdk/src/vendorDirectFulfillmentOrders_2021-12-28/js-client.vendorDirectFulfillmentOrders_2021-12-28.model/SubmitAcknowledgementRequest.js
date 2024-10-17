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
import {OrderAcknowledgementItem} from './OrderAcknowledgementItem.js';

/**
 * The SubmitAcknowledgementRequest model module.
 * @module vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/SubmitAcknowledgementRequest
 * @version 2021-12-28
 */
export class SubmitAcknowledgementRequest {
  /**
   * Constructs a new <code>SubmitAcknowledgementRequest</code>.
   * The request schema for the submitAcknowledgement operation.
   * @alias module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/SubmitAcknowledgementRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SubmitAcknowledgementRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/SubmitAcknowledgementRequest} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/SubmitAcknowledgementRequest} The populated <code>SubmitAcknowledgementRequest</code> instance.
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
      obj = obj || new SubmitAcknowledgementRequest();
      if (data.hasOwnProperty('orderAcknowledgements'))
        obj.orderAcknowledgements = ApiClient.convertToType(data['orderAcknowledgements'], [OrderAcknowledgementItem]);
    }
    return obj;
  }
}

/**
 * A list of one or more purchase orders.
 * @member {Array.<module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/OrderAcknowledgementItem>} orderAcknowledgements
 */
SubmitAcknowledgementRequest.prototype.orderAcknowledgements = undefined;


