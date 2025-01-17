/*
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
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
import {AggregationTimePeriod} from './AggregationTimePeriod.js';

/**
 * The AggregationSettings model module.
 * @module notifications/js-client.notifications.model/AggregationSettings
 * @version v1
 */
export class AggregationSettings {
  /**
   * Constructs a new <code>AggregationSettings</code>.
   * A container that holds all of the necessary properties to configure the aggregation of notifications.
   * @alias module:notifications/js-client.notifications.model/AggregationSettings
   * @class
   * @param aggregationTimePeriod {module:notifications/js-client.notifications.model/AggregationTimePeriod} The supported time period to use to perform marketplace-ASIN level aggregation.
   */
  constructor(aggregationTimePeriod) {
    this.aggregationTimePeriod = aggregationTimePeriod;
  }

  /**
   * Constructs a <code>AggregationSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:notifications/js-client.notifications.model/AggregationSettings} obj Optional instance to populate.
   * @return {module:notifications/js-client.notifications.model/AggregationSettings} The populated <code>AggregationSettings</code> instance.
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
      obj = obj || new AggregationSettings();
      if (data.hasOwnProperty('aggregationTimePeriod'))
        obj.aggregationTimePeriod = AggregationTimePeriod.constructFromObject(data['aggregationTimePeriod']);
    }
    return obj;
  }
}

/**
 * The supported time period to use to perform marketplace-ASIN level aggregation.
 * @member {module:notifications/js-client.notifications.model/AggregationTimePeriod} aggregationTimePeriod
 */
AggregationSettings.prototype.aggregationTimePeriod = undefined;


