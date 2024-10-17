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

/**
 * The CreateQueryResponse model module.
 * @module dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/CreateQueryResponse
 * @version 2023-11-15
 */
export class CreateQueryResponse {
  /**
   * Constructs a new <code>CreateQueryResponse</code>.
   * The response for the `createQuery` operation.
   * @alias module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/CreateQueryResponse
   * @class
   * @param queryId {String} The identifier for the query. This identifier is unique only in combination with a selling partner account ID.
   */
  constructor(queryId) {
    this.queryId = queryId;
  }

  /**
   * Constructs a <code>CreateQueryResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/CreateQueryResponse} obj Optional instance to populate.
   * @return {module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/CreateQueryResponse} The populated <code>CreateQueryResponse</code> instance.
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
      obj = obj || new CreateQueryResponse();
      if (data.hasOwnProperty('queryId'))
        obj.queryId = ApiClient.convertToType(data['queryId'], 'String');
    }
    return obj;
  }
}

/**
 * The identifier for the query. This identifier is unique only in combination with a selling partner account ID.
 * @member {String} queryId
 */
CreateQueryResponse.prototype.queryId = undefined;

