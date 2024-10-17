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
 * Enum class IneligibilityReasonCode.
 * @enum {String}
 * @readonly
 */
const IneligibilityReasonCode = {
  /**
   * value: "NO_COVERAGE"
   * @const
   */
  NO_COVERAGE: "NO_COVERAGE",

  /**
   * value: "PICKUP_SLOT_RESTRICTION"
   * @const
   */
  PICKUP_SLOT_RESTRICTION: "PICKUP_SLOT_RESTRICTION",

  /**
   * value: "UNSUPPORTED_VAS"
   * @const
   */
  UNSUPPORTED_VAS: "UNSUPPORTED_VAS",

  /**
   * value: "VAS_COMBINATION_RESTRICTION"
   * @const
   */
  VAS_COMBINATION_RESTRICTION: "VAS_COMBINATION_RESTRICTION",

  /**
   * value: "SIZE_RESTRICTIONS"
   * @const
   */
  SIZE_RESTRICTIONS: "SIZE_RESTRICTIONS",

  /**
   * value: "WEIGHT_RESTRICTIONS"
   * @const
   */
  WEIGHT_RESTRICTIONS: "WEIGHT_RESTRICTIONS",

  /**
   * value: "LATE_DELIVERY"
   * @const
   */
  LATE_DELIVERY: "LATE_DELIVERY",

  /**
   * value: "PROGRAM_CONSTRAINTS"
   * @const
   */
  PROGRAM_CONSTRAINTS: "PROGRAM_CONSTRAINTS",

  /**
   * value: "TERMS_AND_CONDITIONS_NOT_ACCEPTED"
   * @const
   */
  TERMS_AND_CONDITIONS_NOT_ACCEPTED: "TERMS_AND_CONDITIONS_NOT_ACCEPTED",

  /**
   * value: "UNKNOWN"
   * @const
   */
  UNKNOWN: "UNKNOWN",

  /**
   * Returns a <code>IneligibilityReasonCode</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:shippingV2/js-client.shippingV2.model/IneligibilityReasonCode} The enum <code>IneligibilityReasonCode</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {IneligibilityReasonCode};