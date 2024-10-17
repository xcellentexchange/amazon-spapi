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
import {Duration} from './Duration.js';

/**
 * The Expiry model module.
 * @module vendorShipments/js-client.vendorShipments.model/Expiry
 * @version v1
 */
export class Expiry {
  /**
   * Constructs a new <code>Expiry</code>.
   * Expiry refers to the collection of dates required  for certain items. These could be either expiryDate or mfgDate and expiryAfterDuration. These are mandatory for perishable items.
   * @alias module:vendorShipments/js-client.vendorShipments.model/Expiry
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Expiry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorShipments/js-client.vendorShipments.model/Expiry} obj Optional instance to populate.
   * @return {module:vendorShipments/js-client.vendorShipments.model/Expiry} The populated <code>Expiry</code> instance.
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
      obj = obj || new Expiry();
      if (data.hasOwnProperty('manufacturerDate'))
        obj.manufacturerDate = ApiClient.convertToType(data['manufacturerDate'], 'Date');
      if (data.hasOwnProperty('expiryDate'))
        obj.expiryDate = ApiClient.convertToType(data['expiryDate'], 'Date');
      if (data.hasOwnProperty('expiryAfterDuration'))
        obj.expiryAfterDuration = Duration.constructFromObject(data['expiryAfterDuration']);
    }
    return obj;
  }
}

/**
 * Production, packaging or assembly date determined by the manufacturer. Its meaning is determined based on the trade item context.
 * @member {Date} manufacturerDate
 */
Expiry.prototype.manufacturerDate = undefined;

/**
 * The date that determines the limit of consumption or use of a product. Its meaning is determined based on the trade item context.
 * @member {Date} expiryDate
 */
Expiry.prototype.expiryDate = undefined;

/**
 * Duration after manufacturing date during which the product is valid for consumption.
 * @member {module:vendorShipments/js-client.vendorShipments.model/Duration} expiryAfterDuration
 */
Expiry.prototype.expiryAfterDuration = undefined;

