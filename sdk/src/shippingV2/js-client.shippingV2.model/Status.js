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
 * Enum class Status.
 * @enum {String}
 * @readonly
 */
const Status = {
  /**
   * value: "PreTransit"
   * @const
   */
  preTransit: "PreTransit",

  /**
   * value: "InTransit"
   * @const
   */
  inTransit: "InTransit",

  /**
   * value: "Delivered"
   * @const
   */
  delivered: "Delivered",

  /**
   * value: "Lost"
   * @const
   */
  lost: "Lost",

  /**
   * value: "OutForDelivery"
   * @const
   */
  outForDelivery: "OutForDelivery",

  /**
   * value: "Rejected"
   * @const
   */
  rejected: "Rejected",

  /**
   * value: "Undeliverable"
   * @const
   */
  undeliverable: "Undeliverable",

  /**
   * value: "DeliveryAttempted"
   * @const
   */
  deliveryAttempted: "DeliveryAttempted",

  /**
   * value: "PickupCancelled"
   * @const
   */
  pickupCancelled: "PickupCancelled",

  /**
   * Returns a <code>Status</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:shippingV2/js-client.shippingV2.model/Status} The enum <code>Status</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {Status};
