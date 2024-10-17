/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
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
import {FulfillmentShipmentItemList} from './FulfillmentShipmentItemList.js';
import {FulfillmentShipmentPackageList} from './FulfillmentShipmentPackageList.js';
import {Timestamp} from './Timestamp.js';

/**
 * The FulfillmentShipment model module.
 * @module fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/FulfillmentShipment
 * @version 2020-07-01
 */
export class FulfillmentShipment {
  /**
   * Constructs a new <code>FulfillmentShipment</code>.
   * Delivery and item information for a shipment in a fulfillment order.
   * @alias module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/FulfillmentShipment
   * @class
   * @param amazonShipmentId {String} A shipment identifier assigned by Amazon.
   * @param fulfillmentCenterId {String} An identifier for the fulfillment center that the shipment will be sent from.
   * @param fulfillmentShipmentStatus {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/FulfillmentShipment.FulfillmentShipmentStatusEnum} The current status of the shipment.
   * @param fulfillmentShipmentItem {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/FulfillmentShipmentItemList} 
   */
  constructor(amazonShipmentId, fulfillmentCenterId, fulfillmentShipmentStatus, fulfillmentShipmentItem) {
    this.amazonShipmentId = amazonShipmentId;
    this.fulfillmentCenterId = fulfillmentCenterId;
    this.fulfillmentShipmentStatus = fulfillmentShipmentStatus;
    this.fulfillmentShipmentItem = fulfillmentShipmentItem;
  }

  /**
   * Constructs a <code>FulfillmentShipment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/FulfillmentShipment} obj Optional instance to populate.
   * @return {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/FulfillmentShipment} The populated <code>FulfillmentShipment</code> instance.
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
      obj = obj || new FulfillmentShipment();
      if (data.hasOwnProperty('amazonShipmentId'))
        obj.amazonShipmentId = ApiClient.convertToType(data['amazonShipmentId'], 'String');
      if (data.hasOwnProperty('fulfillmentCenterId'))
        obj.fulfillmentCenterId = ApiClient.convertToType(data['fulfillmentCenterId'], 'String');
      if (data.hasOwnProperty('fulfillmentShipmentStatus'))
        obj.fulfillmentShipmentStatus = ApiClient.convertToType(data['fulfillmentShipmentStatus'], 'String');
      if (data.hasOwnProperty('shippingDate'))
        obj.shippingDate = Timestamp.constructFromObject(data['shippingDate']);
      if (data.hasOwnProperty('estimatedArrivalDate'))
        obj.estimatedArrivalDate = Timestamp.constructFromObject(data['estimatedArrivalDate']);
      if (data.hasOwnProperty('shippingNotes'))
        obj.shippingNotes = ApiClient.convertToType(data['shippingNotes'], ['String']);
      if (data.hasOwnProperty('fulfillmentShipmentItem'))
        obj.fulfillmentShipmentItem = FulfillmentShipmentItemList.constructFromObject(data['fulfillmentShipmentItem']);
      if (data.hasOwnProperty('fulfillmentShipmentPackage'))
        obj.fulfillmentShipmentPackage = FulfillmentShipmentPackageList.constructFromObject(data['fulfillmentShipmentPackage']);
    }
    return obj;
  }
}

/**
 * A shipment identifier assigned by Amazon.
 * @member {String} amazonShipmentId
 */
FulfillmentShipment.prototype.amazonShipmentId = undefined;

/**
 * An identifier for the fulfillment center that the shipment will be sent from.
 * @member {String} fulfillmentCenterId
 */
FulfillmentShipment.prototype.fulfillmentCenterId = undefined;

/**
 * Allowed values for the <code>fulfillmentShipmentStatus</code> property.
 * @enum {String}
 * @readonly
 */
FulfillmentShipment.FulfillmentShipmentStatusEnum = {
  /**
   * value: "PENDING"
   * @const
   */
  PENDING: "PENDING",

  /**
   * value: "SHIPPED"
   * @const
   */
  SHIPPED: "SHIPPED",

  /**
   * value: "CANCELLED_BY_FULFILLER"
   * @const
   */
  CANCELLED_BY_FULFILLER: "CANCELLED_BY_FULFILLER",

  /**
   * value: "CANCELLED_BY_SELLER"
   * @const
   */
  CANCELLED_BY_SELLER: "CANCELLED_BY_SELLER"
};

/**
 * The current status of the shipment.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/FulfillmentShipment.FulfillmentShipmentStatusEnum} fulfillmentShipmentStatus
 */
FulfillmentShipment.prototype.fulfillmentShipmentStatus = undefined;

/**
 * The meaning of the `shippingDate` value depends on the current status of the shipment. If the current value of `FulfillmentShipmentStatus` is:  * Pending - `shippingDate` represents the estimated time that the shipment will leave the Amazon fulfillment center.  * Shipped - `shippingDate` represents the date that the shipment left the Amazon fulfillment center. If a shipment includes more than one package, `shippingDate` applies to all of the packages in the shipment. If the value of `FulfillmentShipmentStatus` is `CancelledByFulfiller` or `CancelledBySeller`, `shippingDate` is not returned. The value must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Timestamp} shippingDate
 */
FulfillmentShipment.prototype.shippingDate = undefined;

/**
 * The estimated arrival date and time of the shipment. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format. Note that this value can change over time. If a shipment includes more than one package, `estimatedArrivalDate` applies to all of the packages in the shipment. If the shipment has been cancelled, `estimatedArrivalDate` is not returned.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Timestamp} estimatedArrivalDate
 */
FulfillmentShipment.prototype.estimatedArrivalDate = undefined;

/**
 * Provides additional insight into shipment timeline. Primairly used to communicate that actual delivery dates aren't available.
 * @member {Array.<String>} shippingNotes
 */
FulfillmentShipment.prototype.shippingNotes = undefined;

/**
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/FulfillmentShipmentItemList} fulfillmentShipmentItem
 */
FulfillmentShipment.prototype.fulfillmentShipmentItem = undefined;

/**
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/FulfillmentShipmentPackageList} fulfillmentShipmentPackage
 */
FulfillmentShipment.prototype.fulfillmentShipmentPackage = undefined;


