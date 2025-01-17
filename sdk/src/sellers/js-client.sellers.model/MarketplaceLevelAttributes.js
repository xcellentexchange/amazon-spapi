/*
 * Selling Partner API for Sellers
 * The [Selling Partner API for Sellers](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) (Sellers API) provides essential information about seller accounts, such as:  - The marketplaces a seller can list in - The default language and currency of a marketplace - Whether the seller has suspended listings  Refer to the [Sellers API reference](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) for details about this API's operations, data types, and schemas.
 *
 * OpenAPI spec version: v1
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
import {Marketplace} from './Marketplace.js';

/**
 * The MarketplaceLevelAttributes model module.
 * @module sellers/js-client.sellers.model/MarketplaceLevelAttributes
 * @version v1
 */
export class MarketplaceLevelAttributes {
  /**
   * Constructs a new <code>MarketplaceLevelAttributes</code>.
   * Attributes that define the seller's presence and status within a specific marketplace. These attributes include the marketplace details, store name, listing status, and the selling plan the seller is subscribed to.
   * @alias module:sellers/js-client.sellers.model/MarketplaceLevelAttributes
   * @class
   * @param marketplace {module:sellers/js-client.sellers.model/Marketplace} 
   * @param storeName {String} The name of the seller's store as displayed in the marketplace.
   * @param listingStatus {module:sellers/js-client.sellers.model/MarketplaceLevelAttributes.ListingStatusEnum} The current status of the seller's listings.
   * @param sellingPlan {module:sellers/js-client.sellers.model/MarketplaceLevelAttributes.SellingPlanEnum} The selling plan details.
   */
  constructor(marketplace, storeName, listingStatus, sellingPlan) {
    this.marketplace = marketplace;
    this.storeName = storeName;
    this.listingStatus = listingStatus;
    this.sellingPlan = sellingPlan;
  }

  /**
   * Constructs a <code>MarketplaceLevelAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:sellers/js-client.sellers.model/MarketplaceLevelAttributes} obj Optional instance to populate.
   * @return {module:sellers/js-client.sellers.model/MarketplaceLevelAttributes} The populated <code>MarketplaceLevelAttributes</code> instance.
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
      obj = obj || new MarketplaceLevelAttributes();
      if (data.hasOwnProperty('marketplace'))
        obj.marketplace = Marketplace.constructFromObject(data['marketplace']);
      if (data.hasOwnProperty('storeName'))
        obj.storeName = ApiClient.convertToType(data['storeName'], 'String');
      if (data.hasOwnProperty('listingStatus'))
        obj.listingStatus = ApiClient.convertToType(data['listingStatus'], 'String');
      if (data.hasOwnProperty('sellingPlan'))
        obj.sellingPlan = ApiClient.convertToType(data['sellingPlan'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:sellers/js-client.sellers.model/Marketplace} marketplace
 */
MarketplaceLevelAttributes.prototype.marketplace = undefined;

/**
 * The name of the seller's store as displayed in the marketplace.
 * @member {String} storeName
 */
MarketplaceLevelAttributes.prototype.storeName = undefined;

/**
 * Allowed values for the <code>listingStatus</code> property.
 * @enum {String}
 * @readonly
 */
MarketplaceLevelAttributes.ListingStatusEnum = {
  /**
   * value: "ACTIVE"
   * @const
   */
  ACTIVE: "ACTIVE",

  /**
   * value: "INACTIVE"
   * @const
   */
  INACTIVE: "INACTIVE"
};

/**
 * The current status of the seller's listings.
 * @member {module:sellers/js-client.sellers.model/MarketplaceLevelAttributes.ListingStatusEnum} listingStatus
 */
MarketplaceLevelAttributes.prototype.listingStatus = undefined;

/**
 * Allowed values for the <code>sellingPlan</code> property.
 * @enum {String}
 * @readonly
 */
MarketplaceLevelAttributes.SellingPlanEnum = {
  /**
   * value: "PROFESSIONAL"
   * @const
   */
  PROFESSIONAL: "PROFESSIONAL",

  /**
   * value: "INDIVIDUAL"
   * @const
   */
  INDIVIDUAL: "INDIVIDUAL"
};

/**
 * The selling plan details.
 * @member {module:sellers/js-client.sellers.model/MarketplaceLevelAttributes.SellingPlanEnum} sellingPlan
 */
MarketplaceLevelAttributes.prototype.sellingPlan = undefined;


