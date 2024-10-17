/*
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor's shipping data.
 *
 * OpenAPI spec version: 2021-12-28
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
import {Error} from './Error.js';

/**
 * The ErrorList model module.
 * @module vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ErrorList
 * @version 2021-12-28
 */
export class ErrorList {
  /**
   * Constructs a new <code>ErrorList</code>.
   * A list of error responses returned when a request is unsuccessful.
   * @alias module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ErrorList
   * @class
   * @param errors {Array.<module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/Error>} An array of error objects that represents individual errors encountered during the request.
   */
  constructor(errors) {
    this.errors = errors;
  }

  /**
   * Constructs a <code>ErrorList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ErrorList} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ErrorList} The populated <code>ErrorList</code> instance.
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
      obj = obj || new ErrorList();
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
    }
    return obj;
  }
}

/**
 * An array of error objects that represents individual errors encountered during the request.
 * @member {Array.<module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/Error>} errors
 */
ErrorList.prototype.errors = undefined;


