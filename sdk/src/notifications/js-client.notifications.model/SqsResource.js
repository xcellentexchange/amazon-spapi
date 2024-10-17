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

/**
 * The SqsResource model module.
 * @module notifications/js-client.notifications.model/SqsResource
 * @version v1
 */
export class SqsResource {
  /**
   * Constructs a new <code>SqsResource</code>.
   * The information required to create an Amazon Simple Queue Service (Amazon SQS) queue destination.
   * @alias module:notifications/js-client.notifications.model/SqsResource
   * @class
   * @param arn {String} The Amazon Resource Name (ARN) associated with the SQS queue.
   */
  constructor(arn) {
    this.arn = arn;
  }

  /**
   * Constructs a <code>SqsResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:notifications/js-client.notifications.model/SqsResource} obj Optional instance to populate.
   * @return {module:notifications/js-client.notifications.model/SqsResource} The populated <code>SqsResource</code> instance.
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
      obj = obj || new SqsResource();
      if (data.hasOwnProperty('arn'))
        obj.arn = ApiClient.convertToType(data['arn'], 'String');
    }
    return obj;
  }
}

/**
 * The Amazon Resource Name (ARN) associated with the SQS queue.
 * @member {String} arn
 */
SqsResource.prototype.arn = undefined;

