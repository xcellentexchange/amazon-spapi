/*
 * Selling Partner API for Direct Fulfillment Transaction Status
 * The Selling Partner API for Direct Fulfillment Transaction Status provides programmatic access to a direct fulfillment vendor's transaction status.
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
import {Transaction} from './Transaction.js';

/**
 * The TransactionStatus model module.
 * @module vendorDirectFulfillmentTransactionsV1/js-client.vendorDirectFulfillmentTransactionsV1.model/TransactionStatus
 * @version v1
 */
export class TransactionStatus {
  /**
   * Constructs a new <code>TransactionStatus</code>.
   * The payload for the `getTransactionStatus` operation.
   * @alias module:vendorDirectFulfillmentTransactionsV1/js-client.vendorDirectFulfillmentTransactionsV1.model/TransactionStatus
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TransactionStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentTransactionsV1/js-client.vendorDirectFulfillmentTransactionsV1.model/TransactionStatus} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentTransactionsV1/js-client.vendorDirectFulfillmentTransactionsV1.model/TransactionStatus} The populated <code>TransactionStatus</code> instance.
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
      obj = obj || new TransactionStatus();
      if (data.hasOwnProperty('transactionStatus'))
        obj.transactionStatus = Transaction.constructFromObject(data['transactionStatus']);
    }
    return obj;
  }
}

/**
 * @member {module:vendorDirectFulfillmentTransactionsV1/js-client.vendorDirectFulfillmentTransactionsV1.model/Transaction} transactionStatus
 */
TransactionStatus.prototype.transactionStatus = undefined;


