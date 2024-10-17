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
 * The Categories model module.
 * @module catalogItemsV0/js-client.catalogItemsV0.model/Categories
 * @version v0
 */
export class Categories {
  /**
   * Constructs a new <code>Categories</code>.
   * @alias module:catalogItemsV0/js-client.catalogItemsV0.model/Categories
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Categories</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItemsV0/js-client.catalogItemsV0.model/Categories} obj Optional instance to populate.
   * @return {module:catalogItemsV0/js-client.catalogItemsV0.model/Categories} The populated <code>Categories</code> instance.
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
      obj = obj || new Categories();
      if (data.hasOwnProperty('ProductCategoryId'))
        obj.productCategoryId = ApiClient.convertToType(data['ProductCategoryId'], 'String');
      if (data.hasOwnProperty('ProductCategoryName'))
        obj.productCategoryName = ApiClient.convertToType(data['ProductCategoryName'], 'String');
      if (data.hasOwnProperty('parent'))
        obj.parent = ApiClient.convertToType(data['parent'], Object);
    }
    return obj;
  }
}

/**
 * The identifier for the product category (or browse node).
 * @member {String} productCategoryId
 */
Categories.prototype.productCategoryId = undefined;

/**
 * The name of the product category (or browse node).
 * @member {String} productCategoryName
 */
Categories.prototype.productCategoryName = undefined;

/**
 * The parent product category.
 * @member {Object} parent
 */
Categories.prototype.parent = undefined;

