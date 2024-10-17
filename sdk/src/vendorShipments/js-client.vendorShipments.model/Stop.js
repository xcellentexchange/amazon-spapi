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
import {Location} from './Location.js';

/**
 * The Stop model module.
 * @module vendorShipments/js-client.vendorShipments.model/Stop
 * @version v1
 */
export class Stop {
  /**
   * Constructs a new <code>Stop</code>.
   * Contractual or operational port or point relevant to the movement of the cargo.
   * @alias module:vendorShipments/js-client.vendorShipments.model/Stop
   * @class
   * @param functionCode {module:vendorShipments/js-client.vendorShipments.model/Stop.FunctionCodeEnum} Provide the function code.
   */
  constructor(functionCode) {
    this.functionCode = functionCode;
  }

  /**
   * Constructs a <code>Stop</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorShipments/js-client.vendorShipments.model/Stop} obj Optional instance to populate.
   * @return {module:vendorShipments/js-client.vendorShipments.model/Stop} The populated <code>Stop</code> instance.
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
      obj = obj || new Stop();
      if (data.hasOwnProperty('functionCode'))
        obj.functionCode = ApiClient.convertToType(data['functionCode'], 'String');
      if (data.hasOwnProperty('locationIdentification'))
        obj.locationIdentification = Location.constructFromObject(data['locationIdentification']);
      if (data.hasOwnProperty('arrivalTime'))
        obj.arrivalTime = ApiClient.convertToType(data['arrivalTime'], 'Date');
      if (data.hasOwnProperty('departureTime'))
        obj.departureTime = ApiClient.convertToType(data['departureTime'], 'Date');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>functionCode</code> property.
 * @enum {String}
 * @readonly
 */
Stop.FunctionCodeEnum = {
  /**
   * value: "PortOfDischarge"
   * @const
   */
  portOfDischarge: "PortOfDischarge",

  /**
   * value: "FreightPayableAt"
   * @const
   */
  freightPayableAt: "FreightPayableAt",

  /**
   * value: "PortOfLoading"
   * @const
   */
  portOfLoading: "PortOfLoading"
};

/**
 * Provide the function code.
 * @member {module:vendorShipments/js-client.vendorShipments.model/Stop.FunctionCodeEnum} functionCode
 */
Stop.prototype.functionCode = undefined;

/**
 * @member {module:vendorShipments/js-client.vendorShipments.model/Location} locationIdentification
 */
Stop.prototype.locationIdentification = undefined;

/**
 * Date and time of the arrival of the cargo.
 * @member {Date} arrivalTime
 */
Stop.prototype.arrivalTime = undefined;

/**
 * Date and time of the departure of the cargo.
 * @member {Date} departureTime
 */
Stop.prototype.departureTime = undefined;

