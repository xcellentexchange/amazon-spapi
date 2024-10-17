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
 * Enum class HttpMethod.
 * @enum {String}
 * @readonly
 */
const HttpMethod = {
  /**
   * value: "GET"
   * @const
   */
  GET: "GET",

  /**
   * value: "PUT"
   * @const
   */
  PUT: "PUT",

  /**
   * value: "PATCH"
   * @const
   */
  PATCH: "PATCH",

  /**
   * value: "DELETE"
   * @const
   */
  DELETE: "DELETE",

  /**
   * value: "POST"
   * @const
   */
  POST: "POST",

  /**
   * Returns a <code>HttpMethod</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:productPricingV0/js-client.productPricingV0.model/HttpMethod} The enum <code>HttpMethod</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {HttpMethod};