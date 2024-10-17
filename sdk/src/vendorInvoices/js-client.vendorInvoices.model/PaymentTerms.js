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
 * The PaymentTerms model module.
 * @module vendorInvoices/js-client.vendorInvoices.model/PaymentTerms
 * @version v1
 */
export class PaymentTerms {
  /**
   * Constructs a new <code>PaymentTerms</code>.
   * Terms of the payment for the invoice. The basis of the payment terms is the invoice date.
   * @alias module:vendorInvoices/js-client.vendorInvoices.model/PaymentTerms
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PaymentTerms</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorInvoices/js-client.vendorInvoices.model/PaymentTerms} obj Optional instance to populate.
   * @return {module:vendorInvoices/js-client.vendorInvoices.model/PaymentTerms} The populated <code>PaymentTerms</code> instance.
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
      obj = obj || new PaymentTerms();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('discountPercent'))
        obj.discountPercent = Decimal.constructFromObject(data['discountPercent']);
      if (data.hasOwnProperty('discountDueDays'))
        obj.discountDueDays = ApiClient.convertToType(data['discountDueDays'], 'Number');
      if (data.hasOwnProperty('netDueDays'))
        obj.netDueDays = ApiClient.convertToType(data['netDueDays'], 'Number');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
PaymentTerms.TypeEnum = {
  /**
   * value: "Basic"
   * @const
   */
  basic: "Basic",

  /**
   * value: "EndOfMonth"
   * @const
   */
  endOfMonth: "EndOfMonth",

  /**
   * value: "FixedDate"
   * @const
   */
  fixedDate: "FixedDate",

  /**
   * value: "Proximo"
   * @const
   */
  proximo: "Proximo",

  /**
   * value: "PaymentDueUponReceiptOfInvoice"
   * @const
   */
  paymentDueUponReceiptOfInvoice: "PaymentDueUponReceiptOfInvoice",

  /**
   * value: "LetterofCredit"
   * @const
   */
  letterofCredit: "LetterofCredit"
};

/**
 * The payment term type for the invoice.
 * @member {module:vendorInvoices/js-client.vendorInvoices.model/PaymentTerms.TypeEnum} type
 */
PaymentTerms.prototype.type = undefined;

/**
 * The discount percent value, which is good until the discount due date.
 * @member {module:vendorInvoices/js-client.vendorInvoices.model/Decimal} discountPercent
 */
PaymentTerms.prototype.discountPercent = undefined;

/**
 * The number of calendar days from the base date (Invoice date) until the discount is no longer valid.
 * @member {Number} discountDueDays
 */
PaymentTerms.prototype.discountDueDays = undefined;

/**
 * The number of calendar days from the base date (invoice date) until the total amount on the invoice is due.
 * @member {Number} netDueDays
 */
PaymentTerms.prototype.netDueDays = undefined;

