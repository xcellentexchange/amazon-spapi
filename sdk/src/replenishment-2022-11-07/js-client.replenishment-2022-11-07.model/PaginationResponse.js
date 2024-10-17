/*
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * OpenAPI spec version: 2022-11-07
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
 * The PaginationResponse model module.
 * @module replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/PaginationResponse
 * @version 2022-11-07
 */
export class PaginationResponse {
  /**
   * Constructs a new <code>PaginationResponse</code>.
   * Use these parameters to paginate through the response.
   * @alias module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/PaginationResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PaginationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/PaginationResponse} obj Optional instance to populate.
   * @return {module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/PaginationResponse} The populated <code>PaginationResponse</code> instance.
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
      obj = obj || new PaginationResponse();
      if (data.hasOwnProperty('totalResults'))
        obj.totalResults = ApiClient.convertToType(data['totalResults'], 'Number');
    }
    return obj;
  }
}

/**
 * Total number of results matching the given filter criteria.
 * @member {Number} totalResults
 */
PaginationResponse.prototype.totalResults = undefined;

