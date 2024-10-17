/*
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor's shipping data.
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
import {LabelData} from './LabelData.js';
import {PartyIdentification} from './PartyIdentification.js';

/**
 * The ShippingLabel model module.
 * @module vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShippingLabel
 * @version v1
 */
export class ShippingLabel {
  /**
   * Constructs a new <code>ShippingLabel</code>.
   * Shipping label information for an order, including the purchase order number, selling party, ship from party, label format, and package details.
   * @alias module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShippingLabel
   * @class
   * @param purchaseOrderNumber {String} This field will contain the Purchase Order Number for this order.
   * @param sellingParty {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/PartyIdentification} ID of the selling party or vendor.
   * @param shipFromParty {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/PartyIdentification} Warehouse code of vendor.
   * @param labelFormat {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShippingLabel.LabelFormatEnum} Format of the label.
   * @param labelData {Array.<module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/LabelData>} Provides the details of the packages in this shipment.
   */
  constructor(purchaseOrderNumber, sellingParty, shipFromParty, labelFormat, labelData) {
    this.purchaseOrderNumber = purchaseOrderNumber;
    this.sellingParty = sellingParty;
    this.shipFromParty = shipFromParty;
    this.labelFormat = labelFormat;
    this.labelData = labelData;
  }

  /**
   * Constructs a <code>ShippingLabel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShippingLabel} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShippingLabel} The populated <code>ShippingLabel</code> instance.
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
      obj = obj || new ShippingLabel();
      if (data.hasOwnProperty('purchaseOrderNumber'))
        obj.purchaseOrderNumber = ApiClient.convertToType(data['purchaseOrderNumber'], 'String');
      if (data.hasOwnProperty('sellingParty'))
        obj.sellingParty = PartyIdentification.constructFromObject(data['sellingParty']);
      if (data.hasOwnProperty('shipFromParty'))
        obj.shipFromParty = PartyIdentification.constructFromObject(data['shipFromParty']);
      if (data.hasOwnProperty('labelFormat'))
        obj.labelFormat = ApiClient.convertToType(data['labelFormat'], 'String');
      if (data.hasOwnProperty('labelData'))
        obj.labelData = ApiClient.convertToType(data['labelData'], [LabelData]);
    }
    return obj;
  }
}

/**
 * This field will contain the Purchase Order Number for this order.
 * @member {String} purchaseOrderNumber
 */
ShippingLabel.prototype.purchaseOrderNumber = undefined;

/**
 * ID of the selling party or vendor.
 * @member {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/PartyIdentification} sellingParty
 */
ShippingLabel.prototype.sellingParty = undefined;

/**
 * Warehouse code of vendor.
 * @member {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/PartyIdentification} shipFromParty
 */
ShippingLabel.prototype.shipFromParty = undefined;

/**
 * Allowed values for the <code>labelFormat</code> property.
 * @enum {String}
 * @readonly
 */
ShippingLabel.LabelFormatEnum = {
  /**
   * value: "PNG"
   * @const
   */
  PNG: "PNG",

  /**
   * value: "ZPL"
   * @const
   */
  ZPL: "ZPL"
};

/**
 * Format of the label.
 * @member {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShippingLabel.LabelFormatEnum} labelFormat
 */
ShippingLabel.prototype.labelFormat = undefined;

/**
 * Provides the details of the packages in this shipment.
 * @member {Array.<module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/LabelData>} labelData
 */
ShippingLabel.prototype.labelData = undefined;

