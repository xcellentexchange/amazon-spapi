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

/**
 * The SalesRankType model module.
 * @module catalogItemsV0/js-client.catalogItemsV0.model/SalesRankType
 * @version v0
 */
export class SalesRankType {
  /**
   * Constructs a new <code>SalesRankType</code>.
   * @alias module:catalogItemsV0/js-client.catalogItemsV0.model/SalesRankType
   * @class
   * @param productCategoryId {String} Identifies the item category from which the sales rank is taken.
   * @param rank {Number} The sales rank of the item within the item category.
   */
  constructor(productCategoryId, rank) {
    this.productCategoryId = productCategoryId;
    this.rank = rank;
  }

  /**
   * Constructs a <code>SalesRankType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItemsV0/js-client.catalogItemsV0.model/SalesRankType} obj Optional instance to populate.
   * @return {module:catalogItemsV0/js-client.catalogItemsV0.model/SalesRankType} The populated <code>SalesRankType</code> instance.
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
      obj = obj || new SalesRankType();
      if (data.hasOwnProperty('ProductCategoryId'))
        obj.productCategoryId = ApiClient.convertToType(data['ProductCategoryId'], 'String');
      if (data.hasOwnProperty('Rank'))
        obj.rank = ApiClient.convertToType(data['Rank'], 'Number');
    }
    return obj;
  }
}

/**
 * Identifies the item category from which the sales rank is taken.
 * @member {String} productCategoryId
 */
SalesRankType.prototype.productCategoryId = undefined;

/**
 * The sales rank of the item within the item category.
 * @member {Number} rank
 */
SalesRankType.prototype.rank = undefined;

