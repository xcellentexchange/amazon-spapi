/*
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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
import {TransactionReference} from './TransactionReference.js';

/**
 * The SubmitShipmentConfirmationsResponse model module.
 * @module vendorShipments/js-client.vendorShipments.model/SubmitShipmentConfirmationsResponse
 * @version v1
 */
export class SubmitShipmentConfirmationsResponse {
  /**
   * Constructs a new <code>SubmitShipmentConfirmationsResponse</code>.
   * The response schema for the SubmitShipmentConfirmations operation.
   * @alias module:vendorShipments/js-client.vendorShipments.model/SubmitShipmentConfirmationsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SubmitShipmentConfirmationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorShipments/js-client.vendorShipments.model/SubmitShipmentConfirmationsResponse} obj Optional instance to populate.
   * @return {module:vendorShipments/js-client.vendorShipments.model/SubmitShipmentConfirmationsResponse} The populated <code>SubmitShipmentConfirmationsResponse</code> instance.
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
      obj = obj || new SubmitShipmentConfirmationsResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = TransactionReference.constructFromObject(data['payload']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ErrorList.constructFromObject(data['errors']);
    }
    return obj;
  }
}

/**
 * The response payload for the SubmitShipmentConfirmations operation.
 * @member {module:vendorShipments/js-client.vendorShipments.model/TransactionReference} payload
 */
SubmitShipmentConfirmationsResponse.prototype.payload = undefined;

/**
 * @member {module:vendorShipments/js-client.vendorShipments.model/ErrorList} errors
 */
SubmitShipmentConfirmationsResponse.prototype.errors = undefined;

