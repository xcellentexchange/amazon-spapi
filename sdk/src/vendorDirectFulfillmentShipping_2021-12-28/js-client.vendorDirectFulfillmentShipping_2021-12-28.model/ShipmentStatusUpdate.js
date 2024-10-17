/*
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor's shipping data.
 *
 * OpenAPI spec version: 2021-12-28
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
import {PartyIdentification} from './PartyIdentification.js';
import {StatusUpdateDetails} from './StatusUpdateDetails.js';

/**
 * The ShipmentStatusUpdate model module.
 * @module vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ShipmentStatusUpdate
 * @version 2021-12-28
 */
export class ShipmentStatusUpdate {
  /**
   * Constructs a new <code>ShipmentStatusUpdate</code>.
   * Represents a shipment status update.
   * @alias module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ShipmentStatusUpdate
   * @class
   * @param purchaseOrderNumber {String} Purchase order number of the shipment for which to update the shipment status.
   * @param sellingParty {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/PartyIdentification} ID of the selling party or vendor.
   * @param shipFromParty {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/PartyIdentification} Warehouse code of vendor.
   * @param statusUpdateDetails {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/StatusUpdateDetails} Provide the details about the status of the shipment at that particular point of time.
   */
  constructor(purchaseOrderNumber, sellingParty, shipFromParty, statusUpdateDetails) {
    this.purchaseOrderNumber = purchaseOrderNumber;
    this.sellingParty = sellingParty;
    this.shipFromParty = shipFromParty;
    this.statusUpdateDetails = statusUpdateDetails;
  }

  /**
   * Constructs a <code>ShipmentStatusUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ShipmentStatusUpdate} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ShipmentStatusUpdate} The populated <code>ShipmentStatusUpdate</code> instance.
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
      obj = obj || new ShipmentStatusUpdate();
      if (data.hasOwnProperty('purchaseOrderNumber'))
        obj.purchaseOrderNumber = ApiClient.convertToType(data['purchaseOrderNumber'], 'String');
      if (data.hasOwnProperty('sellingParty'))
        obj.sellingParty = PartyIdentification.constructFromObject(data['sellingParty']);
      if (data.hasOwnProperty('shipFromParty'))
        obj.shipFromParty = PartyIdentification.constructFromObject(data['shipFromParty']);
      if (data.hasOwnProperty('statusUpdateDetails'))
        obj.statusUpdateDetails = StatusUpdateDetails.constructFromObject(data['statusUpdateDetails']);
    }
    return obj;
  }
}

/**
 * Purchase order number of the shipment for which to update the shipment status.
 * @member {String} purchaseOrderNumber
 */
ShipmentStatusUpdate.prototype.purchaseOrderNumber = undefined;

/**
 * ID of the selling party or vendor.
 * @member {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/PartyIdentification} sellingParty
 */
ShipmentStatusUpdate.prototype.sellingParty = undefined;

/**
 * Warehouse code of vendor.
 * @member {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/PartyIdentification} shipFromParty
 */
ShipmentStatusUpdate.prototype.shipFromParty = undefined;

/**
 * Provide the details about the status of the shipment at that particular point of time.
 * @member {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/StatusUpdateDetails} statusUpdateDetails
 */
ShipmentStatusUpdate.prototype.statusUpdateDetails = undefined;


