/*
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
 * Enum class ErrorReason.
 * @enum {String}
 * @readonly
 */
const ErrorReason = {
  /**
   * value: "DoesNotExist"
   * @const
   */
  doesNotExist: "DoesNotExist",

  /**
   * value: "InvalidASIN"
   * @const
   */
  invalidASIN: "InvalidASIN",

  /**
   * Returns a <code>ErrorReason</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/ErrorReason} The enum <code>ErrorReason</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {ErrorReason};
