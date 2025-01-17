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
import {ErrorList} from './ErrorList.js';
import {ListAllFulfillmentOrdersResult} from './ListAllFulfillmentOrdersResult.js';

/**
 * The ListAllFulfillmentOrdersResponse model module.
 * @module fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/ListAllFulfillmentOrdersResponse
 * @version 2020-07-01
 */
export class ListAllFulfillmentOrdersResponse {
  /**
   * Constructs a new <code>ListAllFulfillmentOrdersResponse</code>.
   * The response schema for the `listAllFulfillmentOrders` operation.
   * @alias module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/ListAllFulfillmentOrdersResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ListAllFulfillmentOrdersResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/ListAllFulfillmentOrdersResponse} obj Optional instance to populate.
   * @return {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/ListAllFulfillmentOrdersResponse} The populated <code>ListAllFulfillmentOrdersResponse</code> instance.
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
      obj = obj || new ListAllFulfillmentOrdersResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = ListAllFulfillmentOrdersResult.constructFromObject(data['payload']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ErrorList.constructFromObject(data['errors']);
    }
    return obj;
  }
}

/**
 * The payload for the `listAllFulfillmentOrders` operation.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/ListAllFulfillmentOrdersResult} payload
 */
ListAllFulfillmentOrdersResponse.prototype.payload = undefined;

/**
 * One or more unexpected errors occurred during the `listAllFulfillmentOrders` operation.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/ErrorList} errors
 */
ListAllFulfillmentOrdersResponse.prototype.errors = undefined;


