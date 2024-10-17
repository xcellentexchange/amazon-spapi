/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
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
 * Enum class AccountType.
 * @enum {String}
 * @readonly
 */
const AccountType = {
  /**
   * value: "SHIPPER_ACCOUNT"
   * @const
   */
  SHIPPER_ACCOUNT: "SHIPPER_ACCOUNT",

  /**
   * value: "SHIPPER_ACCOUNT_WITH_INVOICE"
   * @const
   */
  SHIPPER_ACCOUNT_WITH_INVOICE: "SHIPPER_ACCOUNT_WITH_INVOICE",

  /**
   * value: "AMAZON_ACCOUNT"
   * @const
   */
  AMAZON_ACCOUNT: "AMAZON_ACCOUNT",

  /**
   * Returns a <code>AccountType</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:shippingV2/js-client.shippingV2.model/AccountType} The enum <code>AccountType</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {AccountType};