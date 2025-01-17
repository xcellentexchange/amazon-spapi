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
import {CommonTransportResult} from './CommonTransportResult.js';
import {ErrorList} from './ErrorList.js';

/**
 * The EstimateTransportResponse model module.
 * @module fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/EstimateTransportResponse
 * @version v0
 */
export class EstimateTransportResponse {
  /**
   * Constructs a new <code>EstimateTransportResponse</code>.
   * The response schema for the estimateTransport operation.
   * @alias module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/EstimateTransportResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EstimateTransportResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/EstimateTransportResponse} obj Optional instance to populate.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/EstimateTransportResponse} The populated <code>EstimateTransportResponse</code> instance.
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
      obj = obj || new EstimateTransportResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = CommonTransportResult.constructFromObject(data['payload']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ErrorList.constructFromObject(data['errors']);
    }
    return obj;
  }
}

/**
 * The payload for the estimateTransport operation.
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/CommonTransportResult} payload
 */
EstimateTransportResponse.prototype.payload = undefined;

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/ErrorList} errors
 */
EstimateTransportResponse.prototype.errors = undefined;


