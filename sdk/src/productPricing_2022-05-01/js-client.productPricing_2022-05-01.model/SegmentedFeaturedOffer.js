/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-05-01
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
import {Condition} from './Condition.js';
import {FeaturedOfferSegment} from './FeaturedOfferSegment.js';
import {FulfillmentType} from './FulfillmentType.js';
import {MoneyType} from './MoneyType.js';
import {Offer} from './Offer.js';
import {Points} from './Points.js';
import {PrimeDetails} from './PrimeDetails.js';
import {ShippingOption} from './ShippingOption.js';

/**
 * The SegmentedFeaturedOffer model module.
 * @module productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/SegmentedFeaturedOffer
 * @version 2022-05-01
 */
export class SegmentedFeaturedOffer extends Offer {
  /**
   * Constructs a new <code>SegmentedFeaturedOffer</code>.
   * A product offer with segment information indicating where it's featured.
   * @alias module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/SegmentedFeaturedOffer
   * @class
   * @extends module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/Offer
   * @param sellerId {String} The seller identifier for the offer.
   * @param condition {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/Condition} Item Condition.
   * @param fulfillmentType {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/FulfillmentType} The fulfillment type for the offer. Possible values are AFN (Amazon Fulfillment Network) and MFN (Merchant Fulfillment Network).
   * @param listingPrice {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/MoneyType} Offer buying price. Does not include shipping, points, or applicable promotions.
   * @param featuredOfferSegments {Array.<module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/FeaturedOfferSegment>} The list of segment information in which the offer is featured.
   */
  constructor(sellerId, condition, fulfillmentType, listingPrice, featuredOfferSegments) {
    super(sellerId, condition, fulfillmentType, listingPrice);
    this.featuredOfferSegments = featuredOfferSegments;
  }

  /**
   * Constructs a <code>SegmentedFeaturedOffer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/SegmentedFeaturedOffer} obj Optional instance to populate.
   * @return {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/SegmentedFeaturedOffer} The populated <code>SegmentedFeaturedOffer</code> instance.
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
      obj = obj || new SegmentedFeaturedOffer();
      Offer.constructFromObject(data, obj);
      if (data.hasOwnProperty('featuredOfferSegments'))
        obj.featuredOfferSegments = ApiClient.convertToType(data['featuredOfferSegments'], [FeaturedOfferSegment]);
    }
    return obj;
  }
}

/**
 * The list of segment information in which the offer is featured.
 * @member {Array.<module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/FeaturedOfferSegment>} featuredOfferSegments
 */
SegmentedFeaturedOffer.prototype.featuredOfferSegments = undefined;

