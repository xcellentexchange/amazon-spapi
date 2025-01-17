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
 * Enum class PackageStatus.
 * @enum {String}
 * @readonly
 */
const PackageStatus = {
  /**
   * value: "SHIPPED"
   * @const
   */
  SHIPPED: "SHIPPED",

  /**
   * value: "IN_TRANSIT"
   * @const
   */
  IN_TRANSIT: "IN_TRANSIT",

  /**
   * value: "DELIVERED"
   * @const
   */
  DELIVERED: "DELIVERED",

  /**
   * value: "CHECKED_IN"
   * @const
   */
  CHECKED_IN: "CHECKED_IN",

  /**
   * value: "RECEIVING"
   * @const
   */
  RECEIVING: "RECEIVING",

  /**
   * value: "CLOSED"
   * @const
   */
  CLOSED: "CLOSED",

  /**
   * value: "DELETED"
   * @const
   */
  DELETED: "DELETED",

  /**
   * Returns a <code>PackageStatus</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PackageStatus} The enum <code>PackageStatus</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {PackageStatus};
