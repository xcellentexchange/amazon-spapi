/*
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor's invoice data.
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
import {AdditionalDetails} from './AdditionalDetails.js';
import {ChargeDetails} from './ChargeDetails.js';
import {InvoiceItem} from './InvoiceItem.js';
import {Money} from './Money.js';
import {PartyIdentification} from './PartyIdentification.js';
import {TaxDetail} from './TaxDetail.js';

/**
 * The InvoiceDetail model module.
 * @module vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/InvoiceDetail
 * @version v1
 */
export class InvoiceDetail {
  /**
   * Constructs a new <code>InvoiceDetail</code>.
   * Represents the invoice details, including the invoice number, date, parties involved, payment terms, totals, taxes, charges, and line items.
   * @alias module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/InvoiceDetail
   * @class
   * @param invoiceNumber {String} The unique invoice number.
   * @param invoiceDate {Date} Invoice date.
   * @param remitToParty {module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/PartyIdentification} Name, address and tax details of the party receiving the payment of this invoice.
   * @param shipFromParty {module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/PartyIdentification} Warehouse code of the vendor as in the order.
   * @param invoiceTotal {module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/Money} Total amount details of the invoice.
   * @param items {Array.<module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/InvoiceItem>} Provides the details of the items in this invoice.
   */
  constructor(invoiceNumber, invoiceDate, remitToParty, shipFromParty, invoiceTotal, items) {
    this.invoiceNumber = invoiceNumber;
    this.invoiceDate = invoiceDate;
    this.remitToParty = remitToParty;
    this.shipFromParty = shipFromParty;
    this.invoiceTotal = invoiceTotal;
    this.items = items;
  }

  /**
   * Constructs a <code>InvoiceDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/InvoiceDetail} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/InvoiceDetail} The populated <code>InvoiceDetail</code> instance.
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
      obj = obj || new InvoiceDetail();
      if (data.hasOwnProperty('invoiceNumber'))
        obj.invoiceNumber = ApiClient.convertToType(data['invoiceNumber'], 'String');
      if (data.hasOwnProperty('invoiceDate'))
        obj.invoiceDate = ApiClient.convertToType(data['invoiceDate'], 'Date');
      if (data.hasOwnProperty('referenceNumber'))
        obj.referenceNumber = ApiClient.convertToType(data['referenceNumber'], 'String');
      if (data.hasOwnProperty('remitToParty'))
        obj.remitToParty = PartyIdentification.constructFromObject(data['remitToParty']);
      if (data.hasOwnProperty('shipFromParty'))
        obj.shipFromParty = PartyIdentification.constructFromObject(data['shipFromParty']);
      if (data.hasOwnProperty('billToParty'))
        obj.billToParty = PartyIdentification.constructFromObject(data['billToParty']);
      if (data.hasOwnProperty('shipToCountryCode'))
        obj.shipToCountryCode = ApiClient.convertToType(data['shipToCountryCode'], 'String');
      if (data.hasOwnProperty('paymentTermsCode'))
        obj.paymentTermsCode = ApiClient.convertToType(data['paymentTermsCode'], 'String');
      if (data.hasOwnProperty('invoiceTotal'))
        obj.invoiceTotal = Money.constructFromObject(data['invoiceTotal']);
      if (data.hasOwnProperty('taxTotals'))
        obj.taxTotals = ApiClient.convertToType(data['taxTotals'], [TaxDetail]);
      if (data.hasOwnProperty('additionalDetails'))
        obj.additionalDetails = ApiClient.convertToType(data['additionalDetails'], [AdditionalDetails]);
      if (data.hasOwnProperty('chargeDetails'))
        obj.chargeDetails = ApiClient.convertToType(data['chargeDetails'], [ChargeDetails]);
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [InvoiceItem]);
    }
    return obj;
  }
}

/**
 * The unique invoice number.
 * @member {String} invoiceNumber
 */
InvoiceDetail.prototype.invoiceNumber = undefined;

/**
 * Invoice date.
 * @member {Date} invoiceDate
 */
InvoiceDetail.prototype.invoiceDate = undefined;

/**
 * An additional unique reference number used for regulatory or other purposes.
 * @member {String} referenceNumber
 */
InvoiceDetail.prototype.referenceNumber = undefined;

/**
 * Name, address and tax details of the party receiving the payment of this invoice.
 * @member {module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/PartyIdentification} remitToParty
 */
InvoiceDetail.prototype.remitToParty = undefined;

/**
 * Warehouse code of the vendor as in the order.
 * @member {module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/PartyIdentification} shipFromParty
 */
InvoiceDetail.prototype.shipFromParty = undefined;

/**
 * Name, address and tax details of the party to whom this invoice is issued.
 * @member {module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/PartyIdentification} billToParty
 */
InvoiceDetail.prototype.billToParty = undefined;

/**
 * Ship-to country code.
 * @member {String} shipToCountryCode
 */
InvoiceDetail.prototype.shipToCountryCode = undefined;

/**
 * The payment terms for the invoice.
 * @member {String} paymentTermsCode
 */
InvoiceDetail.prototype.paymentTermsCode = undefined;

/**
 * Total amount details of the invoice.
 * @member {module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/Money} invoiceTotal
 */
InvoiceDetail.prototype.invoiceTotal = undefined;

/**
 * Individual tax details per line item.
 * @member {Array.<module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/TaxDetail>} taxTotals
 */
InvoiceDetail.prototype.taxTotals = undefined;

/**
 * Additional details provided by the selling party, for tax-related or other purposes.
 * @member {Array.<module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/AdditionalDetails>} additionalDetails
 */
InvoiceDetail.prototype.additionalDetails = undefined;

/**
 * Total charge amount details for all line items.
 * @member {Array.<module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/ChargeDetails>} chargeDetails
 */
InvoiceDetail.prototype.chargeDetails = undefined;

/**
 * Provides the details of the items in this invoice.
 * @member {Array.<module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/InvoiceItem>} items
 */
InvoiceDetail.prototype.items = undefined;


