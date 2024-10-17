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

/**
 * The ShipmentDetails model module.
 * @module vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShipmentDetails
 * @version v1
 */
export class ShipmentDetails {
  /**
   * Constructs a new <code>ShipmentDetails</code>.
   * Details about a shipment.
   * @alias module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShipmentDetails
   * @class
   * @param shippedDate {Date} This field indicates the date of the departure of the shipment from vendor's location. Vendors are requested to send ASNs within 30 minutes of departure from their warehouse/distribution center or at least 6 hours prior to the appointment time at the Amazon destination warehouse, whichever is sooner. Shipped date mentioned in the Shipment Confirmation should not be in the future.
   * @param shipmentStatus {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShipmentDetails.ShipmentStatusEnum} Indicate the shipment status.
   */
  constructor(shippedDate, shipmentStatus) {
    this.shippedDate = shippedDate;
    this.shipmentStatus = shipmentStatus;
  }

  /**
   * Constructs a <code>ShipmentDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShipmentDetails} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShipmentDetails} The populated <code>ShipmentDetails</code> instance.
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
      obj = obj || new ShipmentDetails();
      if (data.hasOwnProperty('shippedDate'))
        obj.shippedDate = ApiClient.convertToType(data['shippedDate'], 'Date');
      if (data.hasOwnProperty('shipmentStatus'))
        obj.shipmentStatus = ApiClient.convertToType(data['shipmentStatus'], 'String');
      if (data.hasOwnProperty('isPriorityShipment'))
        obj.isPriorityShipment = ApiClient.convertToType(data['isPriorityShipment'], 'Boolean');
      if (data.hasOwnProperty('vendorOrderNumber'))
        obj.vendorOrderNumber = ApiClient.convertToType(data['vendorOrderNumber'], 'String');
      if (data.hasOwnProperty('estimatedDeliveryDate'))
        obj.estimatedDeliveryDate = ApiClient.convertToType(data['estimatedDeliveryDate'], 'Date');
    }
    return obj;
  }
}

/**
 * This field indicates the date of the departure of the shipment from vendor's location. Vendors are requested to send ASNs within 30 minutes of departure from their warehouse/distribution center or at least 6 hours prior to the appointment time at the Amazon destination warehouse, whichever is sooner. Shipped date mentioned in the Shipment Confirmation should not be in the future.
 * @member {Date} shippedDate
 */
ShipmentDetails.prototype.shippedDate = undefined;

/**
 * Allowed values for the <code>shipmentStatus</code> property.
 * @enum {String}
 * @readonly
 */
ShipmentDetails.ShipmentStatusEnum = {
  /**
   * value: "SHIPPED"
   * @const
   */
  SHIPPED: "SHIPPED",

  /**
   * value: "FLOOR_DENIAL"
   * @const
   */
  FLOOR_DENIAL: "FLOOR_DENIAL"
};

/**
 * Indicate the shipment status.
 * @member {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShipmentDetails.ShipmentStatusEnum} shipmentStatus
 */
ShipmentDetails.prototype.shipmentStatus = undefined;

/**
 * Provide the priority of the shipment.
 * @member {Boolean} isPriorityShipment
 */
ShipmentDetails.prototype.isPriorityShipment = undefined;

/**
 * The vendor order number is a unique identifier generated by a vendor for their reference.
 * @member {String} vendorOrderNumber
 */
ShipmentDetails.prototype.vendorOrderNumber = undefined;

/**
 * Date on which the shipment is expected to reach the buyer's warehouse. It needs to be an estimate based on the average transit time between the ship-from location and the destination. The exact appointment time will be provided by buyer and is potentially not known when creating the shipment confirmation.
 * @member {Date} estimatedDeliveryDate
 */
ShipmentDetails.prototype.estimatedDeliveryDate = undefined;


