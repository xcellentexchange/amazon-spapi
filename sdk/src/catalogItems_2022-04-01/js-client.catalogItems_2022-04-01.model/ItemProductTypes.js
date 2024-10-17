/*
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](doc:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-04-01
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
import {ItemProductTypeByMarketplace} from './ItemProductTypeByMarketplace.js';

/**
 * The ItemProductTypes model module.
 * @module catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemProductTypes
 * @version 2022-04-01
 */
export class ItemProductTypes extends Array {
  /**
   * Constructs a new <code>ItemProductTypes</code>.
   * Product types associated with the Amazon catalog item.
   * @alias module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemProductTypes
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>ItemProductTypes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemProductTypes} obj Optional instance to populate.
   * @return {module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemProductTypes} The populated <code>ItemProductTypes</code> instance.
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
      obj = obj || new ItemProductTypes();
      ApiClient.constructFromObject(data, obj, 'ItemProductTypeByMarketplace');
    }
    return obj;
  }
}
