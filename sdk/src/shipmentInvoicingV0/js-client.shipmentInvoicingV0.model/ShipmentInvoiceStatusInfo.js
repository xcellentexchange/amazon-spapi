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
import {ShipmentInvoiceStatus} from './ShipmentInvoiceStatus.js';

/**
 * The ShipmentInvoiceStatusInfo model module.
 * @module shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/ShipmentInvoiceStatusInfo
 * @version v0
 */
export class ShipmentInvoiceStatusInfo {
  /**
   * Constructs a new <code>ShipmentInvoiceStatusInfo</code>.
   * The shipment invoice status information.
   * @alias module:shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/ShipmentInvoiceStatusInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ShipmentInvoiceStatusInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/ShipmentInvoiceStatusInfo} obj Optional instance to populate.
   * @return {module:shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/ShipmentInvoiceStatusInfo} The populated <code>ShipmentInvoiceStatusInfo</code> instance.
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
      obj = obj || new ShipmentInvoiceStatusInfo();
      if (data.hasOwnProperty('AmazonShipmentId'))
        obj.amazonShipmentId = ApiClient.convertToType(data['AmazonShipmentId'], 'String');
      if (data.hasOwnProperty('InvoiceStatus'))
        obj.invoiceStatus = ShipmentInvoiceStatus.constructFromObject(data['InvoiceStatus']);
    }
    return obj;
  }
}

/**
 * The Amazon-defined shipment identifier.
 * @member {String} amazonShipmentId
 */
ShipmentInvoiceStatusInfo.prototype.amazonShipmentId = undefined;

/**
 * @member {module:shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/ShipmentInvoiceStatus} invoiceStatus
 */
ShipmentInvoiceStatusInfo.prototype.invoiceStatus = undefined;


