/*
 * The Selling Partner API for Invoices.
 * Use the Selling Partner API for Invoices to retrieve and manage invoice-related operations, which can help selling partners manage their bookkeeping processes.
 *
 * OpenAPI spec version: 2024-06-19
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
 * Enum class ExportStatus.
 * @enum {String}
 * @readonly
 */
const ExportStatus = {
  /**
   * value: "REQUESTED"
   * @const
   */
  REQUESTED: "REQUESTED",

  /**
   * value: "PROCESSING"
   * @const
   */
  PROCESSING: "PROCESSING",

  /**
   * value: "DONE"
   * @const
   */
  DONE: "DONE",

  /**
   * value: "ERROR"
   * @const
   */
  ERROR: "ERROR",

  /**
   * Returns a <code>ExportStatus</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/ExportStatus} The enum <code>ExportStatus</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {ExportStatus};