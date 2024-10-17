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

/**
 * Enum class Condition.
 * @enum {String}
 * @readonly
 */
const Condition = {
  /**
   * value: "New"
   * @const
   */
  _new: "New",

  /**
   * value: "Used"
   * @const
   */
  used: "Used",

  /**
   * value: "Collectible"
   * @const
   */
  collectible: "Collectible",

  /**
   * value: "Refurbished"
   * @const
   */
  refurbished: "Refurbished",

  /**
   * value: "Club"
   * @const
   */
  club: "Club",

  /**
   * Returns a <code>Condition</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/Condition} The enum <code>Condition</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {Condition};
