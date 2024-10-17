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
import {OfferCustomerType} from './OfferCustomerType.js';
import {PriceType} from './PriceType.js';
import {QuantityDiscountType} from './QuantityDiscountType.js';

/**
 * The CompetitivePriceType model module.
 * @module productPricingV0/js-client.productPricingV0.model/CompetitivePriceType
 * @version v0
 */
export class CompetitivePriceType {
  /**
   * Constructs a new <code>CompetitivePriceType</code>.
   * @alias module:productPricingV0/js-client.productPricingV0.model/CompetitivePriceType
   * @class
   * @param competitivePriceId {String} The pricing model for each price that is returned.  Possible values:  * 1 - New Buy Box Price. * 2 - Used Buy Box Price.
   * @param price {module:productPricingV0/js-client.productPricingV0.model/PriceType} Pricing information for a given CompetitivePriceId value.
   */
  constructor(competitivePriceId, price) {
    this.competitivePriceId = competitivePriceId;
    this.price = price;
  }

  /**
   * Constructs a <code>CompetitivePriceType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricingV0/js-client.productPricingV0.model/CompetitivePriceType} obj Optional instance to populate.
   * @return {module:productPricingV0/js-client.productPricingV0.model/CompetitivePriceType} The populated <code>CompetitivePriceType</code> instance.
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
      obj = obj || new CompetitivePriceType();
      if (data.hasOwnProperty('CompetitivePriceId'))
        obj.competitivePriceId = ApiClient.convertToType(data['CompetitivePriceId'], 'String');
      if (data.hasOwnProperty('Price'))
        obj.price = PriceType.constructFromObject(data['Price']);
      if (data.hasOwnProperty('condition'))
        obj.condition = ApiClient.convertToType(data['condition'], 'String');
      if (data.hasOwnProperty('subcondition'))
        obj.subcondition = ApiClient.convertToType(data['subcondition'], 'String');
      if (data.hasOwnProperty('offerType'))
        obj.offerType = OfferCustomerType.constructFromObject(data['offerType']);
      if (data.hasOwnProperty('quantityTier'))
        obj.quantityTier = ApiClient.convertToType(data['quantityTier'], 'Number');
      if (data.hasOwnProperty('quantityDiscountType'))
        obj.quantityDiscountType = QuantityDiscountType.constructFromObject(data['quantityDiscountType']);
      if (data.hasOwnProperty('sellerId'))
        obj.sellerId = ApiClient.convertToType(data['sellerId'], 'String');
      if (data.hasOwnProperty('belongsToRequester'))
        obj.belongsToRequester = ApiClient.convertToType(data['belongsToRequester'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The pricing model for each price that is returned.  Possible values:  * 1 - New Buy Box Price. * 2 - Used Buy Box Price.
 * @member {String} competitivePriceId
 */
CompetitivePriceType.prototype.competitivePriceId = undefined;

/**
 * Pricing information for a given CompetitivePriceId value.
 * @member {module:productPricingV0/js-client.productPricingV0.model/PriceType} price
 */
CompetitivePriceType.prototype.price = undefined;

/**
 * Indicates the condition of the item whose pricing information is returned. Possible values are: New, Used, Collectible, Refurbished, or Club.
 * @member {String} condition
 */
CompetitivePriceType.prototype.condition = undefined;

/**
 * Indicates the subcondition of the item whose pricing information is returned. Possible values are: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other.
 * @member {String} subcondition
 */
CompetitivePriceType.prototype.subcondition = undefined;

/**
 * Indicates the type of customer that the offer is valid for.<br><br>When the offer type is B2C in a quantity discount, the seller is winning the Buy Box because others do not have inventory at that quantity, not because they have a quantity discount on the ASIN.
 * @member {module:productPricingV0/js-client.productPricingV0.model/OfferCustomerType} offerType
 */
CompetitivePriceType.prototype.offerType = undefined;

/**
 * Indicates at what quantity this price becomes active.
 * @member {Number} quantityTier
 */
CompetitivePriceType.prototype.quantityTier = undefined;

/**
 * Indicates the type of quantity discount this price applies to.
 * @member {module:productPricingV0/js-client.productPricingV0.model/QuantityDiscountType} quantityDiscountType
 */
CompetitivePriceType.prototype.quantityDiscountType = undefined;

/**
 * The seller identifier for the offer.
 * @member {String} sellerId
 */
CompetitivePriceType.prototype.sellerId = undefined;

/**
 *  Indicates whether or not the pricing information is for an offer listing that belongs to the requester. The requester is the seller associated with the SellerId that was submitted with the request. Possible values are: true and false.
 * @member {Boolean} belongsToRequester
 */
CompetitivePriceType.prototype.belongsToRequester = undefined;

