/*
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, see the [Catalog Items API Use Case Guide](doc:catalog-items-api-v2020-12-01-use-case-guide).
 *
 * OpenAPI spec version: 2020-12-01
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
import {ItemSalesRank} from './ItemSalesRank.js';

/**
 * The ItemSalesRanksByMarketplace model module.
 * @module catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/ItemSalesRanksByMarketplace
 * @version 2020-12-01
 */
export class ItemSalesRanksByMarketplace {
  /**
   * Constructs a new <code>ItemSalesRanksByMarketplace</code>.
   * Sales ranks of an Amazon catalog item for the indicated Amazon marketplace.
   * @alias module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/ItemSalesRanksByMarketplace
   * @class
   * @param marketplaceId {String} Amazon marketplace identifier.
   * @param ranks {Array.<module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/ItemSalesRank>} Sales ranks of an Amazon catalog item for an Amazon marketplace.
   */
  constructor(marketplaceId, ranks) {
    this.marketplaceId = marketplaceId;
    this.ranks = ranks;
  }

  /**
   * Constructs a <code>ItemSalesRanksByMarketplace</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/ItemSalesRanksByMarketplace} obj Optional instance to populate.
   * @return {module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/ItemSalesRanksByMarketplace} The populated <code>ItemSalesRanksByMarketplace</code> instance.
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
      obj = obj || new ItemSalesRanksByMarketplace();
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['marketplaceId'], 'String');
      if (data.hasOwnProperty('ranks'))
        obj.ranks = ApiClient.convertToType(data['ranks'], [ItemSalesRank]);
    }
    return obj;
  }
}

/**
 * Amazon marketplace identifier.
 * @member {String} marketplaceId
 */
ItemSalesRanksByMarketplace.prototype.marketplaceId = undefined;

/**
 * Sales ranks of an Amazon catalog item for an Amazon marketplace.
 * @member {Array.<module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/ItemSalesRank>} ranks
 */
ItemSalesRanksByMarketplace.prototype.ranks = undefined;


