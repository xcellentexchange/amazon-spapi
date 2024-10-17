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
import {ShipmentStatusUpdate} from './ShipmentStatusUpdate.js';

/**
 * The SubmitShipmentStatusUpdatesRequest model module.
 * @module vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/SubmitShipmentStatusUpdatesRequest
 * @version 2021-12-28
 */
export class SubmitShipmentStatusUpdatesRequest {
  /**
   * Constructs a new <code>SubmitShipmentStatusUpdatesRequest</code>.
   * The `submitShipmentStatusUpdates` request schema.
   * @alias module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/SubmitShipmentStatusUpdatesRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SubmitShipmentStatusUpdatesRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/SubmitShipmentStatusUpdatesRequest} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/SubmitShipmentStatusUpdatesRequest} The populated <code>SubmitShipmentStatusUpdatesRequest</code> instance.
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
      obj = obj || new SubmitShipmentStatusUpdatesRequest();
      if (data.hasOwnProperty('shipmentStatusUpdates'))
        obj.shipmentStatusUpdates = ApiClient.convertToType(data['shipmentStatusUpdates'], [ShipmentStatusUpdate]);
    }
    return obj;
  }
}

/**
 * Contains a list of one or more `ShipmentStatusUpdate` objects, each represents a status update of a specific shipment.
 * @member {Array.<module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ShipmentStatusUpdate>} shipmentStatusUpdates
 */
SubmitShipmentStatusUpdatesRequest.prototype.shipmentStatusUpdates = undefined;


