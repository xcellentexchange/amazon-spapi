/*
 * Selling Partner API for Uploads
 * The Uploads API lets you upload files that you can programmatically access using other Selling Partner APIs, such as the A+ Content API and the Messaging API.
 *
 * OpenAPI spec version: 2020-11-01
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
 * @module uploads_2020-11-01/js-client.uploads_2020-11-01.model/ErrorList
 * @version 2020-11-01
 */
export class ErrorList extends Array {
  /**
   * Constructs a new <code>ErrorList</code>.
   * A list of error responses returned when a request is unsuccessful.
   * @alias module:uploads_2020-11-01/js-client.uploads_2020-11-01.model/ErrorList
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>ErrorList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:uploads_2020-11-01/js-client.uploads_2020-11-01.model/ErrorList} obj Optional instance to populate.
   * @return {module:uploads_2020-11-01/js-client.uploads_2020-11-01.model/ErrorList} The populated <code>ErrorList</code> instance.
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
      ApiClient.constructFromObject(data, obj, 'Error');
    }
    return obj;
  }
}

