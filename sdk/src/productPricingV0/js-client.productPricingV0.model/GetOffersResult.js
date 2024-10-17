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
import {ConditionType} from './ConditionType.js';
import {ItemIdentifier} from './ItemIdentifier.js';
import {OfferDetailList} from './OfferDetailList.js';
import {Summary} from './Summary.js';

/**
 * The GetOffersResult model module.
 * @module productPricingV0/js-client.productPricingV0.model/GetOffersResult
 * @version v0
 */
export class GetOffersResult {
  /**
   * Constructs a new <code>GetOffersResult</code>.
   * @alias module:productPricingV0/js-client.productPricingV0.model/GetOffersResult
   * @class
   * @param marketplaceID {String} A marketplace identifier.
   * @param itemCondition {module:productPricingV0/js-client.productPricingV0.model/ConditionType} The condition of the item.
   * @param status {String} The status of the operation.
   * @param identifier {module:productPricingV0/js-client.productPricingV0.model/ItemIdentifier} Metadata that identifies the item.
   * @param summary {module:productPricingV0/js-client.productPricingV0.model/Summary} Pricing information about the item.
   * @param offers {module:productPricingV0/js-client.productPricingV0.model/OfferDetailList} A list of offer details. The list is the same length as the TotalOfferCount in the Summary or 20, whichever is less.
   */
  constructor(marketplaceID, itemCondition, status, identifier, summary, offers) {
    this.marketplaceID = marketplaceID;
    this.itemCondition = itemCondition;
    this.status = status;
    this.identifier = identifier;
    this.summary = summary;
    this.offers = offers;
  }

  /**
   * Constructs a <code>GetOffersResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricingV0/js-client.productPricingV0.model/GetOffersResult} obj Optional instance to populate.
   * @return {module:productPricingV0/js-client.productPricingV0.model/GetOffersResult} The populated <code>GetOffersResult</code> instance.
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
      obj = obj || new GetOffersResult();
      if (data.hasOwnProperty('MarketplaceID'))
        obj.marketplaceID = ApiClient.convertToType(data['MarketplaceID'], 'String');
      if (data.hasOwnProperty('ASIN'))
        obj.ASIN = ApiClient.convertToType(data['ASIN'], 'String');
      if (data.hasOwnProperty('SKU'))
        obj.SKU = ApiClient.convertToType(data['SKU'], 'String');
      if (data.hasOwnProperty('ItemCondition'))
        obj.itemCondition = ConditionType.constructFromObject(data['ItemCondition']);
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('Identifier'))
        obj.identifier = ItemIdentifier.constructFromObject(data['Identifier']);
      if (data.hasOwnProperty('Summary'))
        obj.summary = Summary.constructFromObject(data['Summary']);
      if (data.hasOwnProperty('Offers'))
        obj.offers = OfferDetailList.constructFromObject(data['Offers']);
    }
    return obj;
  }
}

/**
 * A marketplace identifier.
 * @member {String} marketplaceID
 */
GetOffersResult.prototype.marketplaceID = undefined;

/**
 * The Amazon Standard Identification Number (ASIN) of the item.
 * @member {String} ASIN
 */
GetOffersResult.prototype.ASIN = undefined;

/**
 * The stock keeping unit (SKU) of the item.
 * @member {String} SKU
 */
GetOffersResult.prototype.SKU = undefined;

/**
 * The condition of the item.
 * @member {module:productPricingV0/js-client.productPricingV0.model/ConditionType} itemCondition
 */
GetOffersResult.prototype.itemCondition = undefined;

/**
 * The status of the operation.
 * @member {String} status
 */
GetOffersResult.prototype.status = undefined;

/**
 * Metadata that identifies the item.
 * @member {module:productPricingV0/js-client.productPricingV0.model/ItemIdentifier} identifier
 */
GetOffersResult.prototype.identifier = undefined;

/**
 * Pricing information about the item.
 * @member {module:productPricingV0/js-client.productPricingV0.model/Summary} summary
 */
GetOffersResult.prototype.summary = undefined;

/**
 * A list of offer details. The list is the same length as the TotalOfferCount in the Summary or 20, whichever is less.
 * @member {module:productPricingV0/js-client.productPricingV0.model/OfferDetailList} offers
 */
GetOffersResult.prototype.offers = undefined;

