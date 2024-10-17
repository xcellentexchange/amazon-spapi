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
import {ItemBrowseClassificationsByMarketplace} from './ItemBrowseClassificationsByMarketplace.js';

/**
 * The ItemBrowseClassifications model module.
 * @module catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemBrowseClassifications
 * @version 2022-04-01
 */
export class ItemBrowseClassifications extends Array {
  /**
   * Constructs a new <code>ItemBrowseClassifications</code>.
   * Array of classifications (browse nodes) associated with the item in the Amazon catalog by Amazon marketplace.
   * @alias module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemBrowseClassifications
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>ItemBrowseClassifications</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemBrowseClassifications} obj Optional instance to populate.
   * @return {module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemBrowseClassifications} The populated <code>ItemBrowseClassifications</code> instance.
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
      obj = obj || new ItemBrowseClassifications();
      ApiClient.constructFromObject(data, obj, 'ItemBrowseClassificationsByMarketplace');
    }
    return obj;
  }
}
