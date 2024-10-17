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
import {DeliveryMessage} from './DeliveryMessage.js';

/**
 * The DeliveryPolicy model module.
 * @module fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/DeliveryPolicy
 * @version 2020-07-01
 */
export class DeliveryPolicy {
  /**
   * Constructs a new <code>DeliveryPolicy</code>.
   * The policy for a delivery offering.
   * @alias module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/DeliveryPolicy
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DeliveryPolicy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/DeliveryPolicy} obj Optional instance to populate.
   * @return {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/DeliveryPolicy} The populated <code>DeliveryPolicy</code> instance.
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
      obj = obj || new DeliveryPolicy();
      if (data.hasOwnProperty('message'))
        obj.message = DeliveryMessage.constructFromObject(data['message']);
    }
    return obj;
  }
}

/**
 * Localized messaging for a delivery offering.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/DeliveryMessage} message
 */
DeliveryPolicy.prototype.message = undefined;

