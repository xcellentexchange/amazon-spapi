/*
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
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
 * The TransactionId model module.
 * @module vendorInvoices/js-client.vendorInvoices.model/TransactionId
 * @version v1
 */
export class TransactionId {
  /**
   * Constructs a new <code>TransactionId</code>.
   * Response containing the transaction ID.
   * @alias module:vendorInvoices/js-client.vendorInvoices.model/TransactionId
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TransactionId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorInvoices/js-client.vendorInvoices.model/TransactionId} obj Optional instance to populate.
   * @return {module:vendorInvoices/js-client.vendorInvoices.model/TransactionId} The populated <code>TransactionId</code> instance.
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
      obj = obj || new TransactionId();
      if (data.hasOwnProperty('transactionId'))
        obj.transactionId = ApiClient.convertToType(data['transactionId'], 'String');
    }
    return obj;
  }
}

/**
 * GUID to identify this transaction. This value can be used with the Transaction Status API to return the status of this transaction.
 * @member {String} transactionId
 */
TransactionId.prototype.transactionId = undefined;


