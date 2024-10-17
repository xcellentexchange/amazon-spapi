/*
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.   **Note:** If you are new to the Amazon Shipping API, refer to the latest version of <a href=\"https://developer-docs.amazon.com/amazon-shipping/docs/shipping-api-v2-reference\">Amazon Shipping API (v2)</a> on the <a href=\"https://developer-docs.amazon.com/amazon-shipping/\">Amazon Shipping Developer Documentation</a> site.
 *
 * OpenAPI spec version: v1
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
 * Enum class ServiceType.
 * @enum {String}
 * @readonly
 */
const ServiceType = {
  /**
   * value: "Amazon Shipping Ground"
   * @const
   */
  ground: "Amazon Shipping Ground",

  /**
   * value: "Amazon Shipping Standard"
   * @const
   */
  standard: "Amazon Shipping Standard",

  /**
   * value: "Amazon Shipping Premium"
   * @const
   */
  premium: "Amazon Shipping Premium",

  /**
   * Returns a <code>ServiceType</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:shipping/js-client.shipping.model/ServiceType} The enum <code>ServiceType</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {ServiceType};
