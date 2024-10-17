/*
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
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
import {FeesEstimateErrorDetail} from './FeesEstimateErrorDetail.js';

/**
 * The FeesEstimateError model module.
 * @module productFeesV0/js-client.productFeesV0.model/FeesEstimateError
 * @version v0
 */
export class FeesEstimateError {
  /**
   * Constructs a new <code>FeesEstimateError</code>.
   * An unexpected error occurred during this operation.
   * @alias module:productFeesV0/js-client.productFeesV0.model/FeesEstimateError
   * @class
   * @param type {String} An error type, identifying either the receiver or the sender as the originator of the error.
   * @param code {String} An error code that identifies the type of error that occurred.
   * @param message {String} A message that describes the error condition.
   * @param detail {module:productFeesV0/js-client.productFeesV0.model/FeesEstimateErrorDetail} 
   */
  constructor(type, code, message, detail) {
    this.type = type;
    this.code = code;
    this.message = message;
    this.detail = detail;
  }

  /**
   * Constructs a <code>FeesEstimateError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productFeesV0/js-client.productFeesV0.model/FeesEstimateError} obj Optional instance to populate.
   * @return {module:productFeesV0/js-client.productFeesV0.model/FeesEstimateError} The populated <code>FeesEstimateError</code> instance.
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
      obj = obj || new FeesEstimateError();
      if (data.hasOwnProperty('Type'))
        obj.type = ApiClient.convertToType(data['Type'], 'String');
      if (data.hasOwnProperty('Code'))
        obj.code = ApiClient.convertToType(data['Code'], 'String');
      if (data.hasOwnProperty('Message'))
        obj.message = ApiClient.convertToType(data['Message'], 'String');
      if (data.hasOwnProperty('Detail'))
        obj.detail = FeesEstimateErrorDetail.constructFromObject(data['Detail']);
    }
    return obj;
  }
}

/**
 * An error type, identifying either the receiver or the sender as the originator of the error.
 * @member {String} type
 */
FeesEstimateError.prototype.type = undefined;

/**
 * An error code that identifies the type of error that occurred.
 * @member {String} code
 */
FeesEstimateError.prototype.code = undefined;

/**
 * A message that describes the error condition.
 * @member {String} message
 */
FeesEstimateError.prototype.message = undefined;

/**
 * @member {module:productFeesV0/js-client.productFeesV0.model/FeesEstimateErrorDetail} detail
 */
FeesEstimateError.prototype.detail = undefined;

