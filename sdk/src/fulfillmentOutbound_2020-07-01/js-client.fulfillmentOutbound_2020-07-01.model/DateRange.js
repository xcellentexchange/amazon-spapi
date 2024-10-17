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
import {Timestamp} from './Timestamp.js';

/**
 * The DateRange model module.
 * @module fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/DateRange
 * @version 2020-07-01
 */
export class DateRange {
  /**
   * Constructs a new <code>DateRange</code>.
   * The time range within which something (for example, a delivery) will occur.
   * @alias module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/DateRange
   * @class
   * @param earliest {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Timestamp} The earliest point in a date range.
   * @param latest {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Timestamp} The latest point in a date range.
   */
  constructor(earliest, latest) {
    this.earliest = earliest;
    this.latest = latest;
  }

  /**
   * Constructs a <code>DateRange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/DateRange} obj Optional instance to populate.
   * @return {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/DateRange} The populated <code>DateRange</code> instance.
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
      obj = obj || new DateRange();
      if (data.hasOwnProperty('earliest'))
        obj.earliest = Timestamp.constructFromObject(data['earliest']);
      if (data.hasOwnProperty('latest'))
        obj.latest = Timestamp.constructFromObject(data['latest']);
    }
    return obj;
  }
}

/**
 * The earliest point in a date range.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Timestamp} earliest
 */
DateRange.prototype.earliest = undefined;

/**
 * The latest point in a date range.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Timestamp} latest
 */
DateRange.prototype.latest = undefined;


