/*
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
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
import {ModelDate} from './ModelDate.js';

/**
 * The PaymentsContext model module.
 * @module finances_2024-06-19/js-client.finances_2024-06-19.model/PaymentsContext
 * @version 2024-06-19
 */
export class PaymentsContext {
  /**
   * Constructs a new <code>PaymentsContext</code>.
   * Additional information related to payments-related transactions.
   * @alias module:finances_2024-06-19/js-client.finances_2024-06-19.model/PaymentsContext
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PaymentsContext</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:finances_2024-06-19/js-client.finances_2024-06-19.model/PaymentsContext} obj Optional instance to populate.
   * @return {module:finances_2024-06-19/js-client.finances_2024-06-19.model/PaymentsContext} The populated <code>PaymentsContext</code> instance.
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
      obj = obj || new PaymentsContext();
      if (data.hasOwnProperty('paymentType'))
        obj.paymentType = ApiClient.convertToType(data['paymentType'], 'String');
      if (data.hasOwnProperty('paymentMethod'))
        obj.paymentMethod = ApiClient.convertToType(data['paymentMethod'], 'String');
      if (data.hasOwnProperty('paymentReference'))
        obj.paymentReference = ApiClient.convertToType(data['paymentReference'], 'String');
      if (data.hasOwnProperty('paymentDate'))
        obj.paymentDate = ModelDate.constructFromObject(data['paymentDate']);
    }
    return obj;
  }
}

/**
 * The type of payment.
 * @member {String} paymentType
 */
PaymentsContext.prototype.paymentType = undefined;

/**
 * The method of payment.
 * @member {String} paymentMethod
 */
PaymentsContext.prototype.paymentMethod = undefined;

/**
 * The reference number of the payment.
 * @member {String} paymentReference
 */
PaymentsContext.prototype.paymentReference = undefined;

/**
 * The date of the payment.
 * @member {module:finances_2024-06-19/js-client.finances_2024-06-19.model/ModelDate} paymentDate
 */
PaymentsContext.prototype.paymentDate = undefined;

