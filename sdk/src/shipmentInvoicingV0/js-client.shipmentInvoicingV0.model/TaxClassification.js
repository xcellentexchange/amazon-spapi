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
 * The TaxClassification model module.
 * @module shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/TaxClassification
 * @version v0
 */
export class TaxClassification {
  /**
   * Constructs a new <code>TaxClassification</code>.
   * The tax classification for the entity.
   * @alias module:shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/TaxClassification
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaxClassification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/TaxClassification} obj Optional instance to populate.
   * @return {module:shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/TaxClassification} The populated <code>TaxClassification</code> instance.
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
      obj = obj || new TaxClassification();
      if (data.hasOwnProperty('Name'))
        obj.name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Value'))
        obj.value = ApiClient.convertToType(data['Value'], 'String');
    }
    return obj;
  }
}

/**
 * The type of tax.
 * @member {String} name
 */
TaxClassification.prototype.name = undefined;

/**
 * The entity's tax identifier.
 * @member {String} value
 */
TaxClassification.prototype.value = undefined;

