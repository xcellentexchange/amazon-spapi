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
import {Categories} from './Categories.js';

/**
 * The ListOfCategories model module.
 * @module catalogItemsV0/js-client.catalogItemsV0.model/ListOfCategories
 * @version v0
 */
export class ListOfCategories extends Array {
  /**
   * Constructs a new <code>ListOfCategories</code>.
   * @alias module:catalogItemsV0/js-client.catalogItemsV0.model/ListOfCategories
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>ListOfCategories</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItemsV0/js-client.catalogItemsV0.model/ListOfCategories} obj Optional instance to populate.
   * @return {module:catalogItemsV0/js-client.catalogItemsV0.model/ListOfCategories} The populated <code>ListOfCategories</code> instance.
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
      obj = obj || new ListOfCategories();
      ApiClient.constructFromObject(data, obj, 'Categories');
    }
    return obj;
  }
}
