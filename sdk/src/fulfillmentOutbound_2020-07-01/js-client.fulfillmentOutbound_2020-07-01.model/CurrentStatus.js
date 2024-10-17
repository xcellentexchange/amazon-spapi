/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
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
 * Enum class CurrentStatus.
 * @enum {String}
 * @readonly
 */
const CurrentStatus = {
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
   * value: "RETURNING"
   * @const
   */
  RETURNING: "RETURNING",

  /**
   * value: "RETURNED"
   * @const
   */
  RETURNED: "RETURNED",

  /**
   * value: "UNDELIVERABLE"
   * @const
   */
  UNDELIVERABLE: "UNDELIVERABLE",

  /**
   * value: "DELAYED"
   * @const
   */
  DELAYED: "DELAYED",

  /**
   * value: "AVAILABLE_FOR_PICKUP"
   * @const
   */
  AVAILABLE_FOR_PICKUP: "AVAILABLE_FOR_PICKUP",

  /**
   * value: "CUSTOMER_ACTION"
   * @const
   */
  CUSTOMER_ACTION: "CUSTOMER_ACTION",

  /**
   * value: "UNKNOWN"
   * @const
   */
  UNKNOWN: "UNKNOWN",

  /**
   * value: "OUT_FOR_DELIVERY"
   * @const
   */
  OUT_FOR_DELIVERY: "OUT_FOR_DELIVERY",

  /**
   * value: "DELIVERY_ATTEMPTED"
   * @const
   */
  DELIVERY_ATTEMPTED: "DELIVERY_ATTEMPTED",

  /**
   * value: "PICKUP_SUCCESSFUL"
   * @const
   */
  PICKUP_SUCCESSFUL: "PICKUP_SUCCESSFUL",

  /**
   * value: "PICKUP_CANCELLED"
   * @const
   */
  PICKUP_CANCELLED: "PICKUP_CANCELLED",

  /**
   * value: "PICKUP_ATTEMPTED"
   * @const
   */
  PICKUP_ATTEMPTED: "PICKUP_ATTEMPTED",

  /**
   * value: "PICKUP_SCHEDULED"
   * @const
   */
  PICKUP_SCHEDULED: "PICKUP_SCHEDULED",

  /**
   * value: "RETURN_REQUEST_ACCEPTED"
   * @const
   */
  RETURN_REQUEST_ACCEPTED: "RETURN_REQUEST_ACCEPTED",

  /**
   * value: "REFUND_ISSUED"
   * @const
   */
  REFUND_ISSUED: "REFUND_ISSUED",

  /**
   * value: "RETURN_RECEIVED_IN_FC"
   * @const
   */
  RETURN_RECEIVED_IN_FC: "RETURN_RECEIVED_IN_FC",

  /**
   * Returns a <code>CurrentStatus</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/CurrentStatus} The enum <code>CurrentStatus</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {CurrentStatus};