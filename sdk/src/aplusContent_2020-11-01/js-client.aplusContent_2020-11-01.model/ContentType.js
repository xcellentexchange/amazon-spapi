/*
 * Selling Partner API for A+ Content Management
 * With the A+ Content API, you can build applications that help selling partners add rich marketing content to their Amazon product detail pages. A+ content helps selling partners share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners assemble content by choosing from content modules and adding images and text.
 *
 * OpenAPI spec version: 2020-11-01
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
 * Enum class ContentType.
 * @enum {String}
 * @readonly
 */
const ContentType = {
  /**
   * value: "EBC"
   * @const
   */
  EBC: "EBC",

  /**
   * value: "EMC"
   * @const
   */
  EMC: "EMC",

  /**
   * Returns a <code>ContentType</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/ContentType} The enum <code>ContentType</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {ContentType};