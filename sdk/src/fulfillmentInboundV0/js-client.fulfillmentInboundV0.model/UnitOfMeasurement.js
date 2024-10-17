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
 * Enum class UnitOfMeasurement.
 * @enum {String}
 * @readonly
 */
const UnitOfMeasurement = {
  /**
   * value: "inches"
   * @const
   */
  inches: "inches",

  /**
   * value: "centimeters"
   * @const
   */
  centimeters: "centimeters",

  /**
   * Returns a <code>UnitOfMeasurement</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/UnitOfMeasurement} The enum <code>UnitOfMeasurement</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {UnitOfMeasurement};