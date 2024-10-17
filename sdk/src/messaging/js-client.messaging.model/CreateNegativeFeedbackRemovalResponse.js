/*
 * Selling Partner API for Messaging
 * With the Messaging API you can build applications that send messages to buyers. You can get a list of message types that are available for an order that you specify, then call an operation that sends a message to the buyer for that order. The Messaging API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
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
import {ErrorList} from './ErrorList.js';

/**
 * The CreateNegativeFeedbackRemovalResponse model module.
 * @module messaging/js-client.messaging.model/CreateNegativeFeedbackRemovalResponse
 * @version v1
 */
export class CreateNegativeFeedbackRemovalResponse {
  /**
   * Constructs a new <code>CreateNegativeFeedbackRemovalResponse</code>.
   * The response schema for the createNegativeFeedbackRemoval operation.
   * @alias module:messaging/js-client.messaging.model/CreateNegativeFeedbackRemovalResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateNegativeFeedbackRemovalResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:messaging/js-client.messaging.model/CreateNegativeFeedbackRemovalResponse} obj Optional instance to populate.
   * @return {module:messaging/js-client.messaging.model/CreateNegativeFeedbackRemovalResponse} The populated <code>CreateNegativeFeedbackRemovalResponse</code> instance.
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
      obj = obj || new CreateNegativeFeedbackRemovalResponse();
      if (data.hasOwnProperty('errors'))
        obj.errors = ErrorList.constructFromObject(data['errors']);
    }
    return obj;
  }
}

/**
 * @member {module:messaging/js-client.messaging.model/ErrorList} errors
 */
CreateNegativeFeedbackRemovalResponse.prototype.errors = undefined;

