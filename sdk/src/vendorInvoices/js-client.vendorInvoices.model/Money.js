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
import {Decimal} from './Decimal.js';

/**
 * The Money model module.
 * @module vendorInvoices/js-client.vendorInvoices.model/Money
 * @version v1
 */
export class Money {
  /**
   * Constructs a new <code>Money</code>.
   * An amount of money, including units in the form of currency.
   * @alias module:vendorInvoices/js-client.vendorInvoices.model/Money
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Money</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorInvoices/js-client.vendorInvoices.model/Money} obj Optional instance to populate.
   * @return {module:vendorInvoices/js-client.vendorInvoices.model/Money} The populated <code>Money</code> instance.
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
      obj = obj || new Money();
      if (data.hasOwnProperty('currencyCode'))
        obj.currencyCode = ApiClient.convertToType(data['currencyCode'], 'String');
      if (data.hasOwnProperty('amount'))
        obj.amount = Decimal.constructFromObject(data['amount']);
    }
    return obj;
  }
}

/**
 * Three-digit currency code in ISO 4217 format.
 * @member {String} currencyCode
 */
Money.prototype.currencyCode = undefined;

/**
 * @member {module:vendorInvoices/js-client.vendorInvoices.model/Decimal} amount
 */
Money.prototype.amount = undefined;

