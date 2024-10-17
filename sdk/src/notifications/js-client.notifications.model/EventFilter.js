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
import {AggregationFilter} from './AggregationFilter.js';
import {AggregationSettings} from './AggregationSettings.js';
import {MarketplaceFilter} from './MarketplaceFilter.js';
import {MarketplaceIds} from './MarketplaceIds.js';
import {OrderChangeTypeFilter} from './OrderChangeTypeFilter.js';
import {OrderChangeTypes} from './OrderChangeTypes.js';

/**
 * The EventFilter model module.
 * @module notifications/js-client.notifications.model/EventFilter
 * @version v1
 */
export class EventFilter extends AggregationFilter {
  /**
   * Constructs a new <code>EventFilter</code>.
   * A `notificationType` specific filter. This object contains all of the currently available filters and properties that you can use to define a `notificationType` specific filter.
   * @alias module:notifications/js-client.notifications.model/EventFilter
   * @class
   * @extends module:notifications/js-client.notifications.model/AggregationFilter
   * @implements module:notifications/js-client.notifications.model/MarketplaceFilter
   * @implements module:notifications/js-client.notifications.model/OrderChangeTypeFilter
   * @param eventFilterType {module:notifications/js-client.notifications.model/EventFilter.EventFilterTypeEnum} An `eventFilterType` value that is supported by the specific `notificationType`. This is used by the subscription service to determine the type of event filter. Refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values) to determine if an `eventFilterType` is supported.
   */
  constructor(eventFilterType) {
    super();
    MarketplaceFilter.call(this);
    OrderChangeTypeFilter.call(this);
    this.eventFilterType = eventFilterType;
  }

  /**
   * Constructs a <code>EventFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:notifications/js-client.notifications.model/EventFilter} obj Optional instance to populate.
   * @return {module:notifications/js-client.notifications.model/EventFilter} The populated <code>EventFilter</code> instance.
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
      obj = obj || new EventFilter();
      AggregationFilter.constructFromObject(data, obj);
      MarketplaceFilter.constructFromObject(data, obj);
      OrderChangeTypeFilter.constructFromObject(data, obj);
      if (data.hasOwnProperty('eventFilterType'))
        obj.eventFilterType = ApiClient.convertToType(data['eventFilterType'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>eventFilterType</code> property.
 * @enum {String}
 * @readonly
 */
EventFilter.EventFilterTypeEnum = {
  /**
   * value: "ANY_OFFER_CHANGED"
   * @const
   */
  ANY_OFFER_CHANGED: "ANY_OFFER_CHANGED",

  /**
   * value: "ORDER_CHANGE"
   * @const
   */
  ORDER_CHANGE: "ORDER_CHANGE"
};

/**
 * An `eventFilterType` value that is supported by the specific `notificationType`. This is used by the subscription service to determine the type of event filter. Refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values) to determine if an `eventFilterType` is supported.
 * @member {module:notifications/js-client.notifications.model/EventFilter.EventFilterTypeEnum} eventFilterType
 */
EventFilter.prototype.eventFilterType = undefined;

// Implement MarketplaceFilter interface:
/**
 * @member {module:notifications/js-client.notifications.model/MarketplaceIds} marketplaceIds
 */
MarketplaceFilter.prototype.marketplaceIds = undefined;

// Implement OrderChangeTypeFilter interface:
/**
 * @member {module:notifications/js-client.notifications.model/OrderChangeTypes} orderChangeTypes
 */
OrderChangeTypeFilter.prototype.orderChangeTypes = undefined;


