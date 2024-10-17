/*
 * Selling Partner API for Vendor Direct Fulfillment Sandbox Test Data
 * The Selling Partner API for Vendor Direct Fulfillment Sandbox Test Data provides programmatic access to vendor direct fulfillment sandbox test data.
 *
 * OpenAPI spec version: 2021-10-28
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
import {TestCaseData} from './TestCaseData.js';

/**
 * The Transaction model module.
 * @module vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/Transaction
 * @version 2021-10-28
 */
export class Transaction {
  /**
   * Constructs a new <code>Transaction</code>.
   * The transaction details that include the status. If the transaction is successful, also includes the requested test order data.
   * @alias module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/Transaction
   * @class
   * @param transactionId {String} The unique identifier returned in the response for the `generateOrderScenarios` request.
   * @param status {module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/Transaction.StatusEnum} The current processing status of the transaction.
   */
  constructor(transactionId, status) {
    this.transactionId = transactionId;
    this.status = status;
  }

  /**
   * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/Transaction} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/Transaction} The populated <code>Transaction</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      switch(typeof data) {
        case 'string':
          obj = String(data);
          break;
        case 'number':
          obj = Number(data);
          break;
        case 'boolean':
          obj = Boolean(data);
          break;
      }
      obj = obj || new Transaction();
      if (data.hasOwnProperty('transactionId'))
        obj.transactionId = ApiClient.convertToType(data['transactionId'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('testCaseData'))
        obj.testCaseData = TestCaseData.constructFromObject(data['testCaseData']);
    }
    return obj;
  }
}

/**
 * The unique identifier returned in the response for the `generateOrderScenarios` request.
 * @member {String} transactionId
 */
Transaction.prototype.transactionId = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Transaction.StatusEnum = {
  /**
   * value: "FAILURE"
   * @const
   */
  FAILURE: "FAILURE",

  /**
   * value: "PROCESSING"
   * @const
   */
  PROCESSING: "PROCESSING",

  /**
   * value: "SUCCESS"
   * @const
   */
  SUCCESS: "SUCCESS"
};

/**
 * The current processing status of the transaction.
 * @member {module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/Transaction.StatusEnum} status
 */
Transaction.prototype.status = undefined;

/**
 * Test case data for the transaction. Only available when the transaction status is `SUCCESS`.
 * @member {module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/TestCaseData} testCaseData
 */
Transaction.prototype.testCaseData = undefined;


