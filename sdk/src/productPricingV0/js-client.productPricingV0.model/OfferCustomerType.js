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

/**
 * Enum class OfferCustomerType.
 * @enum {String}
 * @readonly
 */
const OfferCustomerType = {
  /**
   * value: "B2C"
   * @const
   */
  b2C: "B2C",

  /**
   * value: "B2B"
   * @const
   */
  b2B: "B2B",

  /**
   * Returns a <code>OfferCustomerType</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:productPricingV0/js-client.productPricingV0.model/OfferCustomerType} The enum <code>OfferCustomerType</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {OfferCustomerType};
