/*
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * OpenAPI spec version: 2022-11-07
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
 * Enum class EnrollmentMethod.
 * @enum {String}
 * @readonly
 */
const EnrollmentMethod = {
  /**
   * value: "MANUAL"
   * @const
   */
  MANUAL: "MANUAL",

  /**
   * value: "AUTOMATIC"
   * @const
   */
  AUTOMATIC: "AUTOMATIC",

  /**
   * Returns a <code>EnrollmentMethod</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/EnrollmentMethod} The enum <code>EnrollmentMethod</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {EnrollmentMethod};