/*
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items helps you programmatically retrieve item details for items in the catalog.
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
import {ErrorList} from './ErrorList.js';
import {ListMatchingItemsResponse} from './ListMatchingItemsResponse.js';

/**
 * The ListCatalogItemsResponse model module.
 * @module catalogItemsV0/js-client.catalogItemsV0.model/ListCatalogItemsResponse
 * @version v0
 */
export class ListCatalogItemsResponse {
  /**
   * Constructs a new <code>ListCatalogItemsResponse</code>.
   * @alias module:catalogItemsV0/js-client.catalogItemsV0.model/ListCatalogItemsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ListCatalogItemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItemsV0/js-client.catalogItemsV0.model/ListCatalogItemsResponse} obj Optional instance to populate.
   * @return {module:catalogItemsV0/js-client.catalogItemsV0.model/ListCatalogItemsResponse} The populated <code>ListCatalogItemsResponse</code> instance.
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
      obj = obj || new ListCatalogItemsResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = ListMatchingItemsResponse.constructFromObject(data['payload']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ErrorList.constructFromObject(data['errors']);
    }
    return obj;
  }
}

/**
 * The payload for the listCatalogItems operation.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/ListMatchingItemsResponse} payload
 */
ListCatalogItemsResponse.prototype.payload = undefined;

/**
 * One or more unexpected errors occurred during the listCatalogItems operation.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/ErrorList} errors
 */
ListCatalogItemsResponse.prototype.errors = undefined;


