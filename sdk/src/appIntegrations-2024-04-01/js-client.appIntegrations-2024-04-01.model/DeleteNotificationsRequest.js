/*
 * The Selling Partner API for third party application integrations.
 * With the AppIntegrations API v2024-04-01, you can send notifications to Amazon Selling Partners and display the notifications in Seller Central.
 *
 * OpenAPI spec version: 2024-04-01
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
 * The DeleteNotificationsRequest model module.
 * @module appIntegrations-2024-04-01/js-client.appIntegrations-2024-04-01.model/DeleteNotificationsRequest
 * @version 2024-04-01
 */
export class DeleteNotificationsRequest {
  /**
   * Constructs a new <code>DeleteNotificationsRequest</code>.
   * The request for the `deleteNotifications` operation.
   * @alias module:appIntegrations-2024-04-01/js-client.appIntegrations-2024-04-01.model/DeleteNotificationsRequest
   * @class
   * @param templateId {String} The unique identifier of the notification template you used to onboard your application.
   * @param deletionReason {module:appIntegrations-2024-04-01/js-client.appIntegrations-2024-04-01.model/DeleteNotificationsRequest.DeletionReasonEnum} The unique identifier that maps each notification status to a reason code.
   */
  constructor(templateId, deletionReason) {
    this.templateId = templateId;
    this.deletionReason = deletionReason;
  }

  /**
   * Constructs a <code>DeleteNotificationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:appIntegrations-2024-04-01/js-client.appIntegrations-2024-04-01.model/DeleteNotificationsRequest} obj Optional instance to populate.
   * @return {module:appIntegrations-2024-04-01/js-client.appIntegrations-2024-04-01.model/DeleteNotificationsRequest} The populated <code>DeleteNotificationsRequest</code> instance.
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
      obj = obj || new DeleteNotificationsRequest();
      if (data.hasOwnProperty('templateId'))
        obj.templateId = ApiClient.convertToType(data['templateId'], 'String');
      if (data.hasOwnProperty('deletionReason'))
        obj.deletionReason = ApiClient.convertToType(data['deletionReason'], 'String');
    }
    return obj;
  }
}

/**
 * The unique identifier of the notification template you used to onboard your application.
 * @member {String} templateId
 */
DeleteNotificationsRequest.prototype.templateId = undefined;

/**
 * Allowed values for the <code>deletionReason</code> property.
 * @enum {String}
 * @readonly
 */
DeleteNotificationsRequest.DeletionReasonEnum = {
  /**
   * value: "INCORRECT_CONTENT"
   * @const
   */
  CONTENT: "INCORRECT_CONTENT",

  /**
   * value: "INCORRECT_RECIPIENT"
   * @const
   */
  RECIPIENT: "INCORRECT_RECIPIENT"
};

/**
 * The unique identifier that maps each notification status to a reason code.
 * @member {module:appIntegrations-2024-04-01/js-client.appIntegrations-2024-04-01.model/DeleteNotificationsRequest.DeletionReasonEnum} deletionReason
 */
DeleteNotificationsRequest.prototype.deletionReason = undefined;


