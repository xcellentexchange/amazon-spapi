/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
import {CustomerType} from './CustomerType.js';
import {ItemCondition} from './ItemCondition.js';
import {MarketplaceId} from './MarketplaceId.js';

/**
 * The BatchOffersRequestParams model module.
 * @module productPricingV0/js-client.productPricingV0.model/BatchOffersRequestParams
 * @version v0
 */
export class BatchOffersRequestParams {
  /**
   * Constructs a new <code>BatchOffersRequestParams</code>.
   * @alias module:productPricingV0/js-client.productPricingV0.model/BatchOffersRequestParams
   * @class
   * @param marketplaceId {module:productPricingV0/js-client.productPricingV0.model/MarketplaceId} 
   * @param itemCondition {module:productPricingV0/js-client.productPricingV0.model/ItemCondition} Filters the offer listings to be considered based on item condition. Possible values: New, Used, Collectible, Refurbished, Club.
   */
  constructor(marketplaceId, itemCondition) {
    this.marketplaceId = marketplaceId;
    this.itemCondition = itemCondition;
  }

  /**
   * Constructs a <code>BatchOffersRequestParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricingV0/js-client.productPricingV0.model/BatchOffersRequestParams} obj Optional instance to populate.
   * @return {module:productPricingV0/js-client.productPricingV0.model/BatchOffersRequestParams} The populated <code>BatchOffersRequestParams</code> instance.
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
      obj = obj || new BatchOffersRequestParams();
      if (data.hasOwnProperty('MarketplaceId'))
        obj.marketplaceId = MarketplaceId.constructFromObject(data['MarketplaceId']);
      if (data.hasOwnProperty('ItemCondition'))
        obj.itemCondition = ItemCondition.constructFromObject(data['ItemCondition']);
      if (data.hasOwnProperty('CustomerType'))
        obj.customerType = CustomerType.constructFromObject(data['CustomerType']);
    }
    return obj;
  }
}

/**
 * @member {module:productPricingV0/js-client.productPricingV0.model/MarketplaceId} marketplaceId
 */
BatchOffersRequestParams.prototype.marketplaceId = undefined;

/**
 * Filters the offer listings to be considered based on item condition. Possible values: New, Used, Collectible, Refurbished, Club.
 * @member {module:productPricingV0/js-client.productPricingV0.model/ItemCondition} itemCondition
 */
BatchOffersRequestParams.prototype.itemCondition = undefined;

/**
 * Indicates whether to request Consumer or Business offers. Default is Consumer.
 * @member {module:productPricingV0/js-client.productPricingV0.model/CustomerType} customerType
 */
BatchOffersRequestParams.prototype.customerType = undefined;

