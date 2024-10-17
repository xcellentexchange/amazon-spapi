/*
 * Selling Partner API for Merchant Fulfillment
 * The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.
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
 * Enum class UnitOfLength.
 * @enum {String}
 * @readonly
 */
const UnitOfLength = {
  /**
   * value: "inches"
   * @const
   */
  inches: "inches",

  /**
   * value: "centimeters"
   * @const
   */
  centimeters: "centimeters",

  /**
   * Returns a <code>UnitOfLength</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/UnitOfLength} The enum <code>UnitOfLength</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {UnitOfLength};