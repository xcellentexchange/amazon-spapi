/*
 * Selling Partner API for Easy Ship
 * The Selling Partner API for Easy Ship helps you build applications that help sellers manage and ship Amazon Easy Ship orders.  Your Easy Ship applications can:  * Get available time slots for packages to be scheduled for delivery.  * Schedule, reschedule, and cancel Easy Ship orders.  * Print labels, invoices, and warranties.  See the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) for the differences in Easy Ship operations by marketplace.
 *
 * OpenAPI spec version: 2022-03-23
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
 * Enum class Code.
 * @enum {String}
 * @readonly
 */
const Code = {
  /**
   * value: "InvalidInput"
   * @const
   */
  invalidInput: "InvalidInput",

  /**
   * value: "InvalidTimeSlotId"
   * @const
   */
  invalidTimeSlotId: "InvalidTimeSlotId",

  /**
   * value: "ScheduledPackageAlreadyExists"
   * @const
   */
  scheduledPackageAlreadyExists: "ScheduledPackageAlreadyExists",

  /**
   * value: "ScheduleWindowExpired"
   * @const
   */
  scheduleWindowExpired: "ScheduleWindowExpired",

  /**
   * value: "RetryableAfterGettingNewSlots"
   * @const
   */
  retryableAfterGettingNewSlots: "RetryableAfterGettingNewSlots",

  /**
   * value: "TimeSlotNotAvailable"
   * @const
   */
  timeSlotNotAvailable: "TimeSlotNotAvailable",

  /**
   * value: "ResourceNotFound"
   * @const
   */
  resourceNotFound: "ResourceNotFound",

  /**
   * value: "InvalidOrderState"
   * @const
   */
  invalidOrderState: "InvalidOrderState",

  /**
   * value: "RegionNotSupported"
   * @const
   */
  regionNotSupported: "RegionNotSupported",

  /**
   * value: "OrderNotEligibleForRescheduling"
   * @const
   */
  orderNotEligibleForRescheduling: "OrderNotEligibleForRescheduling",

  /**
   * value: "InternalServerError"
   * @const
   */
  internalServerError: "InternalServerError",

  /**
   * Returns a <code>Code</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/Code} The enum <code>Code</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {Code};