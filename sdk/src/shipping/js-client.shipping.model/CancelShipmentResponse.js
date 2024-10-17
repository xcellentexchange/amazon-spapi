/*
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.   **Note:** If you are new to the Amazon Shipping API, refer to the latest version of <a href=\"https://developer-docs.amazon.com/amazon-shipping/docs/shipping-api-v2-reference\">Amazon Shipping API (v2)</a> on the <a href=\"https://developer-docs.amazon.com/amazon-shipping/\">Amazon Shipping Developer Documentation</a> site.
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
 * The CancelShipmentResponse model module.
 * @module shipping/js-client.shipping.model/CancelShipmentResponse
 * @version v1
 */
export class CancelShipmentResponse {
  /**
   * Constructs a new <code>CancelShipmentResponse</code>.
   * The response schema for the cancelShipment operation.
   * @alias module:shipping/js-client.shipping.model/CancelShipmentResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CancelShipmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping/js-client.shipping.model/CancelShipmentResponse} obj Optional instance to populate.
   * @return {module:shipping/js-client.shipping.model/CancelShipmentResponse} The populated <code>CancelShipmentResponse</code> instance.
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
      obj = obj || new CancelShipmentResponse();
      if (data.hasOwnProperty('errors'))
        obj.errors = ErrorList.constructFromObject(data['errors']);
    }
    return obj;
  }
}

/**
 * Encountered errors for the operation.
 * @member {module:shipping/js-client.shipping.model/ErrorList} errors
 */
CancelShipmentResponse.prototype.errors = undefined;

