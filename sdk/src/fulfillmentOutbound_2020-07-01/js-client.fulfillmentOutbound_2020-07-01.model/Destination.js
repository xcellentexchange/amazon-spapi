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
import {IpAddress} from './IpAddress.js';
import {VariablePrecisionAddress} from './VariablePrecisionAddress.js';

/**
 * The Destination model module.
 * @module fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Destination
 * @version 2020-07-01
 */
export class Destination {
  /**
   * Constructs a new <code>Destination</code>.
   * The destination for the delivery offer.
   * @alias module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Destination
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Destination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Destination} obj Optional instance to populate.
   * @return {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Destination} The populated <code>Destination</code> instance.
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
      obj = obj || new Destination();
      if (data.hasOwnProperty('deliveryAddress'))
        obj.deliveryAddress = VariablePrecisionAddress.constructFromObject(data['deliveryAddress']);
      if (data.hasOwnProperty('ipAddress'))
        obj.ipAddress = IpAddress.constructFromObject(data['ipAddress']);
    }
    return obj;
  }
}

/**
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/VariablePrecisionAddress} deliveryAddress
 */
Destination.prototype.deliveryAddress = undefined;

/**
 * The IP address of the customer.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/IpAddress} ipAddress
 */
Destination.prototype.ipAddress = undefined;


