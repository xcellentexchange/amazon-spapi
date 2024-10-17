/*
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
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
 * The SubmitInvoiceRequest model module.
 * @module shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/SubmitInvoiceRequest
 * @version v0
 */
export class SubmitInvoiceRequest {
  /**
   * Constructs a new <code>SubmitInvoiceRequest</code>.
   * The request schema for the submitInvoice operation.
   * @alias module:shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/SubmitInvoiceRequest
   * @class
   * @param invoiceContent {Blob} 
   * @param contentMD5Value {String} MD5 sum for validating the invoice data. For more information about calculating this value, see [Working with Content-MD5 Checksums](https://docs.developer.amazonservices.com/en_US/dev_guide/DG_MD5.html).
   */
  constructor(invoiceContent, contentMD5Value) {
    this.invoiceContent = invoiceContent;
    this.contentMD5Value = contentMD5Value;
  }

  /**
   * Constructs a <code>SubmitInvoiceRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/SubmitInvoiceRequest} obj Optional instance to populate.
   * @return {module:shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/SubmitInvoiceRequest} The populated <code>SubmitInvoiceRequest</code> instance.
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
      obj = obj || new SubmitInvoiceRequest();
      if (data.hasOwnProperty('InvoiceContent'))
        obj.invoiceContent = 'Blob'.constructFromObject(data['InvoiceContent']);
      if (data.hasOwnProperty('MarketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['MarketplaceId'], 'String');
      if (data.hasOwnProperty('ContentMD5Value'))
        obj.contentMD5Value = ApiClient.convertToType(data['ContentMD5Value'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Blob} invoiceContent
 */
SubmitInvoiceRequest.prototype.invoiceContent = undefined;

/**
 * An Amazon marketplace identifier.
 * @member {String} marketplaceId
 */
SubmitInvoiceRequest.prototype.marketplaceId = undefined;

/**
 * MD5 sum for validating the invoice data. For more information about calculating this value, see [Working with Content-MD5 Checksums](https://docs.developer.amazonservices.com/en_US/dev_guide/DG_MD5.html).
 * @member {String} contentMD5Value
 */
SubmitInvoiceRequest.prototype.contentMD5Value = undefined;

