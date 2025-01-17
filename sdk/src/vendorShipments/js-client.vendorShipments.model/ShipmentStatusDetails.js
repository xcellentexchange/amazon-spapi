/*
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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

/**
 * The ShipmentStatusDetails model module.
 * @module vendorShipments/js-client.vendorShipments.model/ShipmentStatusDetails
 * @version v1
 */
export class ShipmentStatusDetails {
  /**
   * Constructs a new <code>ShipmentStatusDetails</code>.
   * Shipment Status details.
   * @alias module:vendorShipments/js-client.vendorShipments.model/ShipmentStatusDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ShipmentStatusDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorShipments/js-client.vendorShipments.model/ShipmentStatusDetails} obj Optional instance to populate.
   * @return {module:vendorShipments/js-client.vendorShipments.model/ShipmentStatusDetails} The populated <code>ShipmentStatusDetails</code> instance.
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
      obj = obj || new ShipmentStatusDetails();
      if (data.hasOwnProperty('shipmentStatus'))
        obj.shipmentStatus = ApiClient.convertToType(data['shipmentStatus'], 'String');
      if (data.hasOwnProperty('shipmentStatusDate'))
        obj.shipmentStatusDate = ApiClient.convertToType(data['shipmentStatusDate'], 'Date');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>shipmentStatus</code> property.
 * @enum {String}
 * @readonly
 */
ShipmentStatusDetails.ShipmentStatusEnum = {
  /**
   * value: "Created"
   * @const
   */
  created: "Created",

  /**
   * value: "TransportationRequested"
   * @const
   */
  transportationRequested: "TransportationRequested",

  /**
   * value: "CarrierAssigned"
   * @const
   */
  carrierAssigned: "CarrierAssigned",

  /**
   * value: "Shipped"
   * @const
   */
  shipped: "Shipped"
};

/**
 * Current status of the shipment on whether it is picked up or scheduled.
 * @member {module:vendorShipments/js-client.vendorShipments.model/ShipmentStatusDetails.ShipmentStatusEnum} shipmentStatus
 */
ShipmentStatusDetails.prototype.shipmentStatus = undefined;

/**
 * Date and time on last status update received for the shipment
 * @member {Date} shipmentStatusDate
 */
ShipmentStatusDetails.prototype.shipmentStatusDate = undefined;


