/*
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
import {TransportStatus} from './TransportStatus.js';

/**
 * The TransportResult model module.
 * @module fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/TransportResult
 * @version v0
 */
export class TransportResult {
  /**
   * Constructs a new <code>TransportResult</code>.
   * The workflow status for a shipment with an Amazon-partnered carrier.
   * @alias module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/TransportResult
   * @class
   * @param transportStatus {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/TransportStatus} 
   */
  constructor(transportStatus) {
    this.transportStatus = transportStatus;
  }

  /**
   * Constructs a <code>TransportResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/TransportResult} obj Optional instance to populate.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/TransportResult} The populated <code>TransportResult</code> instance.
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
      obj = obj || new TransportResult();
      if (data.hasOwnProperty('TransportStatus'))
        obj.transportStatus = TransportStatus.constructFromObject(data['TransportStatus']);
      if (data.hasOwnProperty('ErrorCode'))
        obj.errorCode = ApiClient.convertToType(data['ErrorCode'], 'String');
      if (data.hasOwnProperty('ErrorDescription'))
        obj.errorDescription = ApiClient.convertToType(data['ErrorDescription'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/TransportStatus} transportStatus
 */
TransportResult.prototype.transportStatus = undefined;

/**
 * An error code that identifies the type of error that occured.
 * @member {String} errorCode
 */
TransportResult.prototype.errorCode = undefined;

/**
 * A message that describes the error condition.
 * @member {String} errorDescription
 */
TransportResult.prototype.errorDescription = undefined;

