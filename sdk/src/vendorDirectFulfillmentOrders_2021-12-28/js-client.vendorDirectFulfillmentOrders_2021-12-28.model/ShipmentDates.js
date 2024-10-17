/*
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
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

/**
 * The ShipmentDates model module.
 * @module vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/ShipmentDates
 * @version 2021-12-28
 */
export class ShipmentDates {
  /**
   * Constructs a new <code>ShipmentDates</code>.
   * Shipment dates.
   * @alias module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/ShipmentDates
   * @class
   * @param requiredShipDate {Date} Time by which the vendor is required to ship the order.
   */
  constructor(requiredShipDate) {
    this.requiredShipDate = requiredShipDate;
  }

  /**
   * Constructs a <code>ShipmentDates</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/ShipmentDates} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/ShipmentDates} The populated <code>ShipmentDates</code> instance.
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
      obj = obj || new ShipmentDates();
      if (data.hasOwnProperty('requiredShipDate'))
        obj.requiredShipDate = ApiClient.convertToType(data['requiredShipDate'], 'Date');
      if (data.hasOwnProperty('promisedDeliveryDate'))
        obj.promisedDeliveryDate = ApiClient.convertToType(data['promisedDeliveryDate'], 'Date');
    }
    return obj;
  }
}

/**
 * Time by which the vendor is required to ship the order.
 * @member {Date} requiredShipDate
 */
ShipmentDates.prototype.requiredShipDate = undefined;

/**
 * Delivery date promised to the Amazon customer.
 * @member {Date} promisedDeliveryDate
 */
ShipmentDates.prototype.promisedDeliveryDate = undefined;


