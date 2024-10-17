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
import {ItemList} from './ItemList.js';

/**
 * The ListMatchingItemsResponse model module.
 * @module catalogItemsV0/js-client.catalogItemsV0.model/ListMatchingItemsResponse
 * @version v0
 */
export class ListMatchingItemsResponse {
  /**
   * Constructs a new <code>ListMatchingItemsResponse</code>.
   * @alias module:catalogItemsV0/js-client.catalogItemsV0.model/ListMatchingItemsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ListMatchingItemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItemsV0/js-client.catalogItemsV0.model/ListMatchingItemsResponse} obj Optional instance to populate.
   * @return {module:catalogItemsV0/js-client.catalogItemsV0.model/ListMatchingItemsResponse} The populated <code>ListMatchingItemsResponse</code> instance.
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
      obj = obj || new ListMatchingItemsResponse();
      if (data.hasOwnProperty('Items'))
        obj.items = ItemList.constructFromObject(data['Items']);
    }
    return obj;
  }
}

/**
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/ItemList} items
 */
ListMatchingItemsResponse.prototype.items = undefined;


