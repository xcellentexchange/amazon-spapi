/*
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
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
 * Enum class ParkingSpotIdentificationType.
 * @enum {String}
 * @readonly
 */
const ParkingSpotIdentificationType = {
  /**
   * value: "Numbered"
   * @const
   */
  numbered: "Numbered",

  /**
   * value: "Other"
   * @const
   */
  other: "Other",

  /**
   * Returns a <code>ParkingSpotIdentificationType</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/ParkingSpotIdentificationType} The enum <code>ParkingSpotIdentificationType</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {ParkingSpotIdentificationType};