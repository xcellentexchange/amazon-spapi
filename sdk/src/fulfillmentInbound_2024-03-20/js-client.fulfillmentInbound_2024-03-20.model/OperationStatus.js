/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
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
 * Enum class OperationStatus.
 * @enum {String}
 * @readonly
 */
const OperationStatus = {
  /**
   * value: "SUCCESS"
   * @const
   */
  SUCCESS: "SUCCESS",

  /**
   * value: "FAILED"
   * @const
   */
  FAILED: "FAILED",

  /**
   * value: "IN_PROGRESS"
   * @const
   */
  IN_PROGRESS: "IN_PROGRESS",

  /**
   * Returns a <code>OperationStatus</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/OperationStatus} The enum <code>OperationStatus</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {OperationStatus};