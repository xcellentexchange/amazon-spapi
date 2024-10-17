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
import {Container} from './Container.js';
import {Item} from './Item.js';
import {PartyIdentification} from './PartyIdentification.js';
import {ShipmentDetails} from './ShipmentDetails.js';

/**
 * The ShipmentConfirmation model module.
 * @module vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShipmentConfirmation
 * @version v1
 */
export class ShipmentConfirmation {
  /**
   * Constructs a new <code>ShipmentConfirmation</code>.
   * Represents the confirmation details of a shipment, including the purchase order number and other shipment details.
   * @alias module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShipmentConfirmation
   * @class
   * @param purchaseOrderNumber {String} Purchase order number corresponding to the shipment.
   * @param shipmentDetails {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShipmentDetails} Shipment information.
   * @param sellingParty {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/PartyIdentification} ID of the selling party or vendor.
   * @param shipFromParty {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/PartyIdentification} Warehouse code of vendor.
   * @param items {Array.<module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/Item>} Provide the details of the items in this shipment. If any of the item details field is common at a package or a pallet level, then provide them at the corresponding package.
   */
  constructor(purchaseOrderNumber, shipmentDetails, sellingParty, shipFromParty, items) {
    this.purchaseOrderNumber = purchaseOrderNumber;
    this.shipmentDetails = shipmentDetails;
    this.sellingParty = sellingParty;
    this.shipFromParty = shipFromParty;
    this.items = items;
  }

  /**
   * Constructs a <code>ShipmentConfirmation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShipmentConfirmation} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShipmentConfirmation} The populated <code>ShipmentConfirmation</code> instance.
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
      obj = obj || new ShipmentConfirmation();
      if (data.hasOwnProperty('purchaseOrderNumber'))
        obj.purchaseOrderNumber = ApiClient.convertToType(data['purchaseOrderNumber'], 'String');
      if (data.hasOwnProperty('shipmentDetails'))
        obj.shipmentDetails = ShipmentDetails.constructFromObject(data['shipmentDetails']);
      if (data.hasOwnProperty('sellingParty'))
        obj.sellingParty = PartyIdentification.constructFromObject(data['sellingParty']);
      if (data.hasOwnProperty('shipFromParty'))
        obj.shipFromParty = PartyIdentification.constructFromObject(data['shipFromParty']);
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [Item]);
      if (data.hasOwnProperty('containers'))
        obj.containers = ApiClient.convertToType(data['containers'], [Container]);
    }
    return obj;
  }
}

/**
 * Purchase order number corresponding to the shipment.
 * @member {String} purchaseOrderNumber
 */
ShipmentConfirmation.prototype.purchaseOrderNumber = undefined;

/**
 * Shipment information.
 * @member {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShipmentDetails} shipmentDetails
 */
ShipmentConfirmation.prototype.shipmentDetails = undefined;

/**
 * ID of the selling party or vendor.
 * @member {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/PartyIdentification} sellingParty
 */
ShipmentConfirmation.prototype.sellingParty = undefined;

/**
 * Warehouse code of vendor.
 * @member {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/PartyIdentification} shipFromParty
 */
ShipmentConfirmation.prototype.shipFromParty = undefined;

/**
 * Provide the details of the items in this shipment. If any of the item details field is common at a package or a pallet level, then provide them at the corresponding package.
 * @member {Array.<module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/Item>} items
 */
ShipmentConfirmation.prototype.items = undefined;

/**
 * Provide the details of the items in this shipment. If any of the item details field is common at a package or a pallet level, then provide them at the corresponding package.
 * @member {Array.<module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/Container>} containers
 */
ShipmentConfirmation.prototype.containers = undefined;

