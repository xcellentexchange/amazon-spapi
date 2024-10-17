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
import {OpenTimeInterval} from './OpenTimeInterval.js';

/**
 * The OpenInterval model module.
 * @module ordersV0/js-client.ordersV0.model/OpenInterval
 * @version v0
 */
export class OpenInterval {
  /**
   * Constructs a new <code>OpenInterval</code>.
   * The time interval for which the business is open.
   * @alias module:ordersV0/js-client.ordersV0.model/OpenInterval
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OpenInterval</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ordersV0/js-client.ordersV0.model/OpenInterval} obj Optional instance to populate.
   * @return {module:ordersV0/js-client.ordersV0.model/OpenInterval} The populated <code>OpenInterval</code> instance.
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
      obj = obj || new OpenInterval();
      if (data.hasOwnProperty('StartTime'))
        obj.startTime = OpenTimeInterval.constructFromObject(data['StartTime']);
      if (data.hasOwnProperty('EndTime'))
        obj.endTime = OpenTimeInterval.constructFromObject(data['EndTime']);
    }
    return obj;
  }
}

/**
 * The time when the business opens.
 * @member {module:ordersV0/js-client.ordersV0.model/OpenTimeInterval} startTime
 */
OpenInterval.prototype.startTime = undefined;

/**
 * The time when the business closes.
 * @member {module:ordersV0/js-client.ordersV0.model/OpenTimeInterval} endTime
 */
OpenInterval.prototype.endTime = undefined;


