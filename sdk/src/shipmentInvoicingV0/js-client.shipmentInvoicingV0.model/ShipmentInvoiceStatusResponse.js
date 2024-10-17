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
import {ShipmentInvoiceStatusInfo} from './ShipmentInvoiceStatusInfo.js';

/**
 * The ShipmentInvoiceStatusResponse model module.
 * @module shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/ShipmentInvoiceStatusResponse
 * @version v0
 */
export class ShipmentInvoiceStatusResponse {
  /**
   * Constructs a new <code>ShipmentInvoiceStatusResponse</code>.
   * The shipment invoice status response.
   * @alias module:shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/ShipmentInvoiceStatusResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ShipmentInvoiceStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/ShipmentInvoiceStatusResponse} obj Optional instance to populate.
   * @return {module:shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/ShipmentInvoiceStatusResponse} The populated <code>ShipmentInvoiceStatusResponse</code> instance.
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
      obj = obj || new ShipmentInvoiceStatusResponse();
      if (data.hasOwnProperty('Shipments'))
        obj.shipments = ShipmentInvoiceStatusInfo.constructFromObject(data['Shipments']);
    }
    return obj;
  }
}

/**
 * @member {module:shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/ShipmentInvoiceStatusInfo} shipments
 */
ShipmentInvoiceStatusResponse.prototype.shipments = undefined;


