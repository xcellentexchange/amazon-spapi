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
 * Enum class ReturnItemDisposition.
 * @enum {String}
 * @readonly
 */
const ReturnItemDisposition = {
  /**
   * value: "Sellable"
   * @const
   */
  sellable: "Sellable",

  /**
   * value: "Defective"
   * @const
   */
  defective: "Defective",

  /**
   * value: "CustomerDamaged"
   * @const
   */
  customerDamaged: "CustomerDamaged",

  /**
   * value: "CarrierDamaged"
   * @const
   */
  carrierDamaged: "CarrierDamaged",

  /**
   * value: "FulfillerDamaged"
   * @const
   */
  fulfillerDamaged: "FulfillerDamaged",

  /**
   * Returns a <code>ReturnItemDisposition</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/ReturnItemDisposition} The enum <code>ReturnItemDisposition</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {ReturnItemDisposition};
