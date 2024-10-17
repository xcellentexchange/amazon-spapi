/*
 * Selling Partner API for Data Kiosk
 * The Selling Partner API for Data Kiosk lets you submit GraphQL queries from a variety of schemas to help selling partners manage their businesses.
 *
 * OpenAPI spec version: 2023-11-15
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
 * @module dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/ErrorList
 * @version 2023-11-15
 */
export class ErrorList {
  /**
   * Constructs a new <code>ErrorList</code>.
   * A list of error responses returned when a request is unsuccessful.
   * @alias module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/ErrorList
   * @class
   * @param errors {Array.<module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/Error>} Error response returned when the request is unsuccessful.
   */
  constructor(errors) {
    this.errors = errors;
  }

  /**
   * Constructs a <code>ErrorList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/ErrorList} obj Optional instance to populate.
   * @return {module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/ErrorList} The populated <code>ErrorList</code> instance.
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
 * Error response returned when the request is unsuccessful.
 * @member {Array.<module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/Error>} errors
 */
ErrorList.prototype.errors = undefined;

