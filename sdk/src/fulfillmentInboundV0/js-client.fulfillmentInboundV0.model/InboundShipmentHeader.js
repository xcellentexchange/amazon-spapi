/*
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
 *
 * OpenAPI spec version: v0
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
import {Address} from './Address.js';
import {IntendedBoxContentsSource} from './IntendedBoxContentsSource.js';
import {LabelPrepPreference} from './LabelPrepPreference.js';
import {ShipmentStatus} from './ShipmentStatus.js';

/**
 * The InboundShipmentHeader model module.
 * @module fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentHeader
 * @version v0
 */
export class InboundShipmentHeader {
  /**
   * Constructs a new <code>InboundShipmentHeader</code>.
   * Inbound shipment information used to create and update inbound shipments.
   * @alias module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentHeader
   * @class
   * @param shipmentName {String} The name for the shipment. Use a naming convention that helps distinguish between shipments over time, such as the date the shipment was created.
   * @param shipFromAddress {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Address} The return address.
   * @param destinationFulfillmentCenterId {String} The identifier for the fulfillment center to which the shipment will be shipped. Get this value from the InboundShipmentPlan object in the response returned by the createInboundShipmentPlan operation.
   * @param shipmentStatus {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/ShipmentStatus} 
   * @param labelPrepPreference {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/LabelPrepPreference} The preference for label preparation for an inbound shipment.
   */
  constructor(shipmentName, shipFromAddress, destinationFulfillmentCenterId, shipmentStatus, labelPrepPreference) {
    this.shipmentName = shipmentName;
    this.shipFromAddress = shipFromAddress;
    this.destinationFulfillmentCenterId = destinationFulfillmentCenterId;
    this.shipmentStatus = shipmentStatus;
    this.labelPrepPreference = labelPrepPreference;
  }

  /**
   * Constructs a <code>InboundShipmentHeader</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentHeader} obj Optional instance to populate.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentHeader} The populated <code>InboundShipmentHeader</code> instance.
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
      obj = obj || new InboundShipmentHeader();
      if (data.hasOwnProperty('ShipmentName'))
        obj.shipmentName = ApiClient.convertToType(data['ShipmentName'], 'String');
      if (data.hasOwnProperty('ShipFromAddress'))
        obj.shipFromAddress = Address.constructFromObject(data['ShipFromAddress']);
      if (data.hasOwnProperty('DestinationFulfillmentCenterId'))
        obj.destinationFulfillmentCenterId = ApiClient.convertToType(data['DestinationFulfillmentCenterId'], 'String');
      if (data.hasOwnProperty('AreCasesRequired'))
        obj.areCasesRequired = ApiClient.convertToType(data['AreCasesRequired'], 'Boolean');
      if (data.hasOwnProperty('ShipmentStatus'))
        obj.shipmentStatus = ShipmentStatus.constructFromObject(data['ShipmentStatus']);
      if (data.hasOwnProperty('LabelPrepPreference'))
        obj.labelPrepPreference = LabelPrepPreference.constructFromObject(data['LabelPrepPreference']);
      if (data.hasOwnProperty('IntendedBoxContentsSource'))
        obj.intendedBoxContentsSource = IntendedBoxContentsSource.constructFromObject(data['IntendedBoxContentsSource']);
    }
    return obj;
  }
}

/**
 * The name for the shipment. Use a naming convention that helps distinguish between shipments over time, such as the date the shipment was created.
 * @member {String} shipmentName
 */
InboundShipmentHeader.prototype.shipmentName = undefined;

/**
 * The return address.
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Address} shipFromAddress
 */
InboundShipmentHeader.prototype.shipFromAddress = undefined;

/**
 * The identifier for the fulfillment center to which the shipment will be shipped. Get this value from the InboundShipmentPlan object in the response returned by the createInboundShipmentPlan operation.
 * @member {String} destinationFulfillmentCenterId
 */
InboundShipmentHeader.prototype.destinationFulfillmentCenterId = undefined;

/**
 * Indicates whether or not an inbound shipment contains case-packed boxes. Note: A shipment must contain either all case-packed boxes or all individually packed boxes.  Possible values:  true - All boxes in the shipment must be case packed.  false - All boxes in the shipment must be individually packed.  Note: If AreCasesRequired = true for an inbound shipment, then the value of QuantityInCase must be greater than zero for every item in the shipment. Otherwise the service returns an error.
 * @member {Boolean} areCasesRequired
 */
InboundShipmentHeader.prototype.areCasesRequired = undefined;

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/ShipmentStatus} shipmentStatus
 */
InboundShipmentHeader.prototype.shipmentStatus = undefined;

/**
 * The preference for label preparation for an inbound shipment.
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/LabelPrepPreference} labelPrepPreference
 */
InboundShipmentHeader.prototype.labelPrepPreference = undefined;

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/IntendedBoxContentsSource} intendedBoxContentsSource
 */
InboundShipmentHeader.prototype.intendedBoxContentsSource = undefined;


