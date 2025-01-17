/*
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
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
 * Enum class CapacityType.
 * @enum {String}
 * @readonly
 */
const CapacityType = {
  /**
   * value: "SCHEDULED_CAPACITY"
   * @const
   */
  SCHEDULED_CAPACITY: "SCHEDULED_CAPACITY",

  /**
   * value: "AVAILABLE_CAPACITY"
   * @const
   */
  AVAILABLE_CAPACITY: "AVAILABLE_CAPACITY",

  /**
   * value: "ENCUMBERED_CAPACITY"
   * @const
   */
  ENCUMBERED_CAPACITY: "ENCUMBERED_CAPACITY",

  /**
   * value: "RESERVED_CAPACITY"
   * @const
   */
  RESERVED_CAPACITY: "RESERVED_CAPACITY",

  /**
   * Returns a <code>CapacityType</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:services/js-client.services.model/CapacityType} The enum <code>CapacityType</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {CapacityType};
