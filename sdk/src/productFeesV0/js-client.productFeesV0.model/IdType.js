/*
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
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
 * Enum class IdType.
 * @enum {String}
 * @readonly
 */
const IdType = {
  /**
   * value: "ASIN"
   * @const
   */
  ASIN: "ASIN",

  /**
   * value: "SellerSKU"
   * @const
   */
  sellerSKU: "SellerSKU",

  /**
   * Returns a <code>IdType</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:productFeesV0/js-client.productFeesV0.model/IdType} The enum <code>IdType</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {IdType};
