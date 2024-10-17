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
 * Enum class PrepGuidance.
 * @enum {String}
 * @readonly
 */
const PrepGuidance = {
  /**
   * value: "ConsultHelpDocuments"
   * @const
   */
  consultHelpDocuments: "ConsultHelpDocuments",

  /**
   * value: "NoAdditionalPrepRequired"
   * @const
   */
  noAdditionalPrepRequired: "NoAdditionalPrepRequired",

  /**
   * value: "SeePrepInstructionsList"
   * @const
   */
  seePrepInstructionsList: "SeePrepInstructionsList",

  /**
   * Returns a <code>PrepGuidance</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PrepGuidance} The enum <code>PrepGuidance</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {PrepGuidance};