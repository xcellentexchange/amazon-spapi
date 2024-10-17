/*
 * The Selling Partner API for Invoices.
 * Use the Selling Partner API for Invoices to retrieve and manage invoice-related operations, which can help selling partners manage their bookkeeping processes.
 *
 * OpenAPI spec version: 2024-06-19
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
 * @module InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/ErrorList
 * @version 2024-06-19
 */
export class ErrorList {
  /**
   * Constructs a new <code>ErrorList</code>.
   * A list of error responses that are returned when a request is unsuccessful.
   * @alias module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/ErrorList
   * @class
   * @param errors {Array.<module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/Error>} List of errors.
   */
  constructor(errors) {
    this.errors = errors;
  }

  /**
   * Constructs a <code>ErrorList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/ErrorList} obj Optional instance to populate.
   * @return {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/ErrorList} The populated <code>ErrorList</code> instance.
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
 * List of errors.
 * @member {Array.<module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/Error>} errors
 */
ErrorList.prototype.errors = undefined;

