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
import {InvalidReturnItemList} from './InvalidReturnItemList.js';
import {ReturnAuthorizationList} from './ReturnAuthorizationList.js';
import {ReturnItemList} from './ReturnItemList.js';

/**
 * The CreateFulfillmentReturnResult model module.
 * @module fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/CreateFulfillmentReturnResult
 * @version 2020-07-01
 */
export class CreateFulfillmentReturnResult {
  /**
   * Constructs a new <code>CreateFulfillmentReturnResult</code>.
   * The result for the createFulfillmentReturn operation.
   * @alias module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/CreateFulfillmentReturnResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateFulfillmentReturnResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/CreateFulfillmentReturnResult} obj Optional instance to populate.
   * @return {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/CreateFulfillmentReturnResult} The populated <code>CreateFulfillmentReturnResult</code> instance.
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
      obj = obj || new CreateFulfillmentReturnResult();
      if (data.hasOwnProperty('returnItems'))
        obj.returnItems = ReturnItemList.constructFromObject(data['returnItems']);
      if (data.hasOwnProperty('invalidReturnItems'))
        obj.invalidReturnItems = InvalidReturnItemList.constructFromObject(data['invalidReturnItems']);
      if (data.hasOwnProperty('returnAuthorizations'))
        obj.returnAuthorizations = ReturnAuthorizationList.constructFromObject(data['returnAuthorizations']);
    }
    return obj;
  }
}

/**
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/ReturnItemList} returnItems
 */
CreateFulfillmentReturnResult.prototype.returnItems = undefined;

/**
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/InvalidReturnItemList} invalidReturnItems
 */
CreateFulfillmentReturnResult.prototype.invalidReturnItems = undefined;

/**
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/ReturnAuthorizationList} returnAuthorizations
 */
CreateFulfillmentReturnResult.prototype.returnAuthorizations = undefined;

