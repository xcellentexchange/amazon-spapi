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
import {ItemRelationshipsByMarketplace} from './ItemRelationshipsByMarketplace.js';

/**
 * The ItemRelationships model module.
 * @module catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemRelationships
 * @version 2022-04-01
 */
export class ItemRelationships extends Array {
  /**
   * Constructs a new <code>ItemRelationships</code>.
   * Relationships by marketplace for an Amazon catalog item (for example, variations).
   * @alias module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemRelationships
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>ItemRelationships</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemRelationships} obj Optional instance to populate.
   * @return {module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemRelationships} The populated <code>ItemRelationships</code> instance.
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
      obj = obj || new ItemRelationships();
      ApiClient.constructFromObject(data, obj, 'ItemRelationshipsByMarketplace');
    }
    return obj;
  }
}

