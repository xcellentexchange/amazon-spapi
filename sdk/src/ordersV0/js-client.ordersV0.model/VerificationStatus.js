/*
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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
 * Enum class VerificationStatus.
 * @enum {String}
 * @readonly
 */
const VerificationStatus = {
  /**
   * value: "Pending"
   * @const
   */
  pending: "Pending",

  /**
   * value: "Approved"
   * @const
   */
  approved: "Approved",

  /**
   * value: "Rejected"
   * @const
   */
  rejected: "Rejected",

  /**
   * value: "Expired"
   * @const
   */
  expired: "Expired",

  /**
   * value: "Cancelled"
   * @const
   */
  cancelled: "Cancelled",

  /**
   * Returns a <code>VerificationStatus</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:ordersV0/js-client.ordersV0.model/VerificationStatus} The enum <code>VerificationStatus</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {VerificationStatus};