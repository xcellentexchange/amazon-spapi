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

/**
 * The ScopeOfWork model module.
 * @module services/js-client.services.model/ScopeOfWork
 * @version v1
 */
export class ScopeOfWork {
  /**
   * Constructs a new <code>ScopeOfWork</code>.
   * The scope of work for the order.
   * @alias module:services/js-client.services.model/ScopeOfWork
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ScopeOfWork</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services/js-client.services.model/ScopeOfWork} obj Optional instance to populate.
   * @return {module:services/js-client.services.model/ScopeOfWork} The populated <code>ScopeOfWork</code> instance.
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
      obj = obj || new ScopeOfWork();
      if (data.hasOwnProperty('asin'))
        obj.asin = ApiClient.convertToType(data['asin'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('requiredSkills'))
        obj.requiredSkills = ApiClient.convertToType(data['requiredSkills'], ['String']);
    }
    return obj;
  }
}

/**
 * The Amazon Standard Identification Number (ASIN) of the service job.
 * @member {String} asin
 */
ScopeOfWork.prototype.asin = undefined;

/**
 * The title of the service job.
 * @member {String} title
 */
ScopeOfWork.prototype.title = undefined;

/**
 * The number of service jobs.
 * @member {Number} quantity
 */
ScopeOfWork.prototype.quantity = undefined;

/**
 * A list of skills required to perform the job.
 * @member {Array.<String>} requiredSkills
 */
ScopeOfWork.prototype.requiredSkills = undefined;


