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
import {Volume} from './Volume.js';
import {Weight} from './Weight.js';

/**
 * The ShipmentMeasurements model module.
 * @module vendorShipments/js-client.vendorShipments.model/ShipmentMeasurements
 * @version v1
 */
export class ShipmentMeasurements {
  /**
   * Constructs a new <code>ShipmentMeasurements</code>.
   * Shipment measurement details.
   * @alias module:vendorShipments/js-client.vendorShipments.model/ShipmentMeasurements
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ShipmentMeasurements</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorShipments/js-client.vendorShipments.model/ShipmentMeasurements} obj Optional instance to populate.
   * @return {module:vendorShipments/js-client.vendorShipments.model/ShipmentMeasurements} The populated <code>ShipmentMeasurements</code> instance.
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
      obj = obj || new ShipmentMeasurements();
      if (data.hasOwnProperty('grossShipmentWeight'))
        obj.grossShipmentWeight = Weight.constructFromObject(data['grossShipmentWeight']);
      if (data.hasOwnProperty('shipmentVolume'))
        obj.shipmentVolume = Volume.constructFromObject(data['shipmentVolume']);
      if (data.hasOwnProperty('cartonCount'))
        obj.cartonCount = ApiClient.convertToType(data['cartonCount'], 'Number');
      if (data.hasOwnProperty('palletCount'))
        obj.palletCount = ApiClient.convertToType(data['palletCount'], 'Number');
    }
    return obj;
  }
}

/**
 * Gross weight of the shipment.
 * @member {module:vendorShipments/js-client.vendorShipments.model/Weight} grossShipmentWeight
 */
ShipmentMeasurements.prototype.grossShipmentWeight = undefined;

/**
 * Gross Volume of the shipment.
 * @member {module:vendorShipments/js-client.vendorShipments.model/Volume} shipmentVolume
 */
ShipmentMeasurements.prototype.shipmentVolume = undefined;

/**
 * Number of cartons present in the shipment. Provide the cartonCount only for non-palletized shipments.
 * @member {Number} cartonCount
 */
ShipmentMeasurements.prototype.cartonCount = undefined;

/**
 * Number of pallets present in the shipment. Provide the palletCount only for palletized shipments.
 * @member {Number} palletCount
 */
ShipmentMeasurements.prototype.palletCount = undefined;

