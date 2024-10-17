/*
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
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
 * The FixedSlotCapacityErrors model module.
 * @module services/js-client.services.model/FixedSlotCapacityErrors
 * @version v1
 */
export class FixedSlotCapacityErrors {
  /**
   * Constructs a new <code>FixedSlotCapacityErrors</code>.
   * The error response schema for the `getFixedSlotCapacity` operation.
   * @alias module:services/js-client.services.model/FixedSlotCapacityErrors
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FixedSlotCapacityErrors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services/js-client.services.model/FixedSlotCapacityErrors} obj Optional instance to populate.
   * @return {module:services/js-client.services.model/FixedSlotCapacityErrors} The populated <code>FixedSlotCapacityErrors</code> instance.
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
      obj = obj || new FixedSlotCapacityErrors();
      if (data.hasOwnProperty('errors'))
        obj.errors = ErrorList.constructFromObject(data['errors']);
    }
    return obj;
  }
}

/**
 * Errors encountered during the `getFixedSlotCapacity` operation.
 * @member {module:services/js-client.services.model/ErrorList} errors
 */
FixedSlotCapacityErrors.prototype.errors = undefined;

