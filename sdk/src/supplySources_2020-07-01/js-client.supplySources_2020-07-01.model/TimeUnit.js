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
 * Enum class TimeUnit.
 * @enum {String}
 * @readonly
 */
const TimeUnit = {
  /**
   * value: "Hours"
   * @const
   */
  hours: "Hours",

  /**
   * value: "Minutes"
   * @const
   */
  minutes: "Minutes",

  /**
   * value: "Days"
   * @const
   */
  days: "Days",

  /**
   * Returns a <code>TimeUnit</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/TimeUnit} The enum <code>TimeUnit</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {TimeUnit};
