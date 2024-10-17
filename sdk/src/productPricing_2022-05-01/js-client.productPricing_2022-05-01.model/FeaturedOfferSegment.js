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
import {SegmentDetails} from './SegmentDetails.js';

/**
 * The FeaturedOfferSegment model module.
 * @module productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/FeaturedOfferSegment
 * @version 2022-05-01
 */
export class FeaturedOfferSegment {
  /**
   * Constructs a new <code>FeaturedOfferSegment</code>.
   * Describes the segment in which the offer is featured.
   * @alias module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/FeaturedOfferSegment
   * @class
   * @param customerMembership {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/FeaturedOfferSegment.CustomerMembershipEnum} The customer membership type that make up this segment
   * @param segmentDetails {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/SegmentDetails} The details about the segment.
   */
  constructor(customerMembership, segmentDetails) {
    this.customerMembership = customerMembership;
    this.segmentDetails = segmentDetails;
  }

  /**
   * Constructs a <code>FeaturedOfferSegment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/FeaturedOfferSegment} obj Optional instance to populate.
   * @return {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/FeaturedOfferSegment} The populated <code>FeaturedOfferSegment</code> instance.
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
      obj = obj || new FeaturedOfferSegment();
      if (data.hasOwnProperty('customerMembership'))
        obj.customerMembership = ApiClient.convertToType(data['customerMembership'], 'String');
      if (data.hasOwnProperty('segmentDetails'))
        obj.segmentDetails = SegmentDetails.constructFromObject(data['segmentDetails']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>customerMembership</code> property.
 * @enum {String}
 * @readonly
 */
FeaturedOfferSegment.CustomerMembershipEnum = {
  /**
   * value: "PRIME"
   * @const
   */
  PRIME: "PRIME",

  /**
   * value: "NON_PRIME"
   * @const
   */
  NON_PRIME: "NON_PRIME"
};

/**
 * The customer membership type that make up this segment
 * @member {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/FeaturedOfferSegment.CustomerMembershipEnum} customerMembership
 */
FeaturedOfferSegment.prototype.customerMembership = undefined;

/**
 * The details about the segment.
 * @member {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/SegmentDetails} segmentDetails
 */
FeaturedOfferSegment.prototype.segmentDetails = undefined;

