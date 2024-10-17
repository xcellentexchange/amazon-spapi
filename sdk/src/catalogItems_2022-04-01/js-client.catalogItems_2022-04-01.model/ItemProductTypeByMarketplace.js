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

/**
 * The ItemProductTypeByMarketplace model module.
 * @module catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemProductTypeByMarketplace
 * @version 2022-04-01
 */
export class ItemProductTypeByMarketplace {
  /**
   * Constructs a new <code>ItemProductTypeByMarketplace</code>.
   * Product type associated with the Amazon catalog item for the indicated Amazon marketplace.
   * @alias module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemProductTypeByMarketplace
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ItemProductTypeByMarketplace</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemProductTypeByMarketplace} obj Optional instance to populate.
   * @return {module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemProductTypeByMarketplace} The populated <code>ItemProductTypeByMarketplace</code> instance.
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
      obj = obj || new ItemProductTypeByMarketplace();
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['marketplaceId'], 'String');
      if (data.hasOwnProperty('productType'))
        obj.productType = ApiClient.convertToType(data['productType'], 'String');
    }
    return obj;
  }
}

/**
 * Amazon marketplace identifier.
 * @member {String} marketplaceId
 */
ItemProductTypeByMarketplace.prototype.marketplaceId = undefined;

/**
 * Name of the product type associated with the Amazon catalog item.
 * @member {String} productType
 */
ItemProductTypeByMarketplace.prototype.productType = undefined;


